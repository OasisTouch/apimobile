const Generic = require('../bd/genericbd')

exports.verificaDatas = (item, next) => {
  var vet = [];
  var generic = new Generic();
  var values = []

  item.datas.forEach(function (element) {
    if (element.id_campo.includes("hr_inicio") || element.id_campo.includes("hr_prev_fim")) {
      element.tipo_campo = "timepicker"
      vet.push(element);

    }else
    if (element.sql_lupa != null){

      let dados = {
        ...element,
        values: []
      };  

        generic.imprime(dados.sql_lupa, successFunction)


      dados.values = values;

      vet.push(dados)

    }
    else {
      vet.push(element);

    }
  });
  next(vet)
}


var successFunction = function(data) {
    return data
}