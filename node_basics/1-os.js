//os module
const os=require('os')
const user=os.userInfo()


console.log(user)
console.log(`The system uptime is ${os.uptime()} seconds`)
const curr={
    name:os.type(),
    release:os.release(),
    totalmen:os.totalmem(),
    freemen:os.freemem(),
  
}
console.log(curr)
console.log(os.cpus())
console.log(os.machine())
console.log(os.networkInterfaces())