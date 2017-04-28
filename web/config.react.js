import babel   from 'rollup-plugin-babel';
import cjs from 'rollup-plugin-commonjs';
import globals from 'rollup-plugin-node-globals';
import replace from 'rollup-plugin-replace';
import resolve from 'rollup-plugin-node-resolve';
import ternary from 'rollup-plugin-ternary';


export default {
  entry: 'src/index.js',
  dest:  'web/lib/init.js',
  format: 'iife',
  plugins: [
    babel({
      babelrc: false,
      exclude: 'node_modules/**',
      presets: [[ 'es2015', { modules: false } ], 'stage-0', 'react'],
      plugins: [ 'external-helpers' ]
    }),
    cjs({
      exclude: 'node_modules/process-es6/**',
      include: ['node_modules/**',],
      namedExports: {
        'node_modules/react/react.js': ['createElement']
      }
    }),
    replace({ 'process.env.NODE_ENV': JSON.stringify('development') }),
    resolve({
      browser: true,
      main: true
    })
  ],
  sourceMap: true
}
