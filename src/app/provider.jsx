import { ThemeProvider } from 'next-themes';
import React from 'react';

 const Provider = ({children}) => {
    return (
        <ThemeProvider defaultTheme='light' enableSystem={false} attribute="class">
            {children}
        </ThemeProvider>
    );
};

export default Provider;