import { render } from 'ink';
import meow from 'meow';
import React from 'react';
import CreateCmp from './commands/create-cmp';

export const enum COMMANDS {
  INIT_CONFIG = 'init',
  START_DEV = 'start',
  CREATE_PROJECT = 'create',
  CREATE_CMP = 'create-cmp',
  UPDATE_DEPS = 'update-deps',
  MERGE_BACK = 'merge-back',
}
export default function App(
  cli: meow.Result<{
    version: {
      type: 'boolean';
      alias: string;
    };
    help: {
      type: 'boolean';
      alias: string;
    };
  }>
) {
  const { input, flags } = cli;
  // 取第一条当命令
  const command = input[0];
  if (input.length === 0) {
    if (flags.version) {
      cli.showVersion();
    }
    // 检测到`-h`或者`--help`，输出帮助信息
    if (flags.help) {
      cli.showHelp(0);
    }
    // 没有任何参数和标志，输出帮助信息
    return cli.showHelp(1);
  } else {
    switch (command) {
      case COMMANDS.CREATE_CMP:
        return render(<CreateCmp />);

      default:
        cli.showHelp(0);
        return null;
    }
  }
}
