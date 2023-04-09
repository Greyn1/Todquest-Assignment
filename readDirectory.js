//Q.1. Read the local directory and list all file names in it using JS.

import { readdir } from "fs";
readdir(__dirname, function(err, files) { 
  if (err) {
    console.error(err); 
  } 
  files.forEach(file => {
    console.log(file);
  });
}); 

