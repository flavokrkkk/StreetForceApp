import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import babelrc from 'babelrc-rollup'
import camelCase from 'camelcase'

const pkg = require('./package.json')

export default {
  input: pkg.entry || 'src/index.js',
  external: ['react', 'conventional-component', 'classnames-es'],
  output: [
    {
      exports: 'named',
      file: pkg.main,
      name: camelCase(pkg.name),
      format: 'cjs',
      sourcemap: true
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true
    }
  ],
  plugins: [
    babel(babelrc({ addModuleOptions: false })),
    resolve(),
    commonjs({
      include: [
        'node_modules/fbjs/**',
        'node_modules/react/**',
        'node_modules/redux/**',
        'node_modules/symbol-observable/**',
        'node_modules/conventional-component/**'
      ],
      namedExports: {
        react: ['Component']
      }
    })
  ]
}
