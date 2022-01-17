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

console.log(`Cloning the repository with name ${repoName}`);
const CheckedOut = RunCommand(gitCheckoutCommand);
if (!CheckedOut) process.exit(-1);

console.log(`Installing dependencies for ${repoName}`);
const InstalledDeps = RunCommand(installDepsCommand);
if (!InstalledDeps) process.exit(-1);

console.log(`Congratulations! You are ready.`)
console.log(`cd ${repoName} && npm run dev`);
