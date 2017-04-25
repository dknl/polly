import babel   from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';

export default {
  entry: 'src/index.js',
  dest:  'web/lib/init.js',
  format: 'es',
  plugins: [resolve(), babel()]
};
