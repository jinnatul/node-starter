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

console.log(`\n${"\033[36m"} Cloning the repository with name ${repoName}\n`);
const CheckedOut = RunCommand(gitCheckoutCommand);
if (!CheckedOut) process.exit(-1);

console.log(`\n${"\033[31m"} Installing dependencies for ${repoName}\n`);
const InstalledDeps = RunCommand(installDepsCommand);
if (!InstalledDeps) process.exit(-1);

console.log(`\n${"\033[32m"} Congratulations! You are ready.`)
console.log('\n%c Morol', 'font-weight: bold; font-size: 50px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)');
console.log(`\n${"\033[35m"} Dev -> cd ${repoName} && npm run dev`);
console.log(`\n${"\033[31m"} Prod -> cd ${repoName} && npm start`);
