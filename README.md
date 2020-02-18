# Introduction
This sample showcases one way to prompt command-line arguments by using 
[inquirer](https://www.npmjs.com/package/inquirer) for beginning js programmers.  

To start working on building your own cli tool, the "master" branch is published as 1 behind the "master-solution". (So whenever your stuck.. have a quick peek at the master-solution branch)

**Typically, organizations acquire command-line arguments in a more fashionable manner**, but for now this wil do.

But if you want to be fancy use observables: https://github.com/SBoudrias/Inquirer.js/blob/master/packages/inquirer/examples/rx-observable-create.js)

# The assignment

Your going to build a node.js cli tool that your able to install as an independent node module. 

## We will do the following

* Prompt the user for:
  * A filename 
  * path to store the file
  * content to store into the (to be created) file
* Use the file system and path to:
  * Write text string in a new file
  * Retrieve the absolute file path.

To start building you should start in the index.js as our starting point.
As soon as you start you will notice, that there are plenty of commented "TODO's" that will help you on your way. 

To make sense of it all you should know the following:
* **Use google before** peaking into the solution branch
* **some lines of code are incomplete.** e.g. (the imports in index.js) Hints on what you should google are hidden away in the comments.
* the 'setup' code for inquiring/prompting the user input should stay in input-handler.js
* the logic for writing to a file should stay in file-handler.js


ps. if you find this helpful, I might upload a more advanced project to handle commandline arguments with node.js 

### Have fun.. Cheers :)

## Links you might find helpfull:
* Inquirer: https://github.com/SBoudrias/Inquirer.js#readme
* Node.js docs e.g. filesystem https://nodejs.org/api/fs.html


