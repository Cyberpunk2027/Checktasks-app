import { ThemeProvider, createTheme } from '@mui/material/styles'
import { Toolbar } from '@mui/material'

const theme = createTheme({
    components: {
        MuiToolbar: {
            styleOverrides: {
                root: {
                    color: 'black'
                }
            }
        }
    }
})
export default function GlobalThemeOverride() {
    return(
        <ThemeProvider theme={theme}>
            <Toolbar/>
        </ThemeProvider>
    )
}