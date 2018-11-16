install: install-deps install-flow-typed

install-deps:
	npm install

install-flow-typed:
	npx flow-typed install

build:
	rm -rf dist
	npm run build

check-types:
	npx flow

start:
	npm run babel-node -- src/bin/brain-gcd.js

publish:
	npm publish

publish-patch:
	npm version patch
	npm publish

lint:
	npx eslint .
