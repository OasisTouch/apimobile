const knex = require('./conexao')


class Generic {
    constructor() {
        this._line = []
    }

    magic(x) {
        return function calc(x) { return x * 42; };
    }

    imprime(dados, next) {
        var self = this;
        knex.raw(dados)
            .then((datas) => {
            
                    self._line.push(JSON.stringify(datas))
                    next(self._line)
            });
    }
}
module.exports = Generic;

