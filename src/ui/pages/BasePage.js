const { expect } = require('@playwright/test');

class BasePage {
  constructor(page) {
    this.page = page;
  }

  async goto(path = '/') {
    await this.page.goto(path, { waitUntil: 'domcontentloaded' });
  }

  async assertUrlContains(pathFragment) {
    await expect(this.page).toHaveURL(new RegExp(pathFragment));
  }
}

module.exports = { BasePage };
