"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// config.ts
var config_exports = {};
__export(config_exports, {
  config: () => config,
  default: () => config_default
});
module.exports = __toCommonJS(config_exports);
var import_presets = require("ts-jest/presets");
var config = {
  transform: {
    "^.+\\.[tj]sx?$": ["ts-jest", { ...import_presets.defaultsESM[1], useESM: true }]
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  config
});
//# sourceMappingURL=config.js.map