
## Create react app from scratch, not using script.

## Based on: https://reactjs.org/docs/create-a-new-react-app.html

## Pre-reqs:
- nodejs >= 6
- npm5.2+ (includes npx)

## Setup:
1)	npm init

2)	git init / .gitignore (optional)

3)	Write necessary files:
	a. index.html
	b. index.js, App.js. App.css

4.1)Install Babel packages // npm install --save-dev (or -g)
	a. @babel/core@7.1.0
	b. @babel/cli@7.1.0
	c. @babel/preset-env@7.1.0
	d. @babel/preset-react@7.0.0
4.2)Create .babelrc

5.1)Install Webpack packages // npm install --save-dev (or -g)
	a. webpack@4.19.1
	b. webpack-cli@3.1.1
	c. webpack-dev-server@3.1.8
	d. style-loader@0.23.0
	e. css-loader@1.0.0
	f. babel-loader@8.0.2
5.2)Create webpack.config.js

6)	Install React Hot Loader // npm install --save-dev
	a. react-hot-loader@4.3.11

7) 	Update package.json scripts
	a. "start": "webpack-dev-server --mode development"
	b. "build": "webpack --mode development"
