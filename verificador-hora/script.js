function horaDia() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')

    var hora = new Date()
    var agora = hora.getHours()

    msg.innerHTML = `Agora são ${agora} horas`

    if (agora >= 0 && agora < 12) {
        img.src = 'images/manha.jpg'
        document.body.style.background = 'black'
    } else if (agora >= 12 && agora < 18) {
        img.src = 'images/tarde.jpg'
        document.body.style.background = 'red'
    } else { 
        img.src = 'images/noite.jpg'
        document.body.style.background = 'green'
    }
}