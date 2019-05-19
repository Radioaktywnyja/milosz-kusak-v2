import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import avatar from './../../assets/images/avatar.png';

const getAge = birthDate => Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e+10);

function Home(props) {
  const [showSkills, setShowSkills] = useState(false);
  const [showQuests, setShowQuests] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
  const [showHobby, setShowHobby] = useState(false);

  function hideTooltips() {
    setShowSkills(false);
    setShowQuests(false);
    setShowHistory(false);
    setShowHobby(false);
  }

  const checkTooltipOn = () => (showSkills === false && showQuests === false && showHistory === false && showHobby === false ? true : false);

  return (
    <div>
      <div className="tooltip-container">
        <CSSTransition in={showSkills} timeout={2000} classNames="tool-slide">
          <div className="tooltip" onClick={() => hideTooltips()}>
            <ul>
              {props.dane.umiejetnosci.map(item => (
                <li>{item.nazwa}</li>
              ))}
            </ul>
            <span className="tooltip-hide">- kliknij by zwinąć</span>
          </div>
        </CSSTransition>
        <CSSTransition in={showHistory} timeout={500} classNames="tool-slide">
          <div className="tooltip" onClick={() => hideTooltips()}>
            <ul>
              <li>O mojej z kodowaniem przygodzie słów kilka...</li>
            </ul>
            <span className="tooltip-hide">- kliknij by zwinąć</span>
          </div>
        </CSSTransition>
        <CSSTransition in={showHobby} timeout={500} classNames="tool-slide">
          <div className="tooltip" onClick={() => hideTooltips()}>
            <ul>
              {props.dane.hobby.map(item => (
                <li>{item.nazwa}</li>
              ))}
            </ul>
            <span className="tooltip-hide">- kliknij by zwinąć</span>
          </div>
        </CSSTransition>
        <CSSTransition in={showQuests} timeout={100} classNames="tool-slide">
          <div className="tooltip" onClick={() => hideTooltips()}>
            <ul>
              {props.dane.zadania.map(item => (
                <li><label><a href={item.adres}>{item.adres.substring(7)}</a></label></li>
              ))}
            </ul>
            <span className="tooltip-hide">- kliknij by zwinąć</span>
          </div>
        </CSSTransition>
      </div>
      <div className="profil-okno">
        <span className="name">{props.dane.personalia.imie} {props.dane.personalia.nazwisko}</span>
        <div className="avatar-main">
          <img src={avatar} alt="avatar" />
        </div>
        <div className="staty">
          <ul>
            <li><label>Płeć: </label>{props.dane.personalia.plec}</li>
            <li><label>Rasa: </label>{props.dane.personalia.rasa}</li>
            <li><label>Klasa: </label>{props.dane.personalia.klasa}</li>
            <li><label>Poziom (wiek): </label>{getAge(props.dane.personalia.urodziny)}</li>
            <li><label>Charakter: </label>{props.dane.personalia.charakter}</li>
            <li><label>Lokalizacja: </label>{props.dane.personalia.lokalizacja}</li>
          </ul>
        </div>
      </div>
      <div className="odnosniki">
        <ul>
          <li>Umiejętności:<br /><span className="tooltip-act" onClick={() => checkTooltipOn() ? setShowSkills(true) : hideTooltips()} >+ kliknij by rozwinąć</span></li>
          <li>Osiągnięcia:<br /><span className="tooltip-act" onClick={() => checkTooltipOn() ? setShowQuests(true) : hideTooltips()} >+ kliknij by rozwinąć</span></li>
          <li>Historia:<br /><span className="tooltip-act" onClick={() => checkTooltipOn() ? setShowHistory(true) : hideTooltips()} >+ kliknij by rozwinąć</span></li>
          <li>Hobby:<br /><span className="tooltip-act" onClick={() => checkTooltipOn() ? setShowHobby(true) : hideTooltips()} >+ kliknij by rozwinąć</span></li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
