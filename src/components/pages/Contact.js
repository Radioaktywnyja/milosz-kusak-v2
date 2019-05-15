import React from 'react';

function Contact(props) {
  return (
    <div>
      <span className="tytul">DANE KONTAKTOWE:</span>
      <ul className="kontakt">
        <li><label>Imię i nazwisko: </label>{props.dane.imie} {props.dane.nazwisko}</li>
        <li><label>Miejscowość: </label>{props.dane.lokalizacja}</li>
        <li><label>Adres e-mail: </label><a href={`mailto:${props.dane.mail}`}>{props.dane.mail}</a></li>
        <li><label>Strona www: </label><a href={`http://${props.dane.www}`}>{props.dane.www}</a></li>
        <li><label>GitHub: </label><a href={`http://${props.dane.github}`}>{props.dane.github}</a></li>
        <li><label>CodePen: </label><a href={`http://${props.dane.codepen}`}>{props.dane.codepen}</a></li>
      </ul>
    </div>
  );
}

export default Contact;
