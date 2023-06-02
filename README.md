## Quick Start

### Seting Project

#### package.json

```json

```

### Install

```bash
npm install
```

### Build

```bash
npm run build
```

### Start

```bash
npm start
```

## Env Registration

### Create .env

```bash
touch .env
```

### MongoDB

### .env

```bash
echo "MONGODB_URI=My MongoDB URI" > .env
```

### .erb/configs/webpack.config.main.prod.ts

```typescript
new webpack.DefinePlugin({
    'process.type': '"browser"',
    'process.env.MONGODB_URI': JSON.stringify(process.env.MONGODB_URI),
    'process.env.GH_TOKEN': JSON.stringify(process.env.GH_TOKEN),
}),
```

#### Read .env DevMode

```typescript
import { config } from 'dotenv';
config();
console.log(process.env.MONGODB_URI);
```

## Packege

### Set CSC_LINK

```bash
base64 -i certificate.p12
```

### Set `certificate.p12` CSC_KEY_PASSWORD

#### GitHub Secret Add: Password Used To Export The xxx.p12 file

### Set GH_TOKEN

#### Set environment variables in github

### .env

```txt
process.env.GH_TOKEN = GH_TOKEN
```

## Reference

#### [GitHub issues](https://github.com/electron-react-boilerplate/electron-react-boilerplate/issues/400)

#### [StackOverflow](https://stackoverflow.com/questions/tagged/electron-react-boilerplate)
