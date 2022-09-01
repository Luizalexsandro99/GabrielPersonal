const aparecerPrimeiro = document.querySelector('#aparecerPrimeiro')
const aparecerDepois = document.querySelector('#aparecerDepois')

setTimeout(()=>{
    aparecerPrimeiro.classList.add('transformeIndo')
}, 5000)

setTimeout(()=>{
    aparecerDepois.classList.add('aparecendo')
}, 5000)


