import type { Config } from '@jest/types';
import nextJest from 'next/jest';
import { pathsToModuleNameMapper } from 'ts-jest';

const { compilerOptions } = require('./tsconfig.json');

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
});

const config: Config.InitialOptions = {
  setupFiles: ['dotenv/config', 'tsconfig-paths/register'],
  detectOpenHandles: true,
  moduleFileExtensions: ['ts', 'js', 'json'],
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: '<rootDir>/',
  }),
};

export default createJestConfig(config);
