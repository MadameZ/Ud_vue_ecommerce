# 08-ecommerce-vuex-getters

## setup for json server :
 - sudo npm install -g json-server
 - create a file db.json
 - in package.json add : 
       {
        "name": "08-ecommerce-vuex-getters",
        "version": "0.1.0",
        "private": true,
        "scripts": {
          "serve": "vue-cli-service serve",
          "jsnsrv" : "json-server --watch db.json",  <=====
          "build": "vue-cli-service build",
          "lint": "vue-cli-service lint"
        },
  - npm run jsnsrv 
      It create an adress with the name of our db.json file in the URL :  http://localhost:3000/products

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```

npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
