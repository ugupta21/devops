const { test, expect } = require('../../src/fixtures/testFixtures');

test.describe('API | Health checks', () => {
  test('GET / should return service health text', async ({ healthApi }) => {
    const response = await healthApi.getRootHealth();
    const body = await response.text();

    expect(body).toContain('How are you doing');
  });
});
