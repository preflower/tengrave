# Tengrave/React
A Version Of React Tengrave Starter Template

## Features

- [React](https://github.com/facebook/react), [Vite 3](https://github.com/vitejs/vite), [pnpm](https://pnpm.io/)

- TypeScript

- [UnoCSS](https://github.com/antfu/unocss) - the instant on-demand atomic CSS engine

- [React Router DOM](https://reactrouter.com/), [React I18next](https://react.i18next.com/), [Axios](https://axios-http.com/docs/intro), [Zustand](https://docs.pmnd.rs/zustand/getting-started/introduction)

- [Components auto importing](https://github.com/antfu/unplugin-auto-import)

## Start

### Clone to local

If you prefer to do it manually with the cleaner git history

```bash
npx degit preflower/tengrave#react my-tengrave-app
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
