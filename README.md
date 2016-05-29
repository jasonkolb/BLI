## Following the folder structure described at https://gist.github.com/ryanflorence/daafb1e3cb8ad740b346#how-it-works

To Start:

(In one terminal:)
// webpack -w
npm run build-watch


(In another terminal:)
npm start
// webpack-dev-server --content-base dist/ --hot --inline

dependencies:
- Flux
- Babel-loader
- webpack
- webpack-dev-server
- Object Assign (npm install --save object-assign)
