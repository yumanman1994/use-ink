import meow from 'meow';

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
  if (input.length === 0) {
    if (flags.version) {
      cli.showVersion();
    }
    // 检测到`-h`或者`--help`，输出帮助信息
    if (flags.help) {
      cli.showHelp(0);
    }
    // 没有任何参数和标志，输出帮助信息
    cli.showHelp(1);
  }
  console.log(input);
}
