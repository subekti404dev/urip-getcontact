# Urip GetContact

an unofficial api wrapper for getcontact

### How to Install
```bash
npm install subekti404dev/urip-getcontact
```
### How to Use
```javascript
const UripGetContact = require('urip-getcontact');

const getContact = new UripGetContact("GETCONTACT_TOKEN", "GETCONTACT_KEY");

getContact.checkNumber("087711223344")
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    })
```