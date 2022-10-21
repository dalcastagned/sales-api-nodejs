#!/bin/bash

npm install --legacy-peer-deps
npm run typeorm -- -d src/shared/infra/typeorm/index.ts migration:run
npm run dev
