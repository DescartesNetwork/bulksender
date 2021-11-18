require('dotenv-cra').config() // https://github.com/gsoft-inc/craco/issues/180

const {
  CracoAppLessPlugin,
  CracoOsLessPlugin,
} = require('./plugins/craco-less')
const CracoPostCSS = require('./plugins/craco-postcss')
const CracoModuleFederation = require('./plugins/craco-module-federation')
const CracoCompatibility = require('./plugins/craco-compatibility')
const CracoSilence = require('./plugins/craco-silence')

module.exports = {
  plugins: [
    {
      plugin: CracoModuleFederation,
    },
    // Os style loaders
    {
      plugin: CracoOsLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            javascriptEnabled: true,
            modifyVars: {
              '@ant-prefix': 'sentre',
            },
          },
        },
      },
    },
    // App style loaders
    {
      plugin: CracoAppLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            javascriptEnabled: true,
            modifyVars: {
              '@ant-prefix': process.env.REACT_APP_ID,
            },
          },
        },
      },
    },
    {
      plugin: CracoPostCSS,
    },
    {
      plugin: CracoCompatibility,
    },
    {
      plugin: CracoSilence,
    },
  ],
}
