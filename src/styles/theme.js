import mixins from './mixins';

const theme = {
    bp: {
        mobileS: `max-width: 330px`,
        mobileM: `max-width: 400px`,
        mobileL: `max-width: 480px`,
        tabletS: `max-width: 600px`,
        tabletL: `max-width: 768px`,
        desktopS: `max-width: 900px`,
        desktopM: `max-width: 1080px`,
        desktopL: `max-width: 1200px`,
    },
    mixins,
};

export default theme;
