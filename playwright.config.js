const { defineConfig, devices } = require('@playwright/test');
const { env } = require('./src/config/env');

module.exports = defineConfig({
  testDir: './tests',
  timeout: env.timeout,
  expect: {
    timeout: env.expectTimeout
  },
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 2 : undefined,
  reporter: [
    ['list'],
    ['html', { open: 'never', outputFolder: 'playwright-report' }],
    ['json', { outputFile: 'test-results/results.json' }]
  ],
  use: {
    baseURL: env.baseUrl,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    extraHTTPHeaders: {
      Accept: 'application/json'
    }
  },

  projects: [
    {
      name: 'ui-chromium',
      testMatch: /.*\.ui\.spec\.js|ui\/.*\.spec\.js/,
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 1440, height: 900 }
      }
    },
    {
      name: 'api',
      testMatch: /.*\.api\.spec\.js|api\/.*\.spec\.js/,
      use: {
        baseURL: env.apiBaseUrl
      }
    }
  ],

  outputDir: 'test-results/artifacts'
});
