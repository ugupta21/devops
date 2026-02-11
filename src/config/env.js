const dotenv = require('dotenv');

dotenv.config();

const toNumber = (value, defaultValue) => {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : defaultValue;
};

const env = {
  baseUrl: process.env.BASE_URL || 'http://localhost:80',
  apiBaseUrl: process.env.API_BASE_URL || process.env.BASE_URL || 'http://localhost:80',
  timeout: toNumber(process.env.TEST_TIMEOUT_MS, 45_000),
  expectTimeout: toNumber(process.env.EXPECT_TIMEOUT_MS, 10_000),
  defaultHeaders: {
    'Content-Type': 'application/json'
  }
};

module.exports = { env };
