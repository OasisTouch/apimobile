const app = require('../src/app');
const port = normalizaPort(process.env.PORT || process.env.PORTS);


function normalizaPort(val) {
    const port = parseInt(val, 10);
    if (isNaN(port)) {
        return val;
    }
if (port >= 0) {
        return port;
    }
return false;
}

app.set('port', (port));

app.listen(port);

console.log(process.env.PORTS)

