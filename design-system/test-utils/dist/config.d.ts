import { JestConfigWithTsJest } from 'ts-jest';

declare type Config = JestConfigWithTsJest;
declare const config: JestConfigWithTsJest;

export { Config, config, config as default };
