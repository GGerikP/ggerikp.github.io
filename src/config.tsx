
/*type Breakpoints = {
    mobile: string;
    tablet: string;
    desktop: string;
    largeScreen: string;
    widescreen: string;
}*/

type ChatGPTModel = {
    url: string;
}

type ChatGPTConfig<T extends string> = {
    models: Record<T, ChatGPTModel>;
}

type Config = {
    // breakpoints: Breakpoints;
    apiBaseUrl: string;
    // featureFlag: boolean;
    // ... other configuration values
    chatGPT: ChatGPTConfig<string>;
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
    chatGPT: {
        models: {
            default: {
                url: process.env.DEFAULT_CHAT_GPT_URL || '',
            }
        }
    }
};

export default config;
