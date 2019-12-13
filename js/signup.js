function ok() {
        
    var caracteresmax = document.getElementById('mdp').value.length;  
    var non = "Veuillez entrer un nouveau mot de passe";
    
    if (caracteresmax > 6){
        return true; 
    
        }
    else {
         document.getElementById('message').innerHTML = non;
        }
    }
    
    if (caracteresmax < 12){
        return true;
    }
    
    else{
        document.getElementById('message').innerHTML = non;
    }
    
    
    
    