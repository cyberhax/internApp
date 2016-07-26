# internApp

## Getting Started

### Prerequisites

- [Git](https://git-scm.com/) utk git
- [Node.js and npm](nodejs.org) Node ^4.2.3, npm ^2.14.7 utk run server
- [Bower](bower.io) (`npm install --global bower`) utk install css
- [Ruby](https://www.ruby-lang.org) and then `gem install sass` 
- [Gulp](http://gulpjs.com/) (`npm install --global gulp`)  utk automate task
- [MongoDB](https://www.mongodb.org/) - Keep a running daemon with `mongod`  utk server mongo

### Developing

1. Run `npm install` to install server dependencies.

2. Run `bower install` to install front-end dependencies.

3. Run `mongod` in a separate shell to keep an instance of the MongoDB Daemon running

4. Run `gulp serve` to start the development server. It should automatically open the client in your browser when ready.

## Build & development

Run `grunt build` for building and `grunt serve` for preview.

## Testing

Running `npm test` will run the unit tests with karma.

## TODO

1. Front end
    -bagi lawa sikit,create ngan edit klau bole pakai modal
2. secure
    * api
    * page
    * 
3. function
    * change account status active/notactive
    * profile page
    * notify when new job open to student
    * notify hc when someone apply(can turn on/off)
    * issue offer letter(HC) *notify csimal
    * 