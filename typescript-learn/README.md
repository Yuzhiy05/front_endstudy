# Node.js TypeScript Learning Project

This project is designed to help you learn TypeScript from scratch. It includes a basic setup with TypeScript configuration, a sample TypeScript file, and instructions on how to compile and run the code.

## Project Structure

```
node-typescript-learn
├── src
│   └── index.ts
├── package.json
├── tsconfig.json
└── README.md
```

## Getting Started

To get started with this project, follow these steps:

1. **Initialize the Project**  
   Run the following command in the root directory to create a `package.json` file:
   ```
   pnpm init -y
   ```

2. **Install TypeScript and Type Definitions**  
   Install TypeScript and the necessary type definitions with:
   ```
   pnpm add -D typescript @types/node
   ```

3. **Create the TypeScript Configuration File**  
   Create a `tsconfig.json` file with the following content:
   ```json
   {
     "compilerOptions": {
       "target": "es6",
       "module": "commonjs",
       "strict": true,
       "esModuleInterop": true,
       "skipLibCheck": true,
       "forceConsistentCasingInFileNames": true,
       "outDir": "./dist"
     },
     "include": ["src/**/*"],
     "exclude": ["node_modules"]
   }
   ```

4. **Add Scripts to `package.json`**  
   Update your `package.json` to include the following scripts:
   ```json
   "scripts": {
     "build": "tsc",
     "start": "node dist/index.js"
   }
   ```

5. **Add Sample TypeScript Code**  
   In `src/index.ts`, add some basic TypeScript code for testing:
   ```typescript
   const greeting: string = "Hello, TypeScript!";
   console.log(greeting);
   ```

## Compiling and Running the Project

After completing the above steps, you can compile and run the project using the following commands:

- To compile the TypeScript code:  
  `pnpm run build`

- To run the compiled JavaScript code:  
  `pnpm start`

Happy coding!