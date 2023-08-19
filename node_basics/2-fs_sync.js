//THe file system module (fs) allows you to work with the file system on your computer 


const { readFileSync ,  writeFileSync }= require('fs');

const first = readFileSync('../sampledir/sub/first.txt','utf8')

const second = readFileSync('../sampledir/sub/second.txt','utf8')

console.log(`contents in the two text file :\n${first},\n${second}`);
    writeFileSync("../sampledir/result.txt",`content inside the two text files :-\n ${first}\n${second}`);

console.log("*****Done******");                