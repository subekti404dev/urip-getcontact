# Urip GetContact

(Not Working Anymore)

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

### How to Get Token
Requirements: Android with ROOT-rights (or emulator).

- Install and login into getcontact
- Open in filemanager of phone `/data/data/app.source.getcontact/shared_prefs/GetContactSettingsPref.xml`

```
GETCONTACT_KEY: FINAL_KEY
GETCONTACT_TOKEN: TOKEN
```

### Video Tutorial
<a href="http://www.youtube.com/watch?feature=player_embedded&v=sFuAMxQLVdg" target="_blank">
 <img src="http://img.youtube.com/vi/sFuAMxQLVdg/mqdefault.jpg" alt="Watch the video" width="320" height="180" border="10" />
</a>
