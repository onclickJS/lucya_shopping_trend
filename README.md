# Naver Shopping Trend 조회 UI

> Naver Shpping Trend 조회


## 프로젝트 생성

``` bash
1. git에서 repository 생성
2. 로컬에 git clone
3. npm init -y
4. npm install --save-dev webpack webpack-cli
5. npm install vue
6. sudo npm install -g vue-cli
7. sudo npm install -g @vue/cli-init
8. vue init webpack .
```
* vue init webpack 프로젝트명 을 한다음에 git으로 연결해도 무방함.

## 로컬 빌드
``` bash
npm run dev
```

## 배포용 빌드

## git 배포
``` bash
git add * 
git commit -m "comment..."
git push -u origin develop
```

## firebase 배포
``` bash
1. npm install -g firebase
2. firebase login
3. firebase deploy 
```

## firebase 로컬 확인
``` bash
firebase serve
```

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
