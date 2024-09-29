fetch('https://economia.awesomeapi.com.br/last/USD-BRL').then(resposta => {
    return resposta.json()
}).then(economia => {
    document.getElementById('valorDolar').innerHTML = economia.USDBRL.bid
    document.getElementById('maiorValorDoDia').innerHTML = economia.USDBRL.high
    document.getElementById('menorValorDoDia').innerHTML = economia.USDBRL.low
    console.log(economia)
})