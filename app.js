const filepath = "./input.txt";

const fs = require('fs');

var i = 1;

function readlines(file) {

  const data = fs.readFileSync(file, 'UTF-8');
  console.log("\n"+data);

  return data;
}

//read when changes occur in file
fs.watch(filepath, (event, filename) => {
  if (filename && event === 'change') {

    signal = readlines(filepath);
    if (signal == "hide") {
      console.log("hidden");
    } else if (signal == "show") {
      console.log("showing");
    }
  }
});





for (let i = 0; i < 100; i++) {
  
   console.log("ff")
  fs.appendFileSync('./input.txt', i+" ", (err) => {
    // In case of a error throw err.
    if (err) throw err;
  })
  
   
}
