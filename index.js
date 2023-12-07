#!/usr/bin/env node

// const os= require('os');
// console.log(os.hostname()); 
// ArrayBuffer.isView
// const fs= require('node:fs');
// console.log(fs);
// fs.appendFileSync() // bloking code
// fs.writeFile() // non bloking code

// fs.readFile('./home.txt','utf8',(err,data)=>{
// if (err) console.log(err);
// else console.log(data);
// });
// Buffer.form()
// fs.ReadStream(
//     './home.txt',
//     {
//         highWaterMark: 8,
//         encoding: 'utf8',
//         autoClose: true,
//         start: 0,
//         end: 10,
//         flags: 'r'
//     }
// ).on('open',()=>{
//     console.log('open');
// }).on('data',(data)=>{
//     console.log(data);
// }).on('close',()=>{
//     console.log('close');
// }).on('error',(err)=>{
//     console.log(err);
// }
// )

// fs.createReadStream(
//     './home.txt',
//     {
//         highWaterMark: 8,
//         encoding: 'utf8',
//         autoClose: true,
//         start: 0,
//         end: 10,
//         flags: 'r'
//     }
// ).on('open',()=>{
//     console.log('open');
// }).on('data',(data)=>{
//     console.log(data);
// }).on('close',()=>{
//     console.log('close');
// }).on('error',(err)=>{
//     console.log(err);
// }
// )
// const _ = require('lodash');
// console.log(_.chunk(['a', 'b', 'c', 'd'], 2));

// CLI APP
// console.log("add num");
// console.log(process.argv);


// const { Command } = require('commander');
// const program = new Command();

// program
//   .name('string-util')
//   .description('CLI to some JavaScript string utilities')
//   .version('0.8.0');

// program.command('split')
//   .description('Split a string into substrings and display as an array')
//   .argument('<string>', 'string to split')
//   .option('--first', 'display just the first substring')
//   .option('-s, --separator <char>', 'separator character', ',')
//   .action((str, options) => {
//     const limit = options.first ? 1 : undefined;
//     console.log(str.split(options.separator, limit));
//   });

// import inquirer from 'inquirer';

// inquirer
//   .prompt([
//     /* Pass your questions in here */
//   ])
//   .then((answers) => {
//     // Use user feedback for... whatever!!
//   })
//   .catch((error) => {
//     if (error.isTtyError) {
//       // Prompt couldn't be rendered in the current environment
//     } else {
//       // Something else went wrong
//     }
//   });

// console.log("loma");
// console.log(process.argv);

// if(process.argv[2]==='add'){
//     console.log("you are going to add courses with name",process.argv[3]);
// } traditional way

//this the pro way
// const { Command } = require("commander"); first way


// import { Command } from "commander";
// import inquirer from "inquirer";
// import fs from "fs";
// import { env } from "process";
// const program = new Command();

// const questions = [
// 	/* Pass your questions in here */
// 	{
// 		type: "input",
// 		message: "please enter the course title",
// 		name: "title",
// 	},
// 	{
// 		type: "number",
// 		message: "please enter the course price",
// 		name: "price",
// 	},
// ];
// const filePath = "./courses.json";
// program
// 	.name("codeZone-courses-manager")
// 	.description("CLI to make courses")
// 	.version("1.0.0");

// program
// 	.command("add")
// 	.alias("a")
// 	.description("add a course ")

// 	.action(() => {
// 		inquirer.prompt(questions).then((answers) => {
// 			console.log(answers);
// 			if (fs.existsSync(filePath)) {
// 				fs.readFile(filePath, "utf8", (err, fileContent) => {
// 					if (err) {
// 						console.log("error", err);
// 						process.exit();
// 					}
// 					console.log("fileContent -->", fileContent);
// 					const fileContentAtJson = JSON.parse(fileContent);
// 					fileContentAtJson.push(answers);
// 					fs.writeFile(
// 						filePath,
// 						JSON.stringify(fileContentAtJson),
// 						"utf8",
// 						() => {
// 							console.log("add courses done");
// 						}
// 					);
// 				});
// 			} else {
// 				fs.writeFile(filePath, JSON.stringify([answers]), "utf8", () => {
// 					console.log("add courses done");
// 				});
// 			}
// 		});
// 	});

// program
// 	.command("list")
// 	.alias("l")
// 	.description("list all courses ")
// 	.action((param, option) => {
// 		// console.log("courses");
//         fs.readFile(filePath,'utf8',(err,content)=>{
//             if(err){
//                 console.log("Error"+ err);
//                 process.exit()

//             }
//             console.table(JSON.parse(content));

//         })
// 	});

// program.parse(process.argv);
