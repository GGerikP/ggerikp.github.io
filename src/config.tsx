
/*type Breakpoints = {
    mobile: string;
    tablet: string;
    desktop: string;
    largeScreen: string;
    widescreen: string;
}*/

interface Config {
    // breakpoints: Breakpoints;
    apiBaseUrl: string;
    // featureFlag: boolean;
    // ... other configuration values
}

const config: Config = {
/*    breakpoints: {
        mobile: '576px',
        tablet: '768px',
        desktop: '992px',
        largeScreen: '1919px',
        widescreen: '1920px',
    }*/
    apiBaseUrl: process.env.REACT_APP_API_BASE_URL || 'http://localhost:3000',
    // featureFlag: process.env.REACT_APP_FEATURE_FLAG === 'true',
    // ... other configuration values
};

export default config;