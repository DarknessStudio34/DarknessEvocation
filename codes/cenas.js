
function cenarios (){
  if (c == 0){
    background (220)
    image(lg, screenX * 0.45, screenY *0.45, screenY * 0.20, screenY * 0.20)
    timer = timer + 1;
    if (timer == 90){
      c = 0.5;
      ld = 1
      if (ld == 1){
        if(propor == 1){
          background(BGs.menu1)
        }
        if (propor == 2){
          background(BGs.menu2)
        }
        loadmenu();
        ld = 0;
      }
      if (timer >= 100){
        function hg (){c = 1}
      }
    }
  }
  if (c == 1){
    if (propor == 1){
      background (BGs.menu1);
      if (apm == 0){
        image(BGs.menu1_1, Xpm, Ypm, window.screen.width, screenY)
      }
      if (apm == 1){
        console.log("funcionando")
        Xpm = Xpm - 50
        xbm = xbm + 50
        image(BGs.menu1_1, Xpm, Ypm, window.screen.width, screenY)
      }
      image (BGs.menu_options1, xbm, 0, screenX, screenY );
      image (BGs.menu_play1, xbm, 0, screenX, screenY );
    }
    if (propor == 2){
      if (apm == 1){
        console.log("funcionando")
        Xpm = Xpm - 50
        xbm = xbm + 50
        image(BGs.menu1_2, Xpm, Ypm, window.screen.width, screenY)
        if (Xpm < -250 && xbm > 250 ){c = 1.2}
      }
      background (BGs.menu2);
      image (BGs.menu_options2, 0, 0, screenX, screenY );
      image (BGs.menu_play2, 0, 0, screenX, screenY );
    }
  } 
}
function botao (){
  if (c == 1.2){
    if(propor == 2){
      //16:9
      background(BGs.m_options2);
      if (mbp == false) {
        image(bop.res1, 0, 0, screenX, screenY);
      }
      if (mbp == true) {
        image(bop.res_se1, 0, 0, screenX, screenY);
      }
    }
    if (propor == 1){
      //20:9
      background(BGs.m_options1);
      if (mbp == false){
        image(bop.res1, 0, 0, screenX, screenY);
      }
      if (mbp == true) {
        image(bop.res_se1, 0, 0, screenX, screenY);
      }
    }
    if (mouseX > screenX * 0.05 && mouseX < screenX * 0.1526 && mouseY > screenY * 0.519 && mouseY < 0.564 ){mbp = true}
  }
}
  
