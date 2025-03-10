function gerar () {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('tab')

    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value)
        res.innerHTML = ''

        for (let c = 1; c <= 10; c++) {
            let a = n * c
            
            res.innerHTML += `${n} x ${c} = ${a} </br>`
        }
    }
}