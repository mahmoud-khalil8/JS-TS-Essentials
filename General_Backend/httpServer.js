const http=require('http')
const url=require('url')
const queryString=require('querystring')

http.createServer((req,res)=>{
    const path=url.parse(req.url)
    const query=queryString.parse(path.query)

    if (path.pathname=='/'){
        res.writeHead(200,{'content-type':'text/plain'})
        res.write(`hello ${query['name']}`)
        res.end()
    }else{
        res.writeHead(404,{'content-type':'text/plain'})
        res.write('not found')
        res.end()
    }

}).listen(3000)

console.log('server is running on port 3000')