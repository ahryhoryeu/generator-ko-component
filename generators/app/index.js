'use strict';
let yeoman = require('yeoman-generator');
let chalk = require('chalk');
let yosay = require('yosay');

module.exports = yeoman.Base.extend({

    prompting: function () {
        let done = this.async();

        // Have Yeoman greet the user.
        this.log(yosay(
            `Welcome to the ${chalk.red('knockout.js component')} generator!`
        ));

        let prompts = [
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
            },
            {
                type: 'confirm',
                name: 'addViewModel',
                message: 'Do you want to add View Model class?',
                default: true
            },
            {
                type: 'confirm',
                name: 'hasSeparateViewModel',
                message: 'Do you want Component View Model to be in a separate file?',
                default: false
            },
            {
                type: 'input',
                name: 'basePath',
                message: 'Provide base path (optional)'
            }
        ];

        this.prompt(prompts, props => {
            this.props = props;
            // To access props later use this.props.someAnswer;
            done();
        });
    },

    writing: function () {

        let filePath = `${this.props.componentName}/${this.props.componentName}`;
        let userPath = this.props.basePath || this.destinationRoot();
        let basePath = `${userPath}/${filePath}`;

        let toTitleCase = function (str) {
            return str.split('')
                .map((char, i) => i === 0 ? char.toUpperCase() : char)
                .join('');
        };

        let viewModelName = this.props.componentName.split('-')
            .map(x => toTitleCase(x))
            .join('');

        viewModelName = `${viewModelName}ViewModel`;

        this.fs.copyTpl(
            this.templatePath('component.html'),
            this.destinationPath(filePath + '.html'),
            {
                componentName: this.props.componentName
            }
        );

        this.fs.copyTpl(
            this.templatePath('component.js'),
            this.destinationPath(filePath + '.js'),
            {
                addViewModel: this.props.addViewModel,
                separateViewModel: this.props.hasSeparateViewModel,
                viewModelName: viewModelName,
                basePath: basePath
            }
        );

        if (this.props.hasSeparateViewModel) {
            this.fs.copyTpl(
                this.templatePath('component-view-model.js'),
                this.destinationPath(filePath + '-view-model.js'),
                {
                    viewModelName: viewModelName
                }
            )
        }

        if (this.props.generateLess) {
            this.fs.copyTpl(
                this.templatePath('component.less'),
                this.destinationPath(filePath + '.less'),
                {
                    componentName: this.props.componentName
                }
            );
        }
    }
});
