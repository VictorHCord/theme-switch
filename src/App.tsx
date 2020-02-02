import React, { useState }  from 'react';
import { ThemeProvider } from 'styled-components'
import Header from './components/Header'
import GlobalStyles from './styles/global'
import light from './styles/themes/light'
import dark from './styles/themes/dark'

const App = () => {
  const [theme, setTheme] = useState(light)

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  }
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <GlobalStyles />
      <Header toggleTheme={toggleTheme} />
    </div>
    </ThemeProvider>
  );
}

export default App;
