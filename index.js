window.onscroll = function() {
  moveName();
  thaiBhan();
  yelpCamp();
  dissapear();
  columns();
  logos();
}

// Appearing name
function moveName() {
  if (document.documentElement.scrollTop > 1 && document.documentElement.scrollTop < 350) {
    document.getElementById("letterm").className = "name-cap mclass";
    document.getElementById("lettera").className = "name aclass";
    document.getElementById("lettert1").className = "name t1class";
    document.getElementById("lettert2").className = "name t2class";
    document.getElementById("letterh").className = "name hclass";
    document.getElementById("lettere").className = "name eclass";
    document.getElementById("letterw").className = "name wclass";
    document.getElementById("letterm2").className = "name-cap m2class";
    document.getElementById("letteri").className = "name iclass";
    document.getElementById("lettert3").className = "name t3class";
    document.getElementById("lettert4").className = "name t4class";
    document.getElementById("lettere2").className = "name e2class";
    document.getElementById("letterl").className = "name lclass";
    document.getElementById("letters").className = "name sclass";
    document.getElementById("lettert5").className = "name t5class";
    document.getElementById("lettere3").className = "name e3class";
    document.getElementById("letterd").className = "name dclass";
  } else {
    document.getElementById("letterm").className = "name-cap mclassrev";
    document.getElementById("lettera").className = "name aclassrev";
    document.getElementById("lettert1").className = "name t1classrev";
    document.getElementById("lettert2").className = "name t2classrev";
    document.getElementById("letterh").className = "name hclassrev";
    document.getElementById("lettere").className = "name eclassrev";
    document.getElementById("letterw").className = "name wclassrev";
    document.getElementById("letterm2").className = "name-cap m2classrev";
    document.getElementById("letteri").className = "name iclassrev";
    document.getElementById("lettert3").className = "name t3classrev";
    document.getElementById("lettert4").className = "name t4classrev";
    document.getElementById("lettere2").className = "name e2classrev";
    document.getElementById("letterl").className = "name lclassrev";
    document.getElementById("letters").className = "name sclassrev";
    document.getElementById("lettert5").className = "name t5classrev";
    document.getElementById("lettere3").className = "name e3classrev";
    document.getElementById("letterd").className = "name dclassrev";
  }
}
//Appearing logo
function logos(){
  if (document.documentElement.scrollTop > 1 && document.documentElement.scrollTop < 350) {
    $(".left").addClass("appearright");
    $(".left").removeClass("invisible");
    $(".left").removeClass("appearrightrev");
    $(".right").addClass("appearleft");
    $(".right").removeClass("invisible");
    $(".right").removeClass("appearleftrev");
  } else {
    $(".left").removeClass("appearright");
    $(".right").removeClass("appearleft");
    $(".left").addClass("appearrightrev");
    $(".right").addClass("appearleftrev");
  }
}

//No github alert
function noGit() {
  alert("Sorry, I'm still working on that!");
}

//Functions to bring in projects

function thaiBhan() {
  if (document.documentElement.scrollTop > 300 && document.documentElement.scrollTop < 1200) {
    document.getElementById("thaibhan").className = "img-fluid appearright";
    document.getElementById("thaibhan-desc").className = "pl-5 appearleft" 
  } else if(document.documentElement.scrollTop < 300 || document.documentElement.scrollTop > 1200) {
    if (document.getElementById("thaibhan").className === "img-fluid appearright") {
    document.getElementById("thaibhan").className = "img-fluid appearrightrev";
     document.getElementById("thaibhan-desc").className = "pl-5 appearleftrev";
    }
  }
}

function yelpCamp() {
  if (document.documentElement.scrollTop > 600 && document.documentElement.scrollTop < 1600) {
    document.getElementById("yelpcamp").className = "img-fluid appearright";
    document.getElementById("yelpcamp-desc").className = "pl-5 appearleft";
  } else if(document.documentElement.scrollTop < 600 || document.documentElement.scrollTop > 1600) {
    if (document.getElementById("yelpcamp").className === "img-fluid appearright") {
    document.getElementById("yelpcamp").className = "img-fluid appearrightrev";
      document.getElementById("yelpcamp-desc").className = "pl-5 appearleftrev";
    }
  }
}

//Make scroll down indicator dissapear when bottom is reached
function dissapear(){
   if (document.documentElement.scrollTop > 800){
     document.getElementById("triangle-down").className = "invisible";
   } else {
     document.getElementById("triangle-down").className = "bounce";
   }
}
