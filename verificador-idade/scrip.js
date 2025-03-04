function verificar() {
    var anoAtual = new Date().getFullYear()
    var recebeData = document.getElementById('numtxt')
    var res = document.getElementById('res')
    var sex = document.getElementsByName('radsex')
    
    if (recebeData.value.length == 0 || Number(recebeData.value) > anoAtual || Number(recebeData.value) < 0) {
        window.alert('Verifique os dados e tente novemente!')
        return
    } else {
        var calculaIdade = anoAtual - Number(recebeData.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (sex[0].checked) {
            genero = 'Homem'
            if (calculaIdade >= 0 && calculaIdade < 10) {
                img.setAttribute('src', 'crianca-homem.jpg')
            } else if (calculaIdade < 21) {
                img.setAttribute('src', 'jovem-homem.jpg')
            } else if (calculaIdade < 50){
                img.setAttribute('src', 'adulto-homem.jpg')
            } else {
                img.setAttribute('src', 'idoso-homem.jpg')
            }
        } else if (sex[1].checked) {
            genero = 'Mulher'
            if (calculaIdade >= 0 && calculaIdade < 10) {
                img.setAttribute('src', 'crianca-mulher.jpg')
            } else if (calculaIdade < 21) {
                img.setAttribute('src', 'jovem-mulher.jpg')
            } else if (calculaIdade < 50){
                img.setAttribute('src', 'adulto-mulher.jpg')
            } else {
                img.setAttribute('src', 'idosa-mulher.jpg')
            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${calculaIdade} anos.`
        res.appendChild(img)
    }
}