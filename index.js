'use strict'

module.exports.contDo = function (array) {
    if (array.length === 1) {
        return array[0];
    }

    return function (next) {
        array[0] (function () {
            (contDo (array.slice(1))) (next);
        });
    }
};


module.exports.contDoStrict = function (array) {
    var first = array[0];
    if (array.length === 1) {
        return first;
    }
    var continuation = contDoStrict (array.slice(1));
    return function (next) {
        first (function () {
            continuation (next);
        });
    }
};

module.exports.terminate = function () {
    return;
};
