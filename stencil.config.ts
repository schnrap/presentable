import { Config } from '@stencil/core';
var {sass} = require('@stencil/sass');

export const config: Config = {
  namespace: 'presentable',
  outputTargets:[
    {
      type: 'dist'
    },
    {
      type: 'www',
      serviceWorker: null
    }
  ],
  globalStyle:'src/globals/uulm.scss',
  copy: [
    {src:'slide.html'}
  ],
  plugins: [
    sass({
      injectGlobalPaths: [
        'src/globals/variables.scss'
      ]
    })
  ]
};
