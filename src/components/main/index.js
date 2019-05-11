import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Menu from './Menu';
import LeftPanel from './LeftPanel';
import RightPanel from './RightPanel';

import Home from './../pages/Home';
import Skills from './../pages/Skills';
import Quests from './../pages/Quests';
import History from './../pages/History';
import Constact from './../pages/Contact.js';

const Main = () => (
	<div>
		<Router>
			<Menu />
			<LeftPanel />
			<div className="panel main">
				<Route exact path="/" component={Home} />
				<Route path="/umiejetnosci" component={Skills} />
				<Route path="/zadania" component={Quests} />
				<Route path="/historia" component={History} />
				<Route path="/kontakt" component={Constact} />
			</div>
			<RightPanel />
		</Router>
	</div>
);

export default Main;
