(function() {
  'use strict';
  // YOUR CODE HERE
  var controls = document.getElementById('controls');
  var stop = document.getElementById('stopButton');
  var red = document.getElementById('stopLight');
  var slow = document.getElementById('slowButton');
  var orange = document.getElementById('slowLight');
  var go = document.getElementById('goButton');
  var green = document.getElementById('goLight');


//RED BULB
  controls.addEventListener('click', function(){
    console.log('Event target', event.target);
    if(event.target.id === 'stopButton'){
      red.classList.toggle('stop');
      orange.classList.remove('slow');
      green.classList.remove('go');
      console.log('RED BULB ON');
    }

//ORANGE BULB
    console.log('Event target', event.target);
    if(event.target.id === 'slowButton'){
      orange.classList.toggle('slow');
      red.classList.remove('stop');
      green.classList.remove('go');
      console.log('ORANGE BULB ON');
    }

//GREEN BULB
    console.log('Event target', event.target);
    if(event.target.id === 'goButton'){
      green.classList.toggle('go');
      orange.classList.remove('slow');
      red.classList.remove('stop');
      console.log('GREEN BULB ON');
    }
});

//Part2  HOVERING
controls.addEventListener('mouseover', function(event){
  console.log('Event target', event.target);
  if(event.target.id === 'stopButton' || event.target.id === 'slowButton' || event.target.id === 'goButton'){
    console.log('Entered ' + event.target.innerText + 'button')
  };
});

controls.addEventListener('mouseout', function(event){
  console.log('Event target', event.target);
  if(event.target.id === 'stopButton' || event.target.id === 'slowButton' || event.target.id === 'goButton'){
    console.log('Left ' + event.target.innerText + 'button')
  };
});


})();
