const testsForPackage = (packageName) => `<rootDir>/packages/${packageName}/**/*.test.[jt]s?(x)`

module.exports = {
  projects: [
    {
      displayName: 'core',
      testMatch: [
        testsForPackage('core')
      ]
    },
    {
      displayName: 'shared plugins',
      testMatch: [
        testsForPackage('plugin-app-duration')
      ]
    },
    {
      displayName: 'browser plugins',
      testMatch: [
        testsForPackage('plugin-react'),
        testsForPackage('plugin-vue'),
        testsForPackage('plugin-browser-context'),
        testsForPackage('plugin-browser-device'),
        testsForPackage('plugin-browser-request'),
        testsForPackage('plugin-window-unhandled-rejection'),
        testsForPackage('plugin-window-onerror'),
        testsForPackage('plugin-strip-query-string'),
        testsForPackage('plugin-interaction-breadcrumbs'),
        testsForPackage('plugin-simple-throttle')
      ]
    },
    {
      displayName: 'react native',
      preset: 'react-native',
      testMatch: [
        testsForPackage('react-native'),
        testsForPackage('plugin-react-native-app-state-breadcrumbs'),
        testsForPackage('plugin-react-native-unhandled-rejection'),
        testsForPackage('plugin-react-native-hermes')
      ],
      setupFiles: [
        require.resolve('react-native/Libraries/Core/setUpGlobals.js'),
        require.resolve('react-native/Libraries/Core/setUpXHR.js'),
        '<rootDir>/packages/react-native/src/test/setup.js'
      ]
    },
    {
      displayName: 'node plugins',
      testEnvironment: 'node',
      testMatch: [
        testsForPackage('plugin-server-*'),
        testsForPackage('plugin-strip-project-root'),
        testsForPackage('plugin-intercept'),
        testsForPackage('plugin-node-unhandled-rejection'),
        testsForPackage('plugin-node-in-project'),
        testsForPackage('plugin-node-device'),
        testsForPackage('plugin-node-surrounding-code'),
        testsForPackage('plugin-node-uncaught-exception')
      ]
    },
    {
      displayName: 'node integration tests',
      testEnvironment: 'node',
      testMatch: [
        '<rootDir>/packages/node/test/integration/**/*.test.[jt]s'
      ]
    }
  ]
}
