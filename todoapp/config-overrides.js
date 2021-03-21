const path = require('path');
module.exports = function override(config) {
    config.resolve = {
        ...config.resolve,
        alias: {
            ...config.alias,
            '@contexts': path.resolve(__dirname, 'src/contexts'),
            '@components': path.resolve(__dirname, 'src/components'),
            '@screens': path.resolve(__dirname, 'src/screens')
        },
    };
    return config;
};