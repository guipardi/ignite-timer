import { ThemeProvider } from 'styled-components'
import { Button } from './Button/Button'
import { defaultTheme } from './styles/theme/default'

function App() {

  return (
      <ThemeProvider theme={defaultTheme}>
        <Button/>
        <Button/>
        <Button/>
        <Button/>
        <Button/>
      </ThemeProvider>
  )
}

export default App
