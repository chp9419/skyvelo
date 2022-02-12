import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GobalStyles';
import theme from './styles/theme';

ReactDOM.render(
    <>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </>,
    document.getElementById('root'),
);
