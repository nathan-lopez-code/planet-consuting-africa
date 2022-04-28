(function(){
    // take my button
    var openModals = document.querySelectorAll('.main-blog .card-container .footer-card .openModal')
    var closeModals = document.querySelectorAll('.main-blog .card-container .footer-card .closeModal')
    var overlay = document.getElementById('overlay')

    // functions

    var fOpenModal = function(button){
        var modal = button.parentNode.parentNode
        var navabr = document.querySelector('body header nav')

        navabr.style.position = "static"
        overlay.classList.add('overlay')
        modal.classList.add('blog-card-show')
        modal.querySelector('.footer-card .closeModal').classList.add('closeModal-active')
        modal.querySelector('.footer-card .openModal').style.display = "none"
        modal.querySelector('.card-core .active-content').style.display = "block"
    }

    var fCloseModal = function(button){
        var modal = button.parentNode.parentNode
        var navabr = document.querySelector('body header nav')
        
        navabr.style.position = "sticky"
        overlay.classList.remove('overlay')
        modal.classList.remove('blog-card-show')
        modal.classList.add('blog-card-show-transition')
        modal.offsetWidth
        modal.classList.remove('blog-card-show-transition')
        modal.querySelector('.footer-card .closeModal').classList.remove('closeModal-active')
        modal.querySelector('.footer-card .openModal').style.display = "block"
        modal.querySelector('.footer-card .openModal').style.color = "blue"
        modal.querySelector('.card-core .active-content').style.display = "none"
    }


    overlay.addEventListener('click', () => {
        var navabr = document.querySelector('body header nav')
        var modal = document.querySelector('.card-container .blog-card-show')

        navabr.style.position = "sticky"
        overlay.classList.remove('overlay')
        modal.classList.remove('blog-card-show')
        modal.querySelector('.footer-card .closeModal').classList.remove('closeModal-active')
        modal.querySelector('.footer-card .openModal').style.display = "block"
        modal.querySelector('.footer-card .openModal').style.color = "blue"
        modal.querySelector('.card-core .active-content').style.display = "none"
    })

    
    
    openModals.forEach(button =>{
        button.addEventListener('click', () =>{
            fOpenModal(button)
        })
    })

    closeModals.forEach(button =>{
        button.addEventListener('click', ()=>{
            fCloseModal(button)
        })
    })

})()
