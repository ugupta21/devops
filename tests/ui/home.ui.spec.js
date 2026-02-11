const { test } = require('../../src/fixtures/testFixtures');

test.describe('UI | Home page', () => {
  test('should show welcome message on load', async ({ homePage }) => {
    await homePage.open();
    await homePage.assertWelcomeText('How are you doing');
  });
});
