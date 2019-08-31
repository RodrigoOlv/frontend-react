import React from 'react'
import './App.scss'

import Header from './Header'
import Panel from './Panel'

const App: React.FC = () => {
	return (
		<div className="app">
			<Header />
			<Panel />
		</div>
		
	)
}

export default App
