#!/usr/bin/env node

import { run } from 'jest-cli';

const args: Array<string> = process.argv.slice(2);

run(args);
