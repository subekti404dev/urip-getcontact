const {
  AES,
  mode: { ECB },
  HmacSHA256,
  enc: { Hex, Utf8, Base64 },
} = require("crypto-js");

const opt = { mode: ECB };

module.exports = {
  encrypt: (data, finalKey = "") =>
    AES.encrypt(data, Hex.parse(finalKey), opt)?.toString(),
  decrypt: (data, finalKey = "") =>
    AES.decrypt(data.toString(), Hex.parse(finalKey), opt)?.toString(Utf8),
  signature: (timestamp, decryptMessage, key = "") => {
    return HmacSHA256(
      `${timestamp}-${decryptMessage}`,
      Hex.parse(key)
    )?.toString(Base64);
  },
  hexToUtf8: (hex) => Hex.parse(hex).toString(Utf8),
};
