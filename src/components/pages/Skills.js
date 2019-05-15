import React from 'react';

function getPelne(length) {
  return { width: length*25 }
}

function getPuste(length) {
  return { width: (10-length)*25 }
}

function Skills(props) {
  return (
    <div>
      <span className="tytul">UMIEJĘTNOŚCI:</span>
      <ul className="skills">
        {props.dane.map(item => (
          <li><label>{item.nazwa}</label><span className="gwiazdy-pelne" style={getPelne(item.poziom)}></span><span className="gwiazdy-puste" style={getPuste(item.poziom)}></span></li>
        ))}
      </ul>
    </div>
  );
}

export default Skills;
