import React from 'react';
import Menu from './Menu';
import LeftPanel from './LeftPanel';
import RightPanel from './RightPanel';

const Main = () => (
	<div>
		<Menu />
		<LeftPanel />
		<div className="panel main">test</div>
		<RightPanel />
	</div>
);

export default Main;