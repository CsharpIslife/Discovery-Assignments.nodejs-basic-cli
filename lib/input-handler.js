const inquirer = require('inquirer');

module.exports = {
    getPrompt: () => inquirer.prompt(prompt)
}

const prompt = [
    {
        type: 'input',
        message: 'Enter a filename to save content (excluding file ext.)',
        name: 'fileName',
    },
    {
        type: 'input',
        message: 'In which directory do you want to save this file?',
        name: 'filePath',
        default: () => getCurrentDirectory()
    },
    {
        type: 'input',
        message: 'Enter the phrase you want to save to this file',
        name: 'content'
    }
];

const getCurrentDirectory = () => {
    return process.cwd();
}
