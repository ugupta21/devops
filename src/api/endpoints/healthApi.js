class HealthApi {
  constructor(httpClient) {
    this.httpClient = httpClient;
  }

  async getRootHealth() {
    const response = await this.httpClient.get('/');
    await this.httpClient.assertStatus(response, 200);
    return response;
  }
}

module.exports = { HealthApi };
