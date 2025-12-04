import React from 'react';
import PropTypes from 'prop-types';
import {
    FaGithub,
    FaLinkedin,
    FaInstagram,
    FaTwitter,
    FaExternalLinkAlt,
    FaFolder,
} from 'react-icons/fa';

const Icon = ({ name }) => {
    switch (name) {
        case 'GitHub':
            return <FaGithub />;
        case 'Linkedin':
            return <FaLinkedin />;
        case 'Instagram':
            return <FaInstagram />;
        case 'Twitter':
            return <FaTwitter />;
        case 'External':
            return <FaExternalLinkAlt />;
        case 'Folder':
            return <FaFolder />;
        default:
            return <FaExternalLinkAlt />;
    }
};

Icon.propTypes = {
    name: PropTypes.string.isRequired,
};

export default Icon;
