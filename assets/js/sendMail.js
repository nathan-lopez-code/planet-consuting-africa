(function(){

    var email = document.getElementById('email-html').innerText


    var openGmail = function(name, fromEmail, message){
        var a = document.createElement('a');
        a.href = "mailto:" + email +"?subject=" + name + "&body="+ message + "\n from : " + fromEmail;
        a.click()
    }

    var testName = function(input){
        var pattern = new RegExp(/^[a-zA-Z'\- \uOOcO-\uO17e]+$/);
        return input !== '' && pattern.test(input);
    }

    var testText = function(input){
        var pattern = new RegExp(/^[a-zA-Z0-9?$@#()'!,+\-=_:&£*%\s]+$/)
        return input !== '' && pattern.test(input);
        
    }

    var testEmail = function(input){
        var pattern = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);

        return input !== '' && pattern.test(input)
    }

    var button = document.getElementById('sendbutton')
    button.addEventListener('click', ()=>{
        var name = document.getElementById('name').value
        var email = document.getElementById('email').value
        var text = document.getElementById('text').value
        var error = ""

        /* verifier que le champ name , n'est pas vide */

        if(!testName(name)){
            error = error + " le champ nom n'est pas valide"
        }
        if(!testText(text)){
            error = error + "\n le text n'est pas valide"
        }
        if(!testEmail(email)){
            error = error + "\n l'email est incorrecte"
        }

        if(error.length > 2){
            alert(error)
        }else{
            try{
                openGmail(name, email, text);
            }
            catch{
                alert('il semble qui ait un problème avec votre terminal')
            }

        }

    })

        
})()