install gh pages :
npm i gh-pages --save-dev

package.json:
"homepage": "http://andrianrf.github.io/reactjs"
"predeploy": "npm run build",
"deploy": "gh-pages -d build"

deploy :
npm run deploy

Access :
https://andrianrf.github.io/reactjs