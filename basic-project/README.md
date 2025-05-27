Note: the information and examples in this project are taken from the handbook of this link https://www.typescriptlang.org/docs

## Creating a new TypeScript project using CLI

Create and go to new project folder basic-project
```shell
mkdir basic-project && cd basic-project
```
Initialize, this create file package.json
```shell
npm init -y
```
Install TypeScript as a dev dependency
```shell
npm install typescript --save-dev
```

Install ts-node if we want to run TypeScript file directly
```shell
npm install ts-node --save-dev
```

Initialize TypeScript, this create file tsconfig.json
```shell
npx tsc --init
```

Create src folder and add a file like index.ts
```shell
mkdir src && touch src/index.ts && echo "console.log('Hello World')" > src/index.ts
```

Compile TypeScript
```shell
npx tsc
```

main tsconfig-base.json
```shell
{
  "compilerOptions": {
    "target": "es2022",
    "module": "commonjs",
    
    "sourceMap": true,

    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,

    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "resolveJsonModule": true,
  },
  "exclude": [
    "**/excluded-folder/**",
    "**/dist/**",
    "**/gen/openapi/**",
    "**/jest.*.ts",
    "**/node_modules/**"
  ]
}
```

project tsconfig.json
```shell
{
  "extends": "../tsconfig-base.json",
  "compilerOptions": {
    "outDir": "./dist",
    "rootDir": "./",
  }
}
```

compile project (run within the project folder)
```shell
npx tsc
```

Run index.js, dit gaan wij overslaan gebruik ts-node
```shell
node dist/index.js
```

Run TypeScript file
```shell
ts-node src/index.ts
```
