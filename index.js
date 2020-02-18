const inputHandler = require('./lib/input-handler');
const fileHandler = require('./lib/file-handler');

inputHandler.getPrompt().then(args => {
    if (!args) throw Error('args is empty');
    handleWritingFile(args);
})

const handleWritingFile = async (args) => {
    try {
        let successfullyAppendedFile = await fileHandler.writeFile(args.fileName, args.filePath, args.content);
        console.log(successfullyAppendedFile);

        // notice that writeFile always returns true when no exception occurs
        if (successfullyAppendedFile) { console.log('your file has successfully been saved'); }
        else { console.log('Oops something went wrong.. I am not sure if we saved your content correctly') }

    } catch (error) {
        console.log('something critical went wrong while trying to save your input to a file');
        console.log(error);
    }
}