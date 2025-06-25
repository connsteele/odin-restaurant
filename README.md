# odin-restaurant
Fictional restaurant page

## setup
npm install

## manual compile
`npm run build`
will execute `npx webpack`


## running server
`npm run dev`
will execute `npx webpack serve`
visit: http://localhost:8080

## deploy 
switch to gh-pages and updated from master then run a build so dist is full
`npm run dist`
will force add the dist directory (it is in .gitignore)
`npm run deploy`
will push dist subtree to gh-pages branch