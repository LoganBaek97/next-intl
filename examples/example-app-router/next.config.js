// @ts-check

const withNextIntl = require('next-intl/plugin')();

/** @type {import('next').NextConfig} */
const config = {
  experimental: {
    instrumentationHook: true
  }
};

module.exports = withNextIntl(config);
