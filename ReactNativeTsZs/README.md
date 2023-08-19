# Getting Started

## Configure environment variables

1. Create Environment Files:

Start by creating environment-specific files that will hold your configuration variables. Typically, you will have files like .env.development and .env.production. You can create these files in the root of your project.

2. Install Packages:

Install the react-native-config package. This package makes it easy to manage environment variables in React Native projects.

```bash
npm install react-native-config --save
```

3. Configure Environment Files:

In your .env .env.local, .env.development and .env.production files, define your environment-specific variables.

```bash
REACT_APP_API_URL=http://10.0.2.2:3000/api
REACT_APP_API_KEY=yourapikey
REACT_APP_ENV_NAME=local
```

4. Create a Config File:
   - src/config/apiRoutes.ts

```typescript
import Config from 'react-native-config';

const config = {
  apiUrl: Config.REACT_APP_API_URL!,
  apiKey: Config.REACT_APP_API_URL!,
  envName: Config.REACT_APP_ENV_NAME!,
  // Add more variables as needed
};

export default config;
```

5. Use the Config File:

```typescript
import config from './config/apiRoutes';

const url = `${config.apiUrl}/users`;
```
