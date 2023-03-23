import { ThemeProvider } from 'styled-components'
import { Button } from './components/Button/Button'

import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/theme/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Button />
      <Button />
      <Button />
      <Button />
      <Button />

      <GlobalStyle />
    </ThemeProvider>
  )
}
