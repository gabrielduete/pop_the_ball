var pontos = 0
var pontosTotal = document.getElementById('pnts')

function adicionarBola(){
    var bola = document.createElement('div')
    bola.setAttribute("class", "obj")

    var p1 = Math.floor(Math.random() * 700)
    var p2 = Math.floor(Math.random() * 200)
    var p3 = Math.floor(Math.random() * 700)

    bola.setAttribute("style", "left:" + p1 + "px; top:" + p2 + "px; right:" + p3 + "px;" + "margin-top: 25vh;" + "margin-left: 20vh")
    bola.setAttribute("onclick", "removerBola(this)")
    bola.setAttribute("display","block")

    document.body.appendChild(bola)
}

function removerBola(bolinha){
    document.body.removeChild(bolinha)
    pontos += 1
    console.log(pontos)
    pontosTotal.innerHTML = "BOLAS ESTOURADAS: " + pontos  
}

function start(){
    setInterval(() => {
        adicionarBola()
    }, 600); 
}