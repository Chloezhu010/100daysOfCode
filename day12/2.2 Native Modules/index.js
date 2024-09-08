const fs = require("fs"); // to use the API of file system module

// fs.writeFile("message.txt", "Hello from the world", (err) => {
//     if (err) throw err;
//     console.log('The file has been saved!');
//   }); 

fs.readFile("./message.txt", "utf8", (err, data) => {
    if (err) throw err;
    console.log(data);
  }); 