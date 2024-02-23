console.log('Jest configuration is being used');
module.exports = {
    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect']
};  