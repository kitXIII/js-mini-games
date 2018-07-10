install:
	npm install

start:
	npm run babel-node -- src/bin/brain-games.js

publish:
	rm -rf dist
	npm publish

lint:
	npm run eslint .
