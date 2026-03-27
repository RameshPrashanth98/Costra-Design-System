export default {
  test: {
    include: ['tests/tokens/**/*.test.ts'],
    environment: 'node',
    watch: false
  }
} satisfies import('vitest/config').UserConfig;
