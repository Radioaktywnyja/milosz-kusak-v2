import React from 'react';

function RightPanel(props) {
	return (
		<div className="panel widgety">
			<span className="aktualnosci-tytul">Aktualności</span>
			<div className="aktualnosci">
				{props.dane.map(item => (
					<div className="news">
						<span className="news-date">{item.dzien} {item.data}</span>
						<p>{item.tresc}</p>
					</div>
				))}
			</div>
		</div>
	);
}

export default RightPanel;
