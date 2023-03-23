import { ThemeProvider } from 'styled-components'
import { Button } from './Button/Button'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/theme/default'

function App() {

  return (
      <ThemeProvider theme={defaultTheme}>
        <Button/>
        <Button/>
        <Button/>
        <Button/>
        <Button/>

        <GlobalStyle />
      </ThemeProvider>
  )
}

export default App
