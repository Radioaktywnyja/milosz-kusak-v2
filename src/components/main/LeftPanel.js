import React from 'react';
import avatar from '../../assets/images/avatar2.png';

const LeftPanel = () => (
	<div className="panel menu-bok">
		<span className="name">Miłosz Kusak</span>
		<div className="avatar-lewy">
			<img src={avatar} alt="avatapr" />
		</div>
		<ul>
			<li><label>Poziom: </label>30</li>
			<li><label>Klasa: </label>Web Developer</li>
			<li><label>Doświadczenie:</label></li>
			<li className="pasek exp">35%</li>
			<li><label>Zdrowie:</label></li>
			<li className="pasek hp">98%</li>
			<li><label>Zaangażowanie:</label></li>
			<li className="pasek eng">110%</li>			
		</ul>
	</div>
);

export default LeftPanel;