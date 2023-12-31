/*
 * @Descripttion: 
 * @Author: niezihao
 * @Date: 2023-12-05 11:12:34
 * @LastEditors: niezihao
 * @LastEditTime: 2023-12-28 16:53:34
 */
import download from 'download-git-repo';
import chalk from 'chalk';
import ora from 'ora';

export default (remote, name, option) => {
  const downSpinner = ora('正在下载模板...').start();
  return new Promise((resolve, reject) => {
    download(remote, name, option, (err) => {
      if (err) {
        downSpinner.fail();
        console.log('err', chalk.red(err));
        reject(err);
        return;
      }
      downSpinner.succeed(chalk.green('模板下载成功！'));
      console.log(chalk.green(`cd ${name}\r\n`));
      console.log(chalk.blue('pnpm install\r\n'));
      console.log('pnpm run build:earnie\r\n');
      console.log('pnpm run earnie:dev\r\n');
      resolve();
    });
  });
};
