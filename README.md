# Tengrave/Vue
A Version Of Vue Tengrave Starter Template

## Features

- [Vue 3](https://github.com/vuejs/core), [Vite 3](https://github.com/vitejs/vite), [pnpm](https://pnpm.io/)

- TypeScript

- [Vue Router](https://router.vuejs.org/zh/introduction.html), [Vue I18n](https://vue-i18n.intlify.dev/), [Axios](https://axios-http.com/docs/intro), [Pinia](https://pinia.vuejs.org/introduction.html)

- [Components auto importing](https://github.com/antfu/unplugin-auto-import)

- [defineOptions support in script setup](https://github.com/sxzz/unplugin-vue-macros/tree/main/packages/define-options#readme)

## Start

### Clone to local

If you prefer to do it manually with the cleaner git history

```bash
npx degit preflower/tengrave#vue my-tengrave-app
cd my-tengrave-app
pnpm i # If you don't have pnpm installed, run: npm install -g pnpm
```

### Config eslint

before this, you should create/import your eslint config

```js
// fix unplugin-auto-import eslint error
extends: ['./.eslintrc-auto-import.json']
```

## License
MIT

Inspired by 
- [@antfu/vitesse-lite](https://github.com/antfu/vitesse-lite)
