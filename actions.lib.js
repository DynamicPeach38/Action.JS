//Action.js (ACTIONS.JS) @ actionsjs.x10.mx, recreation site of actionjs.x10.mx
//Created by Loik'n Development, Not a Brand
//--------x=[]=x--------
//Action.js is free, and hopefully always will be, Just give credit to us for scripts (anywhere, even in an options or credits menu!)
//2015 - 2016 Version 1.2 Updates:
//-Mobile Support with Button Scripts (Animate with CSS)
//-A much more compiled way of the exact same old script
//Minor Bug Fixes
//More tests for awesome new features with different 2D game styles
//License: Apache 2.0, more at apache.org
document.addEventListener("keydown", f1, false);
function f1(e) {
  //40 down
  //38 up
  //37 left
  //39 rt
  var char = document.getElementById('char');
  if (e.which == 37) {
    var element = document.getElementById('char'),
      style = window.getComputedStyle(element),
      left = style.getPropertyValue('left');
    left = left.replace("px", "");
    var moveLeft = left * 1 - 5;
    char.style.left = moveLeft + 'px';
  }
}

document.addEventListener("keydown", f2, false);

function f2(e) {
  //40 down
  //38 up
  //37 
  //39 rt
  var char = document.getElementById('char');
  if (e.which == 39 || 37) {
    var element = document.getElementById('char'),
      style = window.getComputedStyle(element),
      left = style.getPropertyValue('left');
    left = left.replace("px", "");
    if (e.which == 39) {
      var moveLeft = left * 1 + 15;
    }
    if (e.which == 37) {
      var moveLeft = left * 1 - 15;
    }

    char.style.left = moveLeft + 'px';
  }
}
function ml() {
  var element = document.getElementById('char'),
    style = window.getComputedStyle(element),
    left = style.getPropertyValue('left');
  left = left.replace("px", "");
  var moveLeft = left * 1 - 15;
  char.style.left = moveLeft + 'px';
}

function mr() {
  var element = document.getElementById('char'),
    style = window.getComputedStyle(element),
    left = style.getPropertyValue('left');
  left = left.replace("px", "");  
  var moveLeft = left * 1 + 15;
  char.style.left = moveLeft + 'px';
}
