const base = require('@playwright/test');
const { HttpClient } = require('../api/httpClient');
const { HealthApi } = require('../api/endpoints/healthApi');
const { HomePage } = require('../ui/pages/HomePage');

const test = base.test.extend({
  apiClient: async ({ request }, use) => {
    const client = new HttpClient(request);
    await use(client);
  },

  healthApi: async ({ apiClient }, use) => {
    const healthApi = new HealthApi(apiClient);
    await use(healthApi);
  },

  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);
    await use(homePage);
  }
});

module.exports = {
  test,
  expect: base.expect
};
