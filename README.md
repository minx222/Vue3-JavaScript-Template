## 安装依赖

```sh
yarn
```

### 启动

```sh
yarn dev
```

### 构建

```sh
yarn build
```

## husky构建

```
yarn prepare
```

```
yarn husky add .husky/pre-commit "echo npx --no-install lint-staged"
```

```
yarn husky add .husky/commit-msg "echo npx --no-install commitlint --edit ${1}"
```

