import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
    // Other configuration above...

    // Add the next three options if using TypeScript
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json"],
    preset: "ts-jest",
    transform: {
        "^.+\\.[t|j]sx?$": "babel-jest"
    },

    // Run these files after jest has been
    // installed in the environment
    setupFilesAfterEnv: ["<rootDir>/build/jest.setup.js"], // use .js if you prefer JavaScript
    testEnvironment: "node",
};
export default config;

