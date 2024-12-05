import http from 'http';
import fs from 'fs';
import dotenv from 'env';
import express from 'express';
import logger from 'morgan';
import bodyparser from 'body-parser';
import express from 'express';
dotenv.config();
// // Writing 'Hello, World!' to 'example.txt' asynchronously
// fs.writeFile('example.txt', 'Hello, World!', (err) => {
//     if (err) {
//       console.log('Error writing file:', err);
//       return;
//     }
//     console.log('File written successfully!');
//   });

//   // Appending ' Appended text.' to 'example.txt' asynchronously
// fs.appendFile('example.txt', ' Appended text.', (err) => {
//     if (err) {
//       console.log('Error appending to file:', err);
//       return;
//     }
//     console.log('Text appended successfully!');
//   });
// const fileName = 'example.txt';
// //write
// fs.writeFile(fileName, 'This is the initial content.\n', (err) => {
//     if (err) {
//         console.error('Error writing to file:', err);
//         return;
//     }
//     console.log('File created and content written.');

//     //Read 
//     fs.readFile(fileName, 'utf8', (err, data) => {
//         if (err) {
//             console.error('Error reading file:', err);
//             return;
//         }
//         console.log('File content:', data);

//         // Append
//         fs.appendFile(fileName, 'Appending this new content.\n', (err) => {
//             if (err) {
//                 console.error('Error appending to file:', err);
//                 return;
//             }
//             console.log('New content appended.');

//             // Delete
//             fs.unlink(fileName, (err) => {
//                 if (err) {
//                     console.error('Error deleting file:', err);
//                     return;
//                 }
//                 console.log('File deleted successfully.');
//             });
//         });
//     });
// });
app.use(express.json());
app.use(logger("dev"));
app.use(bodyparser.json());

app.use("/get",()=>{
console.log("Data Is set.")})

let createserver = process.env.PORT
app.listener(createserver,()=>{
    console.log(`server is started!: ${createserver}`)
})
