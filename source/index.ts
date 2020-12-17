#!/usr/bin/env node
import meow from 'meow';
import App from './components/App';
const pkgJson = require('../package.json');

// 帮助信息
const HELP_MESSAGE = `
  Usage:
    $ gakki <command> [options]

  Options:
    -v, --version ${pkgJson.version}
    -h, --help    Output usage information

  Commands:
    init          Init project with var configs
    start         Run all project npm dev tasks
    create        Create a new fe project
    create-cmp    Create a new react component
    update-deps   Update all deps to latest version
    merge-back    Merge code back to dev branch and master branch
`;

const cli = meow({
  help: HELP_MESSAGE,
  autoHelp: false,
  autoVersion: false,
  description: false,
  flags: {
    version: {
      type: 'boolean',
      alias: 'v',
    },
    help: {
      type: 'boolean',
      alias: 'h',
    },
  },
});

App(cli);
