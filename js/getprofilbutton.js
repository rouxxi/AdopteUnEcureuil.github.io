console.log("debut");

const profifi = {
  name:""
}

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

const namesquirrel = document.querySelector("#p6").addEventListener("click", function(event){
  event.preventDefault();
  const squirrelName = document.querySelector("#n6").innerHTML;

  profifi.name = squirrelName;

});



setCookie("profil",JSON.stringify(profifi.name),1)


