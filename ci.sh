#!/usr/bin/env bash

set -e

mkdir -p ./packages

dotnet tool restore
dotnet paket restore
dotnet build

yarn install --pure-lockfile

dotnet fable ./foo

yarn rollup ./foo/index.js --file ./packages/foo.js --format cjs
yarn jest
