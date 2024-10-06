const readline=require('node:readline')
const input=require('node:process').stdin
const output=require('node:process').stdout


const rl=readline.createInterface({input,output})

rl.question('how u doin?   ',(answer)=>{
    console.log(`this is the answer ${answer}`)
    rl.close()
})
rl.on('close',()=>{
    console.log('good bye')
    process.exit(0)
})