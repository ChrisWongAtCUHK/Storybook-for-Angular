# Customize Webpack Configuration in Your Angular Application
https://netbasal.com/customize-webpack-configuration-in-your-angular-application-d09683f6bd22

```
npm i -D @angular-builders/custom-webpack
```

angular.json

```
{
  "architect": {
    "build": {
      "builder": "@angular-builders/custom-webpack:browser",
      "options": {
        "customWebpackConfig": {
          "path": "./webpack.config.js"
        }
      }
    },
    "serve": {
      "builder": "@angular-builders/custom-webpack:dev-server",
      "options": {
        "customWebpackConfig": {
          "path": "./webpack.config.js"
        }
      }
    }
  }
}
```

# Storybook for Angular
## Automatic setup
https://storybook.js.org/docs/guides/guide-angular/#automatic-setup

```
npx -p @storybook/cli sb init --type angular
```
## Custom Webpack Config
https://storybook.js.org/docs/configurations/custom-webpack-config/



