import { Command } from 'commander';
import chalk from 'chalk';
import ora from 'ora';
import { getConfig, setConfig, isConfigured } from './config.js';
import { makeRequest } from './api.js';

const program = new Command();

function printSuccess(message) {
  console.log(chalk.green('✓') + ' ' + message);
}

function printError(message) {
  console.error(chalk.red('✗') + ' ' + message);
}

function printJson(data) {
  console.log(JSON.stringify(data, null, 2));
}

async function withSpinner(message, fn) {
  const spinner = ora(message).start();
  try {
    const result = await fn();
    spinner.stop();
    return result;
  } catch (error) {
    spinner.stop();
    throw error;
  }
}

function requireAuth() {
  if (!isConfigured()) {
    printError('API key not configured.');
    console.log('\nRun: ' + chalk.cyan('rawg config set --api-key YOUR_KEY'));
    process.exit(1);
  }
}

program
  .name('rawg')
  .description(chalk.bold('RAWG Video Games Database CLI'))
  .version('1.0.0');

// CONFIG
const configCmd = program.command('config').description('Manage CLI configuration');

configCmd
  .command('set')
  .description('Set configuration values')
  .option('--api-key <key>', 'API key')
  .option('--base-url <url>', 'Base API URL')
  .action((options) => {
    if (options.apiKey) {
      setConfig('apiKey', options.apiKey);
      printSuccess('API key configured');
    }
    if (options.baseUrl) {
      setConfig('baseUrl', options.baseUrl);
      printSuccess('Base URL configured');
    }
  });

configCmd
  .command('show')
  .description('Show current configuration')
  .action(() => {
    const cfg = getConfig();
    console.log(chalk.bold('Current Configuration:'));
    console.log('API Key:', cfg.apiKey ? chalk.green('***' + cfg.apiKey.slice(-4)) : chalk.red('not set'));
    console.log('Base URL:', cfg.baseUrl || chalk.dim('(default)'));
  });

// Add more commands here based on the API spec

program.parse();
