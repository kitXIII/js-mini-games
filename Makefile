install:
	npm install

start:
	npm run babel-node -- src/bin/brain-games.js

publish:
	npm publish

publish-patch:
	npm version patch
	npm publish

lint:
	npm run eslint .
