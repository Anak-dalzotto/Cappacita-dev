var dadosClientes = [ 
    { 
    nome: "Lucas", 
    sobrenome: "da Silva", 
    idade: 21, 
    genero: "Masculino", 
    plano: "full", 
    carencia: false, 
    aquisicao: "12/01/2019" 
    }, 
    { 
    nome: "Ana", 
    sobrenome: "Lima", 
    idade: 17, 
    genero: "Feminino", 
    plano: "medium", 
    carencia: false, 
    aquisicao: "17/03/2019"
    }, 
    { 
    nome: "Adriana", 
    sobrenome: "Menezes", 
    idade: 27, 
    genero: "Feminino", 
    plano: "full", 
    carencia: true, 
    aquisicao: "14/09/2020" 
    } 
    ] 

    function filtrarPorIdade (dadosClientes) {
        if (dadosClientes.idade >=18 && dadosClientes.idade <=26)
        return dadosClientes;

    }
    
    var resultado = dadosClientes.filter (filtrarPorIdade);
    return resultado 
    

    

