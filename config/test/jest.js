module.exports = {
    rootDir: '../../',
    verbose: true,
    restoreMocks: true,
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/config/test/setup-after.ts'],
    moduleDirectories: ['<rootDir>/src', 'node_modules'],
    testPathIgnorePatterns: ['<rootDir>/cypress/e2e/login.spec.ts'],
};