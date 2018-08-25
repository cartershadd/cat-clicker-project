var body;

function autorun()
{

  body = document.getElementById('body');
  for (var i = 0; i < 5; i++) {
    var cat = catList[i];
    var div = document.createElement('div');
    var hOne = document.createElement('h1');
    cat.p = document.createElement('p');
    var img = document.createElement('img');
    hOne.textContent = cat.name;
    cat.p.textContent = 'You clicked the kitty ' + cat.counter + ' times.'
    img.src = cat.img;
    img.width = 275;
    img.height = 300;

    // Click function, which also prints out how many clicks each cat has.
    img.addEventListener('click', (function(catCopy) {
      return function() {
        catCopy.counter++;
        catCopy.p.textContent = 'You clicked the kitty ' + catCopy.counter + ' times.'
      };
    })(cat));

    body.appendChild(div);
    div.appendChild(hOne);
    div.appendChild(img);
    div.appendChild(cat.p);
  };

}

if (document.addEventListener) document.addEventListener("DOMContentLoaded", autorun, false);
else if (document.attachEvent) document.attachEvent("onreadystatechange", autorun);
else window.onload = autorun;

var catList = [
  {
    name: 'Fat Boi',
    img: 'fat-boi.jpg',
    counter: 0,
  },
  {
    name: 'GrumpyPlush',
    img: 'grumpy-cat-plush.jpg',
    counter: 0,
  },
  {
    name: 'Sleepyhead',
    img: 'junebug-belly.jpg',
    counter: 0,
  },
  {
    name: 'Fatty McGeaux',
    img: 'fattyMGoo.jpg',
    counter: 0,
  },
  {
    name: 'King Louie',
    img: 'kingLouie.jpg',
    counter: 0,
  }
]

// function catClicker() {
//   counter++;
//   displayClick.innerHTML = counter;
// }
