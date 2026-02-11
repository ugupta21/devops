const { expect } = require('@playwright/test');
const { env } = require('../config/env');
const { logger } = require('../utils/logger');

class HttpClient {
  constructor(requestContext) {
    this.request = requestContext;
  }

  async get(path, options = {}) {
    return this.#send('GET', path, options);
  }

  async post(path, options = {}) {
    return this.#send('POST', path, options);
  }

  async put(path, options = {}) {
    return this.#send('PUT', path, options);
  }

  async patch(path, options = {}) {
    return this.#send('PATCH', path, options);
  }

  async delete(path, options = {}) {
    return this.#send('DELETE', path, options);
  }

  async assertStatus(response, expectedStatus) {
    expect(response.status(), `Unexpected status for ${response.url()}`).toBe(expectedStatus);
  }

  async assertOk(response) {
    expect(response.ok(), `Expected OK response for ${response.url()}`).toBeTruthy();
  }

  async parseJson(response) {
    const body = await response.json();
    logger.info('Response JSON parsed', { url: response.url(), status: response.status() });
    return body;
  }

  async #send(method, path, options = {}) {
    const mergedOptions = {
      ...options,
      headers: {
        ...env.defaultHeaders,
        ...(options.headers || {})
      }
    };

    logger.info(`Sending ${method} request`, { path });
    const response = await this.request.fetch(path, {
      ...mergedOptions,
      method
    });
    logger.info(`Received ${method} response`, {
      path,
      status: response.status()
    });
    return response;
  }
}

module.exports = { HttpClient };
