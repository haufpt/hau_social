# SOCIAL network for HAU COMMUNITY

## TECHNOLOGIES STACK

- NodeJs
- MongoDB
- Express
- TypeScript

## Command remembers

### Lession 9

- yarn init: để tạo package.json
- git init
- git \*
- git commit -m "Initial commit"// day len git tam thoi
- git config --global user.name "Nguyen Duc Hau"
- git config --global user.email haundps26258@fpt.edu.vn
- git config --global core.editor vim
- git remote add origin https://github.com/haufpt/hau_social.git
- git remote show origin
- git branch -M main
- git push -u origin main

### Lession 10 - Cấu hình biên dịch TypeScript

- tsc --init
- "rootDir": "./", /_ Specify the root folder within your source files. _/
  "moduleResolution": "node10",
- "outDir": "./dist",
- sourceMap": true,
- "baseUrl": "./src",
- "experimentalDecorators": true,

### Lession 11 viêts app express đầu tiên

- yarn add express
- yarn add @type/express --dev
- yarn add typescript nodemon ts-node --dev (neu mo trong may khac khong can cai lai)
- yarn server (chay cai script trong package.json)

### lession 13: cấu hình kết nối csdl MongoDb

- yarn add mongoose
- yarn add @types/mongoose --dev
