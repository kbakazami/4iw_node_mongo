import http from 'http';
import conf from '../environment';

const env = conf[process.env.NODE_ENV as 'development' | 'production'];

http
    .createServer((req, res) => {
        res.writeHead(301, {
            Location: `https://${
                req.headers.host!.split(':')[0] + ':' + env.portHttps
            }${req.url}`,
        });
        res.end();
    })
    .listen(env.portHttp);
