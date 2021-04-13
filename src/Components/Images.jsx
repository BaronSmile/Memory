import React from 'react';
import {images} from '../assets/image';

function Images({endGame}) {
  let characters = [];

  const handleClick = (event) =>{
    let character = event.target;
    if(character.getAttribute('check') === 'found'){
      return;
    }

    if(character !== character[0]) {
      Switch (character);
      characters.push(character);
    } else {
      Switch(character);
      characters=[];
    }

    if(characters.length > 2) {
      if(!checkName(characters[0], characters[1])) {
        Switch(characters[0]);
        Switch(characters[1]);
        characters.shift();
        characters.shift();
      } else {
        characters.shift();
        characters.shift();
      }
    }

  let allPictures = document.getElementsByClassName('image-blank');
    if(allPictures.length < 1) {
      endGame(true);
      let reset = document.getElementsByClassName('image');
      for(let i = 0; i <reset.length; i++){
        reset[i].classList.add('image-blank');
        reset[i].setAttribute('check','false');
        characters =[];
      }
    }
  };

  const checkName = (character1,character2) => {
    if(character1.getAttribute('name') === character2.getAttribute('name')){
      character1.setAttribute('check','found');
      character2.setAttribute('check','found');
      return true;
    }
    return false;
  }

  const Switch = (target) => {
     if(target.getAttribute('check') === 'true'){
       target.setAttribute('check','false');
       target.classList.add('image-blank');
     } else {
       target.setAttribute('check','true');
       target.classList.remove('image-blank');
     }
  }

  return (
    <div className='images'>
      {
        images.sort(() => Math.random() - 0.5)
          .map((element,index) => {
            return (
              <div
                className="image image-blank"
                name={element.name}
                key={index}
                style={{ background: `url(${element.pic})` }}
                check="false"
                onClick={handleClick}
              />
            );
          })}
    </div>
  );
}

export default Images;