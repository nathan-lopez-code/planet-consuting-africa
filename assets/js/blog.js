(function (){



    var onglet = function(a){
        var li = a.parentNode;
        var mainContainer  = a.parentNode.parentNode.parentNode.parentNode;
        var href = a.getAttribute("href")


        if (li.classList.contains('active-link')){
            return false
        }
        mainContainer.querySelector('.blog-nav ul .active-link').classList.remove('active-link');
        li.classList.add('active-link')

        if(href == "#all" ){
            var allCard = mainContainer.querySelectorAll('.card-container .blog-card')
            for(var i = 0; i < allCard.length; i++){
                allCard[i].classList.add('active-card')
            }
        }else{

            var allCard = mainContainer.querySelectorAll('.card-container .active-card')
            var thisCard = mainContainer.querySelectorAll('.main-blog .card-container '+ href)
            for(var i = 0; i<allCard.length; i++){
                allCard[i].classList.remove('active-card')
            }

            for(var x = 0; x < thisCard.length; x++){
                thisCard[x].classList.add('active-card')
            }
            
        }
        


        
    }


    var links = document.querySelectorAll(".main-blog .blog-nav ul a");

    for (var i = 0; i < links.length; i++){
        links[i].addEventListener('click', function(e){
            onglet(this)
        })
    }


    if(window.location.hash){
        var hash = window.location.hash
        var a = document.querySelector('a[href="' + hash + '"]')
        if(a !== null && !a.parentNode.classList.contains('active-link')){
            onglet(a)
        }
    
    }else{
        var allCard = document.querySelectorAll('.main-blog .card-container .blog-card')
        for(var i = 0; i < allCard.length; i++){
            allCard[i].classList.add('active-card')
        }
    }


})()


console.log('nahtan')