import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import { babel } from '@rollup/plugin-babel';

export default [
  {
    input: 'index.js',
    plugins: [
      resolve({
        preferBuiltins: true,
        browser: false
      }),
      commonjs(),
      json(),
      babel({
        babelHelpers: 'bundled',
        exclude: 'node_modules/**'
      })
    ],
    output: {
      file: 'dist/index_tmp.cjs.js',
      format: 'cjs',
      exports: 'auto'
    }
  },
  {
    input: 'dist/index_tmp.cjs.js',
    plugins: [
      babel({
        babelHelpers: 'bundled',
        exclude: 'node_modules/**',
        presets: [
          [
            '@babel/preset-env', {
              targets: { node: '14'}
            },
          ]
        ],
        plugins: [
          '@babel/plugin-transform-logical-assignment-operators',
          'babel-plugin-transform-object-hasown'
        ]
      })
    ],
    output: {
      file: 'dist/index.cjs.js',
      format: 'cjs',
      exports: 'auto'
    }
  }
];