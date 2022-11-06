// config.ts
import { defaultsESM as tsjPreset } from "ts-jest/presets";
var config = {
  transform: {
    "^.+\\.[tj]sx?$": ["ts-jest", { ...tsjPreset[1], useESM: true }]
  },
  testTimeout: 2e4,
  testEnvironment: "jsdom",
  testMatch: ["<rootDir>/**/?(*.)+(spec|test).[jt]s?(x)"],
  setupFiles: ["dotenv/config"],
  testPathIgnorePatterns: ["/lib/", "/node_modules/"],
  modulePathIgnorePatterns: ["/dist/"],
  coveragePathIgnorePatterns: ["/dist/"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  moduleNameMapper: {
    ".+\\.(css|scss|png|jpg|svg)$": "jest-transform-stub",
    "~/(.*)$": "<rootDir>/src/$1",
    "^(\\.{1,2}/.*)\\.js$": "$1"
  }
};
var config_default = config;
export {
  config,
  config_default as default
};
//# sourceMappingURL=config.mjs.map