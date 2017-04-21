window.addEventListener('load', function(){

  //function addPrincipal(){}
  var icons = document.getElementsByClassName("icon-gris");
  for (var i = 0; i < icons.length; i++) {
    addIcons(icons[i]);
  }

  function addIcons(icons){
    addClass("icon-facebook");
    addClass("icon-twitter");
    addClass("icon-share");

    function addClass(clase){
    var ulIco = document.createElement("ul");
    icons.appendChild(ulIco);

    var liIco = document.createElement("li");
    ulIco.appendChild(liIco);

    var span = document.createElement("span");
    span.setAttribute("class", clase);
    liIco.appendChild(span);
    }
  }

})
