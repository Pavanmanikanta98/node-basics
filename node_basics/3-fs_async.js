const { readFile, writeFile } = require('fs')

//reading a file
readFile('../sampledir/sub/first.txt','utf8',(err,result)=>{
    if(err){
        console.log("error1")
        return
    }
  const first = result;
  

  readFile('../sampledir/sub/second.txt','utf8',(err,result)=>{
    if(err){
        console.log("error2")
        return
    }
    const second = result;
    
 //overriding or writing on a file
    writeFile("../sampledir/result-async.txt",`content of two files into a file : \n${first} \n ${second}`,(err,result)=>{
    if(err){
        console.log("error");
    }
    console.log("\n________Done_______\n")
    })
  })
})
