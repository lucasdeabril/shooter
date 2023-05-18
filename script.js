let placar = document.querySelector('.placar')

let start = document.querySelector('.start')
let pontos = 0
let caixa=document.querySelectorAll('.caixa')
let spawn=document.querySelectorAll('.spawn')
addEventListener('click', (e) =>{
    let target=e.target
    if(target.classList.contains('alvo')){
        target.remove()
        pontos ++
        placar.innerHTML = `placar: ${pontos} pontos`
    }
    if (target.classList.contains('start')){
        newgame()
        start.classList.toggle('start')
    }
    if (target.classList.contains('pause')){
        pause()
        start.classList.toggle('start')
    }
} )
let local= 0
let inicio = 'ligado'

function newgame (){
    inicio='ligado'
    let i = Math.floor(Math.random()*4)
    
    setTimeout(function(){
        if(inicio=='ligado'){
            let newobj = document.createElement('img')
            newobj.classList.add('alvo')
            newobj.src='./alvo.png'
            spawn[i].appendChild(newobj)
            newobj.style.position='absolute'
            
            setTimeout(function(){
                // let i = Math.floor(Math.random()*4)
                console.log(i)
                let alvo1 = spawn[i].querySelector('.alvo')
                alvo1.style.marginLeft='100px'
                setTimeout(newgame(),100)
            } ,9)
             
            
        }
        
    },1000)
    
}
function pause(){
    inicio='desligado'
}
