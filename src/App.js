import { BrowserRouter } from 'react-router-dom'

import Header from './components/Header/index'
import Router from './router'

import './App.css'

function App() {
	return (

		<div className="App">

			<Header/>
			<BrowserRouter>
				<div className='content11'>
					<Router/>
				</div>
			</BrowserRouter>

		</div>
	)
}

export default App