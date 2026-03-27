# Quick Task 260328-0os Summary

Status: Failed

- `npm run build-storybook` failed during Storybook preview build.
- Error: `ERR_PACKAGE_PATH_NOT_EXPORTED` for `vite/internal` imported by `@vitejs/plugin-react`.
- Root cause: installed `@vitejs/plugin-react@6.0.1` expects `vite ^8.0.0`, while the repo currently specifies `vite ^6.4.1`.
