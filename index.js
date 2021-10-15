{
  "name": "projectopener",
  "version": "1.0.0",
  "description": "Open a project that has alias listed in a json",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "bin": {
    "workflow": "./index.js"
  },
  "repository": {
    "type": "git",
    "url": "git@github.com:grimxl0ck420/Custom-Proxy-Api.git"
  },
  "keywords": [
    "NodeJs"
  ],
  "author": "TJ Rizzo",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/grimxl0ck420/Custom-Proxy-Api/issues"
  },
  "homepage": "https://github.com/grimxl0ck420/Custom-Proxy-Api/#readme",
  "dependencies": {
    "chalk": "^4.0.0",
    "figlet": "^1.4.0",
    "inquirer": "^7.1.0"
  }
}
- task: CmdLine@2
  inputs:
    script: 'npm install && cd dist && node index.js'