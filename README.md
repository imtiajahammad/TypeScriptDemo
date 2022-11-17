# What is Angular?
  - A UI framework build by Google
  - A component-based framework for building scalable app
  - Provided collection of libraries to cover features like Routing, Forms
  
# Frameworks
  - Framework generally contains set of libraries
  - You can extend the frameworks
  - Some example are Angular, .Net, Ionic, ExpressJS
 
# Libraries
  - Libraries generally perform specific operation
  - You can combine multiple libs to build apps
  - Some examples are React, MomentJS, Lodash
  
# Features of Angular
  - Template
  - Data Binding
  - Forms
  - Routing
  - Observables
  - PWA
  
# Introduction to TypeScript
  - A strongly typed Programming Language
  - Created and maintained by Microsoft
  - Superset of JavaScript
  
# Why TypeScript?
  - Compiles to JavaScript
  - Keeps your code evergreen
  - Supported by all major libraries and frameworks
  
# Type Safety
  - Keeps your application free from Type Errors
  - Languages like C#, Java are example of Type Safe Language
  - Keeps your JS code free from undefined and null values
  - In TypeScript Types are stripped when your code is converted to JS
    
# Installing and Creating First TypeScript Program
  - Install Node
	- Use Latest version of NodeJs
	- 'npm init' to create a package.json
	- Install TypeScript 'npm i typescript'
	- Initialize TypeScript
	- 'tsc --init'
  
# Single Page Application
  - SPA stands for Single Page Applications
  - You can use modern frameworks like Angular, React or Vue to create SPA
  - SPA does not make requests to server for everty URL requests

# How Angular Helps
  - Angular has Routing functionality to create SPA
  - Angular also offers SSR(Server Side Rendering) which supports SPA

# Data Types
  - string
  - number
  - boolean
  - array
  - enum
  - tuple
  - any
  - void
  - never

# Type Inference
  - Typescript has the ability to determine the type from the value which has been assigned. But it is reconneded to use types.
  - 
  
# Functions
  - Different ways to write function
  - Generic Function
  - Optional Parameters
  - Required Prameters
  - Rest parameters

# Classes and Methods
  - Introduction to Classes
  - Creating Classes
  - Class Properties and constructor
  - Class methods
  - Creating Instance of Class
  - Member Visibility
  - Static Members

# Interfaces
  - Creating Interfaces
  - Using Interfaces as Types
  - Implementing Interfaces
  - Extending Interfaces
  - Optional Properties
  - Object destructuring
  - Array destructuring

# Decorators
  - Introduction to Decorators
  - Class Decorators
  - Method Decorators

# ESModules
  - Introduction to ESModules
  - Import/export
  - Compiling Typescript to different JS version
  
  
# WORKFLOW
  - Check if node is installed, otherwise install node
  - Create a folder and open the folder in Visual Studio Code
  - Open the terminal in VSCode and use `npm init` (this will create a package.json file)
  - Install TypeScript by using `npm i typescript` in the folder on the terminal (this will fetch the node packages into the folder)
  - Use `tsc --init` in the terminal to tsconfig.json file in the folder on the terminal
  
  
  - In the 'tscconfig.json' file, update the value for 'target' to "ES2015"

  - Create new file `datatypes.ts`
  - Use `tsc` on the terminal to compile ts code

  - node -v for node version
  - npm -v for npm version

  - Write some datatype on the datatypes.ts file
  - Compile the code with terminal with `tsc` (This will rewrite the code in the datatypes.js file)
  - Check the console log in the termainal by writing `node datatypes` (node jsFileName)
  - Create new file `functions.ts` for functions separately


  - Create new file with name `Class.ts` and to remember that class names are PascalCase for naming convenstion
  - In typescript, you can not have both default and parameterized constructor, you have to have one.


  - `outDir` in the tsconfig.json helps us to manage all the generated compiled javascripts files into some specific folder. Modify the directory to a folder name `./dist` and run `tsc`, all the js files will be moved to the directed folder.

  - `sourceMap` in the tsconfig.json helps us to check the source map. Modify the `sourceMap` value to true and run `tsc`, it will create `.js.map` files and these contain the information where this code is getting generated. It tells the browser which .ts files to use.

  - `noEmit` in the tsconfig.json helps us not to generate any output files in js. Delete all the javascript output files and the dist folder created earlier, Modify the `noEmit` into true and run `tsc`, it will no more make any javascript output files.
  - 


  








# References:
  - https://www.youtube.com/watch?v=3qBXWUpoPHo&t=5492s&ab_channel=freeCodeCamp.org
  - 
