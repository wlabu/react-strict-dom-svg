const transformIgnorePatterns = [
  'node_modules/' +
    '(' +
    // default expo patterns
    '?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@sentry/react-native|native-base|react-native-svg' +
    // extra
    '|react-strict-dom' +
    ')'
];

/** @type {import('jest').Config} */
const config = {
  cache: false,
  verbose: true,
  preset: 'jest-expo',
  transformIgnorePatterns
};

module.exports = config;
