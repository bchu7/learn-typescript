import { JestConfigWithTsJest } from 'ts-jest';

process.env[ 'ENVIRONMENT' ] = 'dev';
process.env[ 'LOG_LEVEL' ] = 'debug';

const config: JestConfigWithTsJest = {
    preset: 'ts-jest',
    clearMocks: true,
    collectCoverage: true,
    coverageDirectory: 'coverage',
    coverageProvider: 'v8',
    // testMatch: [ '**/test/**/*.test.ts' ],
    reporters: [
        'default',
        [ 'jest-junit', {
            outputDirectory: '<rootDir>/test-reports',
        } ],
    ],
};

export default config;
