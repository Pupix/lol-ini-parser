# lol-ini-parser
A parser for .ini files from League of Legends.

## Download
lol-ini-parser is installable via:

- [GitHub](https://github.com/Pupix/lol-ini-parser) `git clone https://github.com/Pupix/lol-ini-parser.git`
- [npm](https://www.npmjs.com/): `npm install lol-ini-parser`

## Usage example

```js
var IniParser = require('lol-ini-parser'),
    ini = new IniParser();
    
    // Read the package.json file
    ini.read('Kindred.ini', function (err, data) {
        console.log(data);
        //  {
        //      "Info": {
        //          "IconCircle": "Kindred_Circle.dds",
        //          "IconSquare": "Kindred_Square.dds"
        //      },
        //      "Data: {
        //          "SelectionHeight": 155,
        //          "Name": "game_character_displayname_Kindred",
        //          "BaseHP": 540,
        //          "BaseMP":300
        //          ...
        //      }
        //      ...
        //  }
    });

```

## Available methods

**N.B:** All methods act as promises if no callback is passed.

### parse(path, cb)

It will roughly parse a .ini file from the given path.

**Parameters**

1. **path {string}** A path to where the file to parse resides.
2. **[cb] {Function}** A callback called with `(error, parsedData)` as arguments.

### read(path, cb)

It will read a .ini file from the given path, casting all the data into the right variable.

**Parameters**

1. **path {string}** A path to where the file to read resides.
2. **[cb] {Function}** A callback called with `(error, readData)` as arguments.

