import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';
import { defineConfig } from 'rollup';

const production = !process.env.NODE_ENV === 'production';

export default defineConfig({
  input: 'src/js/index.ts',
  output: {
    file: 'shopify/assets/bundle.js',
    format: 'iife',
    sourcemap: true,
  },
  plugins: [
    resolve(),
    typescript(),
    commonjs({
      extensions: ['.js', '.ts'],
    }),
    production && terser(),
  ],
});
