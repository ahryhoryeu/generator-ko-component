'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.Base.extend({

  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the ' + chalk.red('generator-ko-component') + ' generator!'
    ));

    var prompts = [
        {
            type: 'input',
            name: 'componentName',
            message: 'Component name?',
            default: 'test'
        },
        {
            type: 'confirm',
            name: 'generateLess',
            message: 'Do you want to include less stylesheet?',
            default: true
        }
    ];

    this.prompt(prompts, function (props) {
      this.props = props;
      // To access props later use this.props.someAnswer;

      this.mkdir(this.props.componentName);
      done();
    }.bind(this));
  },

  writing: function () {

    var filePath = this.props.componentName + '/' + this.props.componentName;

    this.fs.copy(
      this.templatePath('component.html'),
      this.destinationPath(filePath + '.html')
    );

    this.fs.copy(
      this.templatePath('component.js'),
      this.destinationPath(filePath + '.js')
    );

    if (this.props.generateLess) {
      this.fs.copyTpl(
        this.templatePath('component.less'),
        this.destinationPath(filePath + '.less'),
        {
          componentName: this.props.componentName
        }
      );
    }
  },

  install: function () {
    //this.installDependencies();
  }
});
