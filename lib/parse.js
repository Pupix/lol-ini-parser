(function () {
    'use strict';

    // Vars
    var XP = require('expandjs');

    /*********************************************************************/

    module.exports = function (parser, cb) {
        var ini = {},
            category,
            lines = parser.stringView().join('').split(/\r\n|\n/),
            categoryRegExp = /^\[(.+)\]$/,
            lineRegExp = /^(\w+)\s*=\s*(.*)$/;

        // Remove comments and empty lines
        lines = XP.filter(lines, function (line) {
            return !line.match(/^;|^$/);
        });

        // Parse lines
        XP.forEach(lines, function (line) {
            line = XP.trim(line);

            // Add new category or add a property to the current category
            if (categoryRegExp.test(line)) {
                line = line.match(categoryRegExp)[1];
                ini[line] = {};
                category = line;
            } else if (lineRegExp.test(line)) {
                line = line.match(lineRegExp);
                ini[category][line[1]] = line[2];
            }
        });

        cb(null, ini);

    };

}());
