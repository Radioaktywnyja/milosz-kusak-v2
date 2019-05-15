import React from 'react';

function Quests(props) {
  return (
    <div>
      <span className="tytul">DOTYCHCZASOWE REALIZACJE:</span>
      <ul className="achieve">
        {props.dane.map(item => (
          <li><label><a href={item.adres}>{item.adres.substring(7)}</a></label> - {item.opis}</li>
        ))}
      </ul>
    </div>
  );
}

export default Quests;
