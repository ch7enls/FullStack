// 后续安装node的插件

const http = require('http');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html;charset=utf-8');
    console.log('req.url',req.method);
    if (req.url === '/login') {
        res.statusCode =  203
        res.end('login');
    }
    else if (req.url === '/post') {
        res.end('这是post');
    }
    else{
        res.end('404');
    }

});

server.listen(8080, () => {
    console.log('server is running');
});
