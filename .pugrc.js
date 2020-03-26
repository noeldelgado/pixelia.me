const version = require('./package.json').version;

module.exports = {
    locals: {
        version,
        social: require('./src/data/social'),
        demos: require('./src/data/demos'),
        oss: require('./src/data/oss'),
        projects: require('./src/data/projects')
    }
};
