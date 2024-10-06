//try ...catch
const fs=require('fs')
try{
    const data=fs.readFileSync('file.md','utf-8')
    console.log(data)

}  
catch(err){
    console.log(err)
}

//callbacks

fs.readFile('file.md','utf-8',(err,res)=>{
    if(err){
        console.log(err)
        return;
    }
    console.log(res)
})

//promises
fs.readFile('file.md','utf-8')
    .then((data)=>{
        console.log(data)
    }).catch((err)=>{
        console.log(err)
    })

//event emmitters

const reader=fs.createReadStream('file.md','utf-8')
reader.on('data',(data)=>{
    console.log(data)
})
reader.on('err',(err)=>{
    console.log(err)
})