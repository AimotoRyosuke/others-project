import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  dts: false, // 一時的にdtsを無効化
  splitting: false,
  sourcemap: true,
  clean: true,
  external: ['react', '@apollo/client', 'graphql'],
});
