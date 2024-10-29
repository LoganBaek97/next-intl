import type {SizeLimitConfig} from 'size-limit';

const config: SizeLimitConfig = [
  {
    name: "import * from 'next-intl' (react-client, production)",
    path: 'dist/esm/production/index.react-client.js',
    limit: '13.205 KB'
  },
  {
    name: "import {NextIntlClientProvider} from 'next-intl' (react-client, production)",
    import: '{NextIntlClientProvider}',
    path: 'dist/esm/production/index.react-client.js',
    limit: '1.035 KB'
  },
  {
    name: "import * from 'next-intl' (react-server, production)",
    path: 'dist/esm/production/index.react-server.js',
    limit: '14.165 KB'
  },
  {
    name: "import {createNavigation} from 'next-intl/navigation' (react-client, production)",
    path: 'dist/esm/production/navigation.react-client.js',
    import: '{createNavigation}',
    limit: '2.525 KB'
  },
  {
    name: "import {createNavigation} from 'next-intl/navigation' (react-server, production)",
    path: 'dist/esm/production/navigation.react-server.js',
    import: '{createNavigation}',
    limit: '3.425 KB'
  },
  {
    name: "import * from 'next-intl/server' (react-client, production)",
    path: 'dist/esm/production/server.react-client.js',
    limit: '1 KB'
  },
  {
    name: "import * from 'next-intl/server' (react-server, production)",
    path: 'dist/esm/production/server.react-server.js',
    limit: '13.385 KB'
  },
  {
    name: "import * from 'next-intl/middleware' (production)",
    path: 'dist/esm/production/middleware.js',
    limit: '9.295 KB'
  },
  {
    name: "import * from 'next-intl/routing' (production)",
    path: 'dist/esm/production/routing.js',
    limit: '1 KB'
  }
];

module.exports = config;
