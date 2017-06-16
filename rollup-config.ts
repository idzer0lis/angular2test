import rollup from 'rollup';
import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import uglify from 'rollup-plugin-uglify';
import scss from 'rollup-plugin-scss';
import collectSass from 'rollup-plugin-collect-sass';
import sass from 'rollup-plugin-sass';
import autoprefixer from 'autoprefixer';
import postcss from 'postcss';


export default {
  entry: 'src/main-aot.ts',
  dest: 'aot/dist/build.js', // outputs a single application bundle
  sourceMap: false,
  onwarn: function(warning) {
    // Skip certain warnings

    // should intercept ... but doesn't in some rollup versions
    if ( warning.code === 'THIS_IS_UNDEFINED' ) { return; }

    // console.warn everything else
    console.warn( warning.message );
  },
  plugins: [
    sass({
     /* // Write all styles to the bundle destination where .js is replaced by .css
      output: true,
      /!*include: ['src/style/app.scss'],*!/
      options: {
        data: '$header-gray: #303030;'
      },*/

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
