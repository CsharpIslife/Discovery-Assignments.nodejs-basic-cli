//imports
const fs = require('fs');
const path = require('path')

//constants
const encoding = 'utf8';

//module.exports
module.exports = {
    writeFile: (fileName, filePath, content) => {
        validateInput(fileName, filePath, content);
        const absFilePath = getAbsoluteFilePath(fileName, filePath)

        fs.appendFileSync(absFilePath, content, encoding)
        return true;
    }
}

const validateInput = (fileName, filePath, content) => {
    if (!fileName) throw Error(`empty of param: ${Object.keys({ fileName })[0]}`);
    if (!filePath) throw Error(`empty of param: ${Object.keys({ filePath })[0]}`);
    if (!content) throw Error(`empty of param: ${Object.keys({ content })[0]}`);
}

const getAbsoluteFilePath = (fileName, filePath) => {
    return path.resolve(filePath, fileName);
}
