const {default: rollup, fibjsResolve} = require('fib-rollup')

const buble = require('rollup-plugin-buble')
const commonjs = require('rollup-plugin-commonjs')

const bundle = await rollup.rollup({
    input: './src/index.js',
    external: ['coroutine'],
    plugins: [
        fibjsResolve({
            browser: true
        }),
        buble(),
        commonjs()
    ]
});

console.log('========generating==========');

await bundle.write({
    file: './dist/index.js',
    format: 'umd',
    name: 'frontend'
});

console.log('========generated==========');