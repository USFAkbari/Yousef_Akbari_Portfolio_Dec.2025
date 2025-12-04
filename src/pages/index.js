import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Layout from '../components/layout';
import Hero from '../components/hero';
import About from '../components/about';
import Jobs from '../components/jobs';
import Featured from '../components/featured';
import Contact from '../components/contact';

const StyledMainContainer = styled.main`
  counter-reset: section;
`;

const IndexPage = ({ location }) => (
    <Layout location={location}>
        <StyledMainContainer className="fillHeight">
            <Hero />
            <About />
            <Jobs />
            <Featured />
            <Contact />
        </StyledMainContainer>
    </Layout>
);

IndexPage.propTypes = {
    location: PropTypes.object.isRequired,
};

export default IndexPage;
