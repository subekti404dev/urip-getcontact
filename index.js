const AWAS_BINTITAN = `793167597c4a25263656206b5469243e5f416c69385d2f7843716d4d4d5031242a29493846774a2c2a725f59554d2034683f40372b40233c3e2b772d6533565768747470733a2f2f7062737372762d63656e7472616c6576656e74732e636f6d2f76322e382f6e756d6265722d64657461696c`;
const { encrypt, signature, decrypt } = require("./utils/crypt");

class GetContact {
  constructor(token, finalKey) {
    this._token = token;
    this._finalKey = finalKey;
  }

  async checkNumber(number) {
    try {
      if (!this._token) throw new Error("Token is required!");
      if (!this._finalKey) throw new Error("Final key is required!");
      number = await require("./utils/validate")(number);
      const p = {
        countryCode: "us",
        phoneNumber: number,
        source: "profile",
        token: this._token,
      };

      const ts = Date.now().toString();
      const st = signature(
        ts,
        JSON.stringify(p),
        AWAS_BINTITAN.replace(AWAS_BINTITAN.substring(128), "")
      );

      const res = await require("./utils/request")(
        AWAS_BINTITAN.substring(128),
        encrypt(JSON.stringify(p), this._finalKey),
        {
          "X-Os": "android 9",
          "X-Mobile-Service": "GMS",
          "X-App-Version": "5.6.2",
          "X-Client-Device-Id": "063579f5e0654a4e",
          "X-Lang": "en_US",
          "X-Token": this._token,
          "X-Req-Timestamp": ts,
          "X-Encrypted": "1",
          "X-Network-Country": "us",
          "X-Country-Code": "us",
          "X-Req-Signature": st,
        }
      );
      const jsonRes = JSON.parse(decrypt(res?.data?.data, this._finalKey));
      return {
        number,
        tags: (jsonRes?.result?.tags || []).map((t) => t.tag),
      };
    } catch (error) {
      const encryptedErr = error?.response?.data?.data;
      const errMsg = encryptedErr
        ? decrypt(encryptedErr, this._finalKey)
        : error.message || "Something went wrong";
      throw new Error(errMsg);
    }
  }
}

module.exports = GetContact;
