import { PlaywrightTestConfig, devices } from '@playwright/test';
import { config as dotenvConfig } from 'dotenv';

// Carrega as variáveis de ambiente do arquivo .env
dotenvConfig();

// Aqui você pode acessar as variáveis de ambiente, por exemplo:
const environment = process.env.ENV || 'prod'; // 'prod' é o valor padrão se ENV não estiver definido

const config: PlaywrightTestConfig = {
  testDir: 'src/scenarios',
  timeout: 60000,
  retries: 0,
  use: {
    trace: 'on',
    locale: 'pt-BR',
    headless: environment === 'prod' ? true : false, // Exemplo: ativar modo headless apenas em produção
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    screenshot: 'on',
    video: 'off'
  },
    // expect: {
  //   timeout: 30000
  // },
  //  projects: [
  //   {
  //     name: 'Mobile Chrome',
  //     use: { ...devices['Pixel 5'] }
  //   },
  //   {
  //     name: 'firefox',
  //     use: { ...devices['Desktop Firefox'] }
  //   }
  // ], 
  reporter: [
    [
      'html',
      {
        outputFolder: 'artifacts/report',
        open: 'never'
      }
    ]
  ]
};

export default config;
