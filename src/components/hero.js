import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { navDelay, loaderDelay } from '../utils';

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  padding: 0;

  @media (max-width: 480px) {
    padding-bottom: 10vh;
  }

  h1 {
    margin: 0 0 30px 4px;
    color: var(--accent);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  h2 {
    margin-top: 10px;
    color: var(--text-primary);
    line-height: 0.9;
  }

  h3 {
    margin-top: 10px;
    color: var(--text-secondary);
    line-height: 0.9;
  }

  p {
    margin: 20px 0 0;
    max-width: 540px;
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }
`;

const Hero = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => setIsMounted(true), navDelay);
        return () => clearTimeout(timeout);
    }, []);

    const one = <h1>Hi, my name is</h1>;
    const two = <h2 className="big-heading">Yousef Akbari.</h2>;
    const three = <h3 className="medium-heading">I build things for the web & AI.</h3>;
    const four = (
        <>
            <p>
                I'm a Computer Engineer specializing in Artificial Intelligence, Linux System Administration, and DevOps.
                I have a strong foundation in containerization, virtualization, and graphic design.
                Currently, I'm focused on building accessible, human-centered products.
            </p>
        </>
    );
    const five = (
        <a
            className="email-link"
            href="mailto:usfakbari@gmail.com"
            target="_blank"
            rel="noreferrer">
            Get In Touch
        </a>
    );

    const items = [one, two, three, four, five];

    return (
        <StyledHeroSection>
            <TransitionGroup component={null}>
                {isMounted &&
                    items.map((item, i) => (
                        <CSSTransition key={i} classNames="fadeup" timeout={2000}>
                            <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
                        </CSSTransition>
                    ))}
            </TransitionGroup>
        </StyledHeroSection>
    );
};

export default Hero;
