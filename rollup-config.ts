import rollup from 'rollup';
import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import uglify from 'rollup-plugin-uglify';
import scss from 'rollup-plugin-scss';
import collectSass from 'rollup-plugin-collect-sass';
import sass from 'rollup-plugin-sass';

export default {
  entry: 'src/main-aot.ts',
  dest: 'aot/dist/build.js', // outputs a single application bundle
  moduleName: 'avayaBundle',
  sourceMap: false,
  format: 'iife',
  onwarn: function(warning) {
    // Skip certain warnings

    // should intercept ... but doesn't in some rollup versions
    if ( warning.code === 'THIS_IS_UNDEFINED' ) { return; }

    // console.warn everything else
    console.warn( warning.message );
  },
  plugins: [
    scss({
      // Write all styles to the bundle destination where .js is replaced by .css
      output: true,
      /*include: ['src/app/!*.scss', 'src/app/!*!/!*!/!*.scss'],*/
      /*options: {
       includePaths: ['node_modules']
       }*/
    }),
    nodeResolve({
      jsnext: true,
      main: true
    }),

    /*collectSass({
      include: ['src/style/!*.scss', 'src/style/app/!*.scss', 'src/style/app/components/!*!/!*.scss']
    }),*/
    commonjs({
      preferBuiltins: true,
      include: 'node_modules/**',
      namedExports: {
        // left-hand side can be an absolute path, a path
        // relative to the current directory, or the name
        // of a module in node_modules
        '@angularclass/hmr': [ 'createNewHosts', 'removeNgStyles' ]
      }
    }),
    uglify()
  ]
};
