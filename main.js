window.onload = function () {
  alert(
    "Hello! Thanks for checking out my portfolio. Just a heads up, the heroku apps will take a little while to load if they haven't been accessed lately. Thank you for your patience!"
  );
  moveName();
  logos();
};

$(function () {
  $(".left").addClass("appearright");
  $(".left").removeClass("invisible");
  $(".left").removeClass("appearrightrev");
  $(".right").addClass("appearleft");
  $(".right").removeClass("invisible");
  $(".right").removeClass("appearleftrev");
});

window.onscroll = function () {
  pernMessenger();
  wgu();
  burgerBuilder();
  reactMessenger();
  sampleForms();
  v2tChat();
  yelpCamp();
  cpanel();
  smashSuite();
  dissapear();
  footer();
  moveName();
};

// Appearing name
function moveName() {
  if (document.documentElement.scrollTop < 400) {
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

function logos() {
  if (document.documentElement.scrollTop < 400) {
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

//Functions to bring in projects

function pernMessenger() {
  if (
    document.documentElement.scrollTop >= 400 &&
    document.documentElement.scrollTop <= 1200
  ) {
    document.getElementById("pern-messenger").className =
      "img-fluid appearright";
    document.getElementById("pern-messenger-desc").className =
      "pl-5 appearleft";
  } else if (
    document.documentElement.scrollTop <= 400 ||
    document.documentElement.scrollTop >= 1200
  ) {
    if (
      document.getElementById("pern-messenger").className ===
      "img-fluid appearright"
    ) {
      document.getElementById("pern-messenger").className =
        "img-fluid appearrightrev";
      document.getElementById("pern-messenger-desc").className =
        "pl-5 appearleftrev";
    }
  }
}

function wgu() {
  if (
    document.documentElement.scrollTop >= 800 &&
    document.documentElement.scrollTop <= 2300
  ) {
    document.getElementById("wgu_scheduler").className =
      "img-fluid appearright";
    document.getElementById("wgu_scheduler-desc").className = "pl-5 appearleft";
  } else if (
    document.documentElement.scrollTop <= 800 ||
    document.documentElement.scrollTop >= 2300
  ) {
    if (
      document.getElementById("wgu_scheduler").className ===
      "img-fluid appearright"
    ) {
      document.getElementById("wgu_scheduler").className =
        "img-fluid appearrightrev";
      document.getElementById("wgu_scheduler-desc").className =
        "pl-5 appearleftrev";
    }
  }
}

function burgerBuilder() {
  if (
    document.documentElement.scrollTop >= 1900 &&
    document.documentElement.scrollTop <= 2700
  ) {
    document.getElementById("burgerbuilder").className =
      "img-fluid appearright";
    document.getElementById("burgerbuilder-desc").className = "pl-5 appearleft";
  } else if (
    document.documentElement.scrollTop <= 1900 ||
    document.documentElement.scrollTop >= 2700
  ) {
    if (
      document.getElementById("burgerbuilder").className ===
      "img-fluid appearright"
    ) {
      document.getElementById("burgerbuilder").className =
        "img-fluid appearrightrev";
      document.getElementById("burgerbuilder-desc").className =
        "pl-5 appearleftrev";
    }
  }
}

function reactMessenger() {
  if (
    document.documentElement.scrollTop >= 2300 &&
    document.documentElement.scrollTop <= 3100
  ) {
    document.getElementById("reactmessenger").className =
      "img-fluid appearright";
    document.getElementById("reactmessenger-desc").className =
      "pl-5 appearleft";
  } else if (
    document.documentElement.scrollTop <= 2300 ||
    document.documentElement.scrollTop >= 3100
  ) {
    if (
      document.getElementById("reactmessenger").className ===
      "img-fluid appearright"
    ) {
      document.getElementById("reactmessenger").className =
        "img-fluid appearrightrev";
      document.getElementById("reactmessenger-desc").className =
        "pl-5 appearleftrev";
    }
  }
}

function sampleForms() {
  if (
    document.documentElement.scrollTop >= 2700 &&
    document.documentElement.scrollTop <= 3500
  ) {
    document.getElementById("sampleforms").className = "img-fluid appearright";
    document.getElementById("sampleforms-desc").className = "pl-5 appearleft";
  } else if (
    document.documentElement.scrollTop <= 2700 ||
    document.documentElement.scrollTop >= 3500
  ) {
    if (
      document.getElementById("sampleforms").className ===
      "img-fluid appearright"
    ) {
      document.getElementById("sampleforms").className =
        "img-fluid appearrightrev";
      document.getElementById("sampleforms-desc").className =
        "pl-5 appearleftrev";
    }
  }
}

function v2tChat() {
  if (
    document.documentElement.scrollTop >= 3100 &&
    document.documentElement.scrollTop <= 3900
  ) {
    document.getElementById("v2t-chat").className = "img-fluid appearright";
    document.getElementById("v2t-desc").className = "pl-5 appearleft";
  } else if (
    document.documentElement.scrollTop <= 3100 ||
    document.documentElement.scrollTop >= 3900
  ) {
    if (
      document.getElementById("v2t-chat").className === "img-fluid appearright"
    ) {
      document.getElementById("v2t-chat").className =
        "img-fluid appearrightrev";
      document.getElementById("v2t-desc").className = "pl-5 appearleftrev";
    }
  }
}

function cpanel() {
  if (
    document.documentElement.scrollTop >= 3500 &&
    document.documentElement.scrollTop <= 4400
  ) {
    document.getElementById("cpanelprod").className = "img-fluid appearright";
    document.getElementById("cpanel-desc").className = "pl-5 appearleft";
  } else if (
    document.documentElement.scrollTop <= 3500 ||
    document.documentElement.scrollTop >= 4400
  ) {
    if (
      document.getElementById("cpanelprod").className ===
      "img-fluid appearright"
    ) {
      document.getElementById("cpanelprod").className =
        "img-fluid appearrightrev";
      document.getElementById("cpanel-desc").className = "pl-5 appearleftrev";
    }
  }
}

function yelpCamp() {
  if (
    document.documentElement.scrollTop >= 3900 &&
    document.documentElement.scrollTop <= 4800
  ) {
    document.getElementById("yelpcamp").className = "img-fluid appearright";
    document.getElementById("yelpcamp-desc").className = "pl-5 appearleft";
  } else if (
    document.documentElement.scrollTop <= 3900 ||
    document.documentElement.scrollTop >= 4800
  ) {
    if (
      document.getElementById("yelpcamp").className === "img-fluid appearright"
    ) {
      document.getElementById("yelpcamp").className =
        "img-fluid appearrightrev";
      document.getElementById("yelpcamp-desc").className = "pl-5 appearleftrev";
    }
  }
}

function smashSuite() {
  if (
    document.documentElement.scrollTop >= 4300 &&
    document.documentElement.scrollTop <= 5200
  ) {
    document.getElementById("smashsuite").className = "img-fluid appearright";
    document.getElementById("smashsuite-desc").className = "pl-5 appearleft";
  } else if (
    document.documentElement.scrollTop <= 4300 ||
    document.documentElement.scrollTop >= 5200
  ) {
    if (
      document.getElementById("smashsuite").className ===
      "img-fluid appearright"
    ) {
      document.getElementById("smashsuite").className =
        "img-fluid appearrightrev";
      document.getElementById("smashsuite-desc").className =
        "pl-5 appearleftrev";
    }
  }
}

//Make scroll down indicator dissapear when bottom is reached
function dissapear() {
  if (document.documentElement.scrollTop >= 4300) {
    document.getElementById("triangle-down").className = "invisible";
  }
}

function footer() {
  if (document.documentElement.scrollTop >= 4400) {
    document.getElementById("footer").className = "appeartop";
  } else {
    document.getElementById("footer").className = "appeartoprev";
  }
}
