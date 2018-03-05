# zezeping-pc

> scss编译支持

```
$ npm install node-sass --save-dev
$ npm install sass-loader --save-dev
$ npm install sass-resources-loader --save-dev
```
需改utils.js 查找到
```
scss: generateLoaders('sass'),
```
替换为
```
scss: generateLoaders('sass').concat(
    {
      loader: 'sass-resources-loader',
      options: {
        resources: [
          path.resolve(__dirname, '../src/assets/stylesheets/mixins/var.scss'),
          path.resolve(__dirname, '../src/assets/stylesheets/mixins/animation.scss'),
          path.resolve(__dirname, '../src/assets/stylesheets/mixins/classes.scss')
        ]
      }
    }
  ),
```

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
