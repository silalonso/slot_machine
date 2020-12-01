function generaNumero() {
    rand1 = Math.floor(Math.random() * 7);
    let expr= rand1;
    switch (expr) {
        case 0 :
            document.getElementById("random1").innerHTML = '<img src="./images/aguacate.png">';
            break;
        case 1 :
            document.getElementById("random1").innerHTML = '<img src="./images/ajo.png">';
          break;
        case 2 :
            document.getElementById("random1").innerHTML = '<img src="./images/cebolla.png">';
          
          break;
        case 3 :
            document.getElementById("random1").innerHTML = '<img src="./images/pepino.png">';
          break;
        case 4:
            document.getElementById("random1").innerHTML = '<img src="./images/puerro.png">';
          break;
        case 5:
            document.getElementById("random1").innerHTML = '<img src="./images/tomate.png">';
          break;
        case 6:
            document.getElementById("random1").innerHTML = '<img src="./images/zanahoria.png">';
          break;
        default:
          console.log('Lo lamentamos, por el momento no disponemos de ' + expr + '.');
      }
      

    rand2 = Math.floor(Math.random() * 7);

    let expr2= rand2;
    switch (expr2) {
        case 0 :
            document.getElementById("random2").innerHTML = '<img src="./images/aguacate.png">';
            break;
        case 1 :
            document.getElementById("random2").innerHTML = '<img src="./images/ajo.png">';
          break;
        case 2 :
            document.getElementById("random2").innerHTML = '<img src="./images/cebolla.png">';
          
          break;
        case 3 :
            document.getElementById("random2").innerHTML = '<img src="./images/pepino.png">';
          break;
        case 4:
            document.getElementById("random2").innerHTML = '<img src="./images/puerro.png">';
          break;
        case 5:
            document.getElementById("random2").innerHTML = '<img src="./images/tomate.png">';
          break;
        case 6:
            document.getElementById("random2").innerHTML = '<img src="./images/zanahoria.png">';
          break;
        default:
          console.log('Lo lamentamos, por el momento no disponemos de ' + expr + '.');
      }
    
    rand3 = Math.floor(Math.random() * 7);

    let expr3= rand3;
    switch (expr3) {
        case 0 :
            document.getElementById("random3").innerHTML = '<img src="./images/aguacate.png">';
            break;
        case 1 :
            document.getElementById("random3").innerHTML = '<img src="./images/ajo.png">';
          break;
        case 2 :
            document.getElementById("random3").innerHTML = '<img src="./images/cebolla.png">';
          
          break;
        case 3 :
            document.getElementById("random3").innerHTML = '<img src="./images/pepino.png">';
          break;
        case 4:
            document.getElementById("random3").innerHTML = '<img src="./images/puerro.png">';
          break;
        case 5:
            document.getElementById("random3").innerHTML = '<img src="./images/tomate.png">';
          break;
        case 6:
            document.getElementById("random3").innerHTML = '<img src="./images/zanahoria.png">';
          break;
        default:
          console.log('Lo lamentamos, por el momento no disponemos de ' + expr + '.');
      }
    
if (rand1= 2) {
    
}else {
    
}
    console.log("me han clickado");
}