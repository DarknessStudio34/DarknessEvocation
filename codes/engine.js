var ver = 0.01
function setup() {
  createCanvas(screenX, screenY);
  frameRate(60);

}

function draw() {
  screenConfig();
  j();
  cenarios();
  botao()
  frames();
  if (fscreen == false){
    image(BGs.menu_full, screenX - screenX * 0.05, 0, 25, 25) 
  }
}


function preload (){
  lg = loadImage('assets/logo_DS.png')
  BGs = {
    menu2: loadImage('assets/menus/menu_principal/menu_bg_2.png'),
    menu1: loadImage('assets/menus/menu_principal/menu_bg_1.png'),
    menu1_1: loadImage('assets/menus/menu_principal/menu_bg_11.png'),
    menu_play1: loadImage('assets/menus/menu_principal/play1.png'),
    menu_options1: loadImage('assets/menus/menu_principal/options1.png'),
    menu_play2: loadImage('assets/menus/menu_principal/play.png'),
    menu_options2: loadImage('assets/menus/menu_principal/options.png'),
    menu_full: loadImage('assets/menus/b_fullscreen.png'),
    m_options1: loadImage('assets/menus/menu_principal/menu_options1.png'),
    m_options2: loadImage('assets/menus/menu_principal/menu_options2.png'),
  }
  bop = {
    res1: loadImage('assets/menus/menu_principal/res1.png'),
    res_se1: loadImage('assets/menus/menu_principal/res_se1.png'),
   // res2: loadImage('assets/menus/menu_principal/res2.png'),
    //res_se2: loadImage('assets/menus/menu_principal/res_se2.png')
  }
}
function frames (){
  fill (0);
  if (c == 1 || c == 1.2){fill (220)}
    text (frameCount, 10, 10);
    text (mouseY, 40, 30);
    text (mouseX, 40, 10);
}

function screenConfig (){
  if (screenX > screenY + screenY * 0.80){
    propor = 1
    //20:9
  }
  else {
    propor = 2
    //16:9
  }
}
function mouseClicked () {
  if(mouseX > screenX - screenX * 0.10 && mouseY < screenY - screenY * 0.90){
    toggleFullScreen();
    fscreen = true;
    if(screenY > screenX){
      alert("Vire seu dispositivo na horizontal e recarregue a página, se este erro persistir ative a rotação automática no painel de notificações e tente o passo anterior.");
    }
  }
  if (propor == 1){
    if(mouseX > screenX * 0.7775 && mouseX < screenX * 0.9125 && mouseY > screenY * 0.473 && mouseY < screenY * 0.645){
      apm = 1
    } 
  }
  if (propor == 2){
    if(mouseX > screenX * 0.8191 && mouseX < screenX * 0.975 && mouseY > screenY * 0.4173 && mouseY < screenY * 0.5999){
      apm = 1
      console.log('funcionando')
    } 
  }
}
function toggleFullScreen() {
  if ((document.fullScreenElement && document.fullScrenElement !== null) ||    
   (!document.mozFullScreen && !document.webkitIsFullScreen)) {
    if (document.documentElement.requestFullScreen) {  
      document.documentElement.requestFullScreen();  
    } else if (document.documentElement.mozRequestFullScreen) {  
      document.documentElement.mozRequestFullScreen();  
    } else if (document.documentElement.webkitRequestFullScreen) {  
      document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);  
    }  
  } else {  
    if (document.cancelFullScreen) {  
      document.cancelFullScreen();  
    } else if (document.mozCancelFullScreen) {  
      document.mozCancelFullScreen();  
    } else if (document.webkitCancelFullScreen) {  
      document.webkitCancelFullScreen();  
    }  
  } 
} 
