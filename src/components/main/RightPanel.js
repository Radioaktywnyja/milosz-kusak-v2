import React from 'react';

const RightPanel = () => (
	<div className="panel widgety">
		<span className="aktualnosci-tytul">Aktualności</span>
		<div className="aktualnosci">
			<div className="news">
				<span className="news-date">Pt 05-02-2016 20:00</span>
				<p>W dniu dzisiejszym następuje oficjalne zwodowanie tej strony i wypuszczenie jej na szerokie wody internetu. Pomyślnych wiatrów i oby ci, którzy spędzą na niej kilka chwil, nie uznali ich za stracone.</p>
			</div>
            <div className="news">
				<span className="news-date">Wt 29-05-2018 22:15</span>
				<p>Po dłuższej przerwie wracam do mojej przygody z programowaniem. W związku z zakończeniem pierwszej fazy projektu "domowy-budzet" uzupełniłem zakładkę osiągnięcia o nowe strony.</p>
			</div>
		</div>
	</div>
);

export default RightPanel;