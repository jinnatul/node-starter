#!/usr/bin/env node

const { execSync } = require('child_process');

const RunCommand = (command) => {
    try {
        execSync(`${command}`, {stdio: 'inherit'});
    } catch (error) {
        console.error(`Failed to execute ${command}`, error);
        return false;
    }
    return true;
}

const repoName = process.argv[2];
const gitCheckoutCommand = `git clone --depth 1 https://github.com/jinnatul/nano-app ${repoName}`;
const installDepsCommand = `cd ${repoName} && npm install`;

console.log(`\n\n${"\033[32m"} Creating a new Node app in ${__dirname}.\n\n`);
const CheckedOut = RunCommand(gitCheckoutCommand);
if (!CheckedOut) process.exit(-1);

console.log(`\n${"\033[31m"} Installing dependencies for ${repoName}\n`);
const InstalledDeps = RunCommand(installDepsCommand);
if (!InstalledDeps) process.exit(-1);

console.log(`\n${"\033[32m"} Congratulations! You are ready.`)
console.log(`\n${"\033[33m"} This node.js template maintained by Morol`);
console.log(`\n${"\033[35m"} Dev -> cd ${repoName} && npm run dev`);
console.log(`\n${"\033[31m"} Prod -> cd ${repoName} && npm start\n`);
