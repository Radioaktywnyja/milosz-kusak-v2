import React from 'react';
import avatar from '../../assets/images/avatar2.png';

const getAge = birthDate => Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e+10);

function LeftPanel(props) {

	return (
		<div className="panel menu-bok">
			<span className="name">{props.dane.imie} {props.dane.nazwisko}</span>
			<div className="avatar-lewy">
				<img src={avatar} alt="avatar" />
			</div>
			<ul>
				<li><label>Poziom: </label>{getAge(props.dane.urodziny)}</li>
				<li><label>Klasa: </label>{props.dane.klasa}</li>
				<li><label>Doświadczenie:</label></li>
				<li className="pasek exp">{props.dane.doswiadczenie}</li>
				<li><label>Zdrowie:</label></li>
				<li className="pasek hp">{props.dane.zdrowie}</li>
				<li><label>Zaangażowanie:</label></li>
				<li className="pasek eng">{props.dane.zaangazowanie}</li>
			</ul>
		</div>
	);
}

export default LeftPanel;
