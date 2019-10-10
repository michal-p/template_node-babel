#Template repository for creating small javascript application on javascript with text files input and output

**Instalation (node has to be already installed)**
##BABEL setup in CLI
**How to run javascript with node and traspile by babel**

###1. Create package json
```
nmp init
```

###2. Create index.js file
###3. Install babel
```
npm install --save-dev @babel/core @babel/cli
```
###4. This will appear in ```package.json```
```
{
  "devDependencies": {
+   "@babel/cli": "^7.0.0",
+   "@babel/core": "^7.0.0"
  }
}
```

###5. Add to ```package.json``` babel command
```
  {
    "name": "my-project",
    "version": "1.0.0",
+   "scripts": {
+     "babel": "babel index.js -d lib"
+   },
    "devDependencies": {
      "babel-cli": "^6.0.0"
    }
  }
```
###6. Run babel command which create also ```lib``` folder where transpiled javascript files will be saved
Now we can run from terminal this is command from ```package.json```
``` 
npm run babel
```
or
```
./node_modules/.bin/babel src -d lib
```
###7. Install ```env preset```, which enables transform for ES2015+
```
npm install @babel/preset-env --save-dev
```
###8. Create ```.babelrc``` file to enable env preset
```
{
  "presets": ["@babel/preset-env"]
}
```
###9. Run babel with watch which means that after every save it transform index.js from ES2015+ to ./lib/index.js ES5
```
./node_modules/.bin/babel --watch index.js -d lib
```
##GIT setup
###1. Create repository
```
git init
```
###2. Add .gitignore
```
+ node_modules
```