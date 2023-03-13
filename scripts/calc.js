const { interopRequireDefault } = require("jest-util");
const { number } = require("yargs");
const { string } = require("yargs");

function addition(num1, num2) {
    /*if (num1, num2 == null) {
        return 0 + 0;
    }
    else if (num1, num2 != number) {
        return 0 + 0;
    }
    else { */
    return num1 + num2;
    }

//}

module.exports = addition;