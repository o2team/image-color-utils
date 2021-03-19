import polyfill from 'rollup-plugin-polyfill'
import typescript from 'rollup-plugin-typescript2';
import commonjs from 'rollup-plugin-commonjs'

let defaults = { compilerOptions: { declaration: true } };
 let override = { compilerOptions: { declaration: false } };

const plugins = [
  typescript({
    tsconfigDefaults: defaults,
    tsconfig: "tsconfig.json",
    tsconfigOverride: override
  }),
  commonjs(),
  polyfill(['./imageColorUtils.ts']),
]

export default {
  input: './src/imageColorUtils.ts',
  output: [{
    file: './build/index.es.js',
    format: 'es',
  },{
    file: './build/index.js',
    format: 'cjs',
    name: 'example'
  }],
  plugins
}