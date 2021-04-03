import { BrowserRouter } from 'react-router-dom'

import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import Header from './components/Header/index'
import Router from './router'

import './App.css'

function App() {

	const theme = createMuiTheme({
        palette: {primary: {main: '#2B9CDF'}, secondary:{main:'#FFFFFF'}}
    })

	return (

		<div className="App">

			<BrowserRouter>
				<ThemeProvider theme={theme}>
					<Header/>
					<div className='content11'>
						<Router/>
					</div>
				</ThemeProvider>
			</BrowserRouter>

		</div>
	)
}

export default App