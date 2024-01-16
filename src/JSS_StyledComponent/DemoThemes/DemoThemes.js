import React, {useState} from 'react'
import styled, { ThemeProvider } from 'styled-components'

export const DemoThemes = (props) => {

    

    const configDarkTheme = {
        background: '#000',
        color: '#fff'
    }

    const configLightTheme = {
        background: '#fff',
        color: '#000'
    }

    const [theme, setTheme] = useState(configDarkTheme);

    const handleChangeTheme = (e) => {
        setTheme(e.target.value === "dark" ? configDarkTheme : configLightTheme);
    }

    const DivStyle = styled.div`
        background-color: ${props => props.theme.background};
        padding: 20px;
        color: ${props => props.theme.color};
    `

    return (
        <ThemeProvider theme={theme}>
            <DivStyle>DemoThemes</DivStyle>
            <select onChange={handleChangeTheme}>
                <option value="dark">Dark Theme</option>
                <option value="light">Light Theme</option>
            </select>
        </ThemeProvider>

    )
}
