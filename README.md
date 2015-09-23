# Aurelia-with-typescript
a refactored official example based on systemjs module-loader with typescript transform on the fly

# Notice
You can find typing files of **aurelia-framework** etc.all on `tsd`. So I left the *.ts files with no typed.
This will cause **type-check** errors on you IDE. To fix that, just find the *.d.ts files under your `jspm_packages` dir.

# How to use
1. clone this repo
```bash
git clone git@github.com:TsumiNa/Aurelia-with-typescript.git myAurelia
```
2. install dependencies
```bash
cd myAurelia
npm i
jspm install
```
3. try it!
```bash
gulp watch
```
after that, open your browser navigate to `http://192.168.11.3:9000`. That's it!

# On the fly
When you changed something in the source files, `browserSync.reload` will be called to reload the page immediately. systemjs's module loader will load **`*.ts`** files into the browers and transform to es5 code on the fly.
All of them be done in memory with fast speed.

# Tips
For easy, you can use `jspm-server`. see [here](https://github.com/geelen/jspm-server) for details