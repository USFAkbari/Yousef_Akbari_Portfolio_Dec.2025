import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled, { css } from 'styled-components';
import { navLinks } from '../config';
import { loaderDelay } from '../utils';
import Menu from './menu';
import { Icon } from './icons';

const StyledHeader = styled.header`
  ${({ theme }) => theme.mixins.flexBetween};
  position: fixed;
  top: 0;
  z-index: 11;
  padding: 0px 50px;
  width: 100%;
  height: var(--nav-height);
  background-color: var(--bg-primary);
  filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important;
  backdrop-filter: blur(10px);
  transition: var(--transition);

  @media (max-width: 1080px) {
    padding: 0 40px;
  }
  @media (max-width: 768px) {
    padding: 0 25px;
  }
`;

const StyledNav = styled.nav`
  ${({ theme }) => theme.mixins.flexBetween};
  position: relative;
  width: 100%;
  color: var(--text-primary);
  font-family: var(--font-mono);
  counter-reset: item 0;
  z-index: 12;

  .logo {
    ${({ theme }) => theme.mixins.flexCenter};

    a {
      color: var(--accent);
      width: 42px;
      height: 42px;

      &:hover,
      &:focus {
        svg {
          fill: var(--accent-tint);
        }
      }

      svg {
        fill: none;
        transition: var(--transition);
        user-select: none;
      }
    }
  }
`;

const StyledLinks = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }

  ol {
    ${({ theme }) => theme.mixins.flexBetween};
    padding: 0;
    margin: 0;
    list-style: none;

    li {
      margin: 0 5px;
      position: relative;
      counter-increment: item 1;
      font-size: var(--fz-xs);

      a {
        padding: 10px;

        &:before {
          content: '0' counter(item) '.';
          margin-right: 5px;
          color: var(--accent);
          font-size: var(--fz-xxs);
          text-align: right;
        }
      }
    }
  }

  .resume-button {
    ${({ theme }) => theme.mixins.smallButton};
    margin-left: 15px;
    font-size: var(--fz-xs);
  }
`;

const ThemeToggle = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  color: var(--text-primary);
  margin-left: 20px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    width: 20px;
    height: 20px;
  }
`;

const Nav = ({ isHome, themeMode, toggleTheme }) => {
    const [isMounted, setIsMounted] = useState(!isHome);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsMounted(true);
        }, 100);

        return () => clearTimeout(timeout);
    }, []);

    const Logo = (
        <div className="logo" tabIndex="-1">
            {isHome ? (
                <a href="/" aria-label="home">
                    {/* Placeholder for Logo SVG or Image */}
                    <span style={{ fontWeight: 'bold', fontSize: '24px', color: 'var(--accent)' }}>YA</span>
                </a>
            ) : (
                <Link to="/" aria-label="home">
                    <span style={{ fontWeight: 'bold', fontSize: '24px', color: 'var(--accent)' }}>YA</span>
                </Link>
            )}
        </div>
    );

    const ResumeLink = (
        <a className="resume-button" href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            Resume
        </a>
    );

    return (
        <StyledHeader>
            <StyledNav>
                <TransitionGroup component={null}>
                    {isMounted && (
                        <CSSTransition classNames="fade" timeout={3000}>
                            {Logo}
                        </CSSTransition>
                    )}
                </TransitionGroup>

                <StyledLinks>
                    <ol>
                        <TransitionGroup component={null}>
                            {isMounted &&
                                navLinks &&
                                navLinks.map(({ url, name }, i) => (
                                    <CSSTransition key={i} classNames="fadedown" timeout={3000}>
                                        <li style={{ transitionDelay: `${isHome ? i * 100 : 0}ms` }}>
                                            <Link to={url}>{name}</Link>
                                        </li>
                                    </CSSTransition>
                                ))}
                        </TransitionGroup>
                    </ol>

                    <TransitionGroup component={null}>
                        {isMounted && (
                            <CSSTransition classNames="fadedown" timeout={3000}>
                                <div style={{ transitionDelay: `${isHome ? navLinks.length * 100 : 0}ms`, display: 'flex', alignItems: 'center' }}>
                                    {ResumeLink}
                                    <ThemeToggle onClick={toggleTheme}>
                                        {themeMode === 'dark' ? '☀️' : '🌙'}
                                    </ThemeToggle>
                                </div>
                            </CSSTransition>
                        )}
                    </TransitionGroup>
                </StyledLinks>

                <Menu themeMode={themeMode} toggleTheme={toggleTheme} />
            </StyledNav>
        </StyledHeader>
    );
};

Nav.propTypes = {
    isHome: PropTypes.bool,
    themeMode: PropTypes.string,
    toggleTheme: PropTypes.func,
};

export default Nav;
