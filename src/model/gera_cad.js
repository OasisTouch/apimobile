const Base = require('./base')

class Gera_CadResponse extends Base{
    
    constructor(datas, message, status){
        super(status, message);
        this.datas = datas;
    }
}


module.exports = Gera_CadResponse;

