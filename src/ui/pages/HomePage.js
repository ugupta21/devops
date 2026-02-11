const { expect } = require('@playwright/test');
const { BasePage } = require('./BasePage');

class HomePage extends BasePage {
  constructor(page) {
    super(page);
    this.pageHeader = page.locator('body');
  }

  async open() {
    await this.goto('/');
  }

  async assertWelcomeText(expectedText) {
    await expect(this.pageHeader).toContainText(expectedText);
  }
}

module.exports = { HomePage };
