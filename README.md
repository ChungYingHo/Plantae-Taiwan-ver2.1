## 專案日誌

### 管理概覽

1. 套件管理：`pnpm`。
2. 狀態管理：`pinia`。
3. 程式碼管理：`Eslint`。
4. CSS 樣式：`Tailwind CSS`。

### Pinia

1. Install pinia

```powershell
pnpm install pinia @pinia/nuxt
```

```ts title='nuxt.config.ts'
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    [
      "@pinia/nuxt",
      {
        autoImports: ["defineStore", ["defineStore", "definePiniaStore"]],
      },
    ],
  ],
});
```

### Eslint

1. Install Eslint

```powershell
pnpm add -D eslint @nuxt/eslint-config
```

2. Create a **.eslintrc.cjs** file in the root:

```js title='.eslintrc.cjs'
module.exports = {
  root: true,
  extends: ["@nuxt/eslint-config"],
};
```

3. Modify **package.json**:

```json
"scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix",
}
```

4. Configuring VS Code - press **ctrl+shift+p** search **Open Workspace Settings (JSON)**:

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  }
}
```

### Tailwind CSS

1. Install Tailwind CSS

```powershell
pnpx nuxi module add @nuxtjs/tailwindcss
pnpx tailwindcss init
```
