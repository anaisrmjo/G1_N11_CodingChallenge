function valider()
{
    var adresse = document.getElementByID('fname').value;
    var mdp = document.getElementByID('mdp').value;
 
  if(adresse != "") {
    return true;
  }
  else {
    alert("Saisissez votre adresse email");
    return false;
  }
}
if(mdp != "") {
    return true;
  }
  else {
    alert("Saisissez votre mot de passe");
    return false;
  }