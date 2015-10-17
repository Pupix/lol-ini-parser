(function () {
    'use strict';

    // Vars
    var XP = require('expandjs');

    /*********************************************************************/

    module.exports = function (data, cb) {

        XP.forOwn(data, function (category) {
            XP.forOwn(category, function (value, variable) {
                if (XP.isNumeric(value)) {
                    category[variable] = XP.toNumber(value);
                } else if (XP.isBoolean(value, true)) {
                    category[variable] = XP.toBoolean(value);
                }
            });
        });

        cb(null, data);

    };

}());
