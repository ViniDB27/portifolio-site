var minhaIdade = document.querySelector('#minha-idade')
var dataAtual = new Date
var anoAtual = dataAtual.getFullYear()

var github = document.getElementById('github')
var clsGithub = document.querySelector('.github')

var linkedin = document.getElementById('linkedin')
var clsLinkedin = document.querySelector('.linkedin')

var instagram = document.getElementById('instagram')
var clsInstagram = document.querySelector('.instagram')

var facebook = document.getElementById('facebook')
var clsFacebook = document.querySelector('.facebook')

var freelancer = document.getElementById('freelancer')
var clsFreelancer = document.querySelector('.freelancer')

var whatsapp = document.getElementById('whatsapp')
var clsWhatsapp = document.querySelector('.whatsapp')

var menus = document.querySelectorAll('.navbar .nav-link[href^="#"]')

minhaIdade.innerHTML = anoAtual - 1997


clsGithub.addEventListener('mouseover', e=>{
    setTimeout(()=>{
        github.src = 'assets/img/icons-redes-sociais/GitHub-black.png'
    },200)
})

clsGithub.addEventListener('mouseout', e=>{
    setTimeout(()=>{
        github.src = 'assets/img/icons-redes-sociais/GitHub-white.png'
    },200)
})

clsLinkedin.addEventListener('mouseover', e=>{
    setTimeout(()=>{
        linkedin.src = 'assets/img/icons-redes-sociais/linkedin-black.png'
    },200)
})

clsLinkedin.addEventListener('mouseout', e=>{
    setTimeout(()=>{
        linkedin.src = 'assets/img/icons-redes-sociais/linkedin-white.png'
    },200)
})

clsInstagram.addEventListener('mouseover', e=>{
    setTimeout(()=>{
        instagram.src = 'assets/img/icons-redes-sociais/instagram-black.png'
    },200)
})

clsInstagram.addEventListener('mouseout', e=>{
    setTimeout(()=>{
        instagram.src = 'assets/img/icons-redes-sociais/instagram-white.png'
    },200)
})


clsFacebook.addEventListener('mouseover', e=>{
    setTimeout(()=>{
        facebook.src = 'assets/img/icons-redes-sociais/facebook-black.png'
    },200)
})

clsFacebook.addEventListener('mouseout', e=>{
    setTimeout(()=>{
        facebook.src = 'assets/img/icons-redes-sociais/facebook-white.png'
    },200)
})

clsFreelancer.addEventListener('mouseover', e=>{
    setTimeout(()=>{
        freelancer.src = 'assets/img/icons-redes-sociais/freelancer-black.png'
    },200)
})

clsFreelancer.addEventListener('mouseout', e=>{
    setTimeout(()=>{
        freelancer.src = 'assets/img/icons-redes-sociais/freelancer-white.png'
    },200)
})

clsWhatsapp.addEventListener('mouseover', e=>{
    setTimeout(()=>{
        whatsapp.src = 'assets/img/icons-redes-sociais/whatsapp-black.png'
    },200)
})

clsWhatsapp.addEventListener('mouseout', e=>{
    setTimeout(()=>{
        whatsapp.src = 'assets/img/icons-redes-sociais/whatsapp-white.png'
    },200)
})


function SuaveScroll(event){

    event.preventDefault()
    const element = event.target
    const id = element.getAttribute('href')
    const section = document.querySelector(id)
    window.scroll({
        top:(id !== "#minhas-techs")? section.offsetTop :section.offsetTop - 80,
        behavior: "smooth"
    })

}

menus.forEach(item=>{
    item.addEventListener('click', SuaveScroll)
})

