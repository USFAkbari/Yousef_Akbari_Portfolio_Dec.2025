import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from '../styles';
import Nav from './nav';
import Social from './social';
import Email from './email';
import Footer from './footer';
import Head from './head';

// https://medium.com/@chrisfitkin/how-to-smooth-scroll-links-in-gatsby-3dc445299558
if (typeof window !== 'undefined') {
    // eslint-disable-next-line global-require
    require('smooth-scroll')('a[href*="#"]');
}

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Layout = ({ children, location }) => {
    const isHome = location.pathname === '/';
    const [isLoading, setIsLoading] = useState(isHome);
    const [themeMode, setThemeMode] = useState(() => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('theme') || 'dark';
        }
        return 'dark';
    });

    useEffect(() => {
        if (isLoading) {
            return;
        }

        if (location.hash) {
            const id = location.hash.substring(1); // location.hash without the '#'
            setTimeout(() => {
                const el = document.getElementById(id);
                if (el) {
                    el.scrollIntoView();
                    el.focus();
                }
            }, 0);
        }
    }, [isLoading, location.hash]);

    useEffect(() => {
        const timeout = setTimeout(() => setIsLoading(false), 2000);
        return () => clearTimeout(timeout);
    }, []);

    useEffect(() => {
        document.body.className = themeMode === 'light' ? 'light-mode' : 'dark-mode';
        localStorage.setItem('theme', themeMode);
    }, [themeMode]);

    const toggleTheme = () => {
        setThemeMode(prevMode => prevMode === 'light' ? 'dark' : 'light');
    };

    return (
        <>
            <Head />
            <div id="root">
                <ThemeProvider theme={theme}>
                    <GlobalStyle />
                    <a className="skip-to-content" href="#content">
                        Skip to Content
                    </a>
                    {isLoading && isHome ? (
                        // Placeholder for Loader
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', color: 'var(--accent)' }}>Loading...</div>
                    ) : (
                        <StyledContent>
                            <Nav isHome={isHome} themeMode={themeMode} toggleTheme={toggleTheme} />
                            <Social isHome={isHome} />
                            <Email isHome={isHome} />
                            <div id="content">
                                {children}
                                <Footer />
                            </div>
                        </StyledContent>
                    )}
                </ThemeProvider>
            </div>
        </>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
    location: PropTypes.object.isRequired,
};

export default Layout;
