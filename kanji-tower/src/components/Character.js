import React from 'react'
import pic1 from '../img/1.jpg'
import pic2 from '../img/2.jpg'
import pic3 from '../img/3.jpg'
import pic4 from '../img/4.jpg'
import pic5 from '../img/5.jpg'
import pic6 from '../img/6.jpg'
import pic7 from '../img/7.jpg'
import pic8 from '../img/8.jpg'
import pic9 from '../img/9.jpg'
import pic10 from '../img/10.jpg'
import pic11 from '../img/11.jpg'
import pic12 from '../img/12.jpg'
import pic13 from '../img/13.jpg'
import pic14 from '../img/14.jpg'

export default function Character(props) {
    const characterInfo = props;
    function getRightImg(n){
        switch(n){
            case 1: return pic1;
            case 2: return pic2;
            case 3: return pic3;
            case 4: return pic4;
            case 5: return pic5;
            case 6: return pic6;
            case 7: return pic7;
            case 8: return pic8;
            case 9: return pic9;
            case 10: return pic10;
            case 11: return pic11;
            case 12: return pic12;
            case 13: return pic13;
            case 14: return pic14;
        }
    }
    console.log(props)
  return (
    <div>
        <p>Character {props.character.id}</p>
        <p>Meaning: {props.character.meaning}</p>
        <p>Kanji: {props.character.kanji}</p>
        <img src={getRightImg(props.character.id)}/>
    </div>
  )
}
