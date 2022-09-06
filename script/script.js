const aparecerPrimeiro = document.querySelector('#aparecerPrimeiro')
const aparecerDepois = document.querySelector('#aparecerDepois')
const scrol = document.querySelector('#scrol')
const voceprecisa = document.querySelector('#voceprecisa')


const target = document.querySelectorAll('.efe')
const animationClass = 'efect'

function animeScroll(){
    const windowTop = window.pageYOffset;
    target.forEach(function (element){
        if(windowTop + 350 >= element.offsetTop){
            element.classList.add('efect')
        }
        if(element.classList.contains('efe')){
            scrol.style.display = 'none'
        }
    })
}

window.addEventListener('scroll', function(){
    animeScroll()
})


