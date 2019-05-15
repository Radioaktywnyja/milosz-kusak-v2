import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Menu from './Menu';
import LeftPanel from './LeftPanel';
import RightPanel from './RightPanel';

import Home from './../pages/Home';
import Skills from './../pages/Skills';
import Quests from './../pages/Quests';
import History from './../pages/History';
import Contact from './../pages/Contact.js';

function Main() {
	const [dane, setDane] = useState({ personalia: [], umiejetnosci: [], zadania: [] });

	useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'http://localhost:3000/api.json',
      );
      setDane(result.data);
    };
    fetchData();
  }, []);

	return (
		<div>
			<Router>
				<Menu />
				<LeftPanel dane={dane.personalia} />
				<div className="panel main">
					<Route exact path="/" render={(props) => <Home {...props} dane={dane} />} />
					<Route path="/umiejetnosci" render={(props) => <Skills {...props} dane={dane.umiejetnosci} />} />
					<Route path="/zadania" render={(props) => <Quests {...props} dane={dane.zadania} />} />
					<Route path="/historia" component={History} />
					<Route path="/kontakt" render={(props) => <Contact {...props} dane={dane.personalia} />} />
				</div>
				<RightPanel />
			</Router>
		</div>
	);
}


export default Main;
