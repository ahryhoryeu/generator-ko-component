'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {

    prompting() {
        // Have Yeoman greet the user.
        this.log(yosay(
            `Welcome to the ${chalk.red('knockout.js component')} generator!`
        ));

        const prompts = [
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
            }
        ];

        return this.prompt(prompts).then(props => {
            this.props = props;
        });
    }

    writing() {

        const filePath = `${this.props.componentName}/${this.props.componentName}`;

        const toTitleCase = function (str) {
            return str.split('')
                .map((char, i) => i === 0 ? char.toUpperCase() : char)
                .join('');
        };

        const viewModelPrefix = this.props.componentName.split('-')
            .map(x => toTitleCase(x))
            .join('');

        const viewModelName = `${viewModelPrefix}ViewModel`;

        this.fs.copyTpl(
            this.templatePath('component.html'),
            this.destinationPath(`${filePath}.html`),
            {
                componentName: this.props.componentName
            }
        );

        this.fs.copyTpl(
            this.templatePath('component.js'),
            this.destinationPath(`${filePath}.js`),
            {
                addViewModel: this.props.addViewModel,
                separateViewModel: this.props.hasSeparateViewModel,
                viewModelName: viewModelName,
                componentName: this.props.componentName,
                generateLess: this.props.generateLess
            }
        );

        if (this.props.hasSeparateViewModel) {
            this.fs.copyTpl(
                this.templatePath('component-view-model.js'),
                this.destinationPath(`${filePath}-view-model.js`),
                {
                    viewModelName: viewModelName
                }
            )
        }

        if (this.props.generateLess) {
            this.fs.copyTpl(
                this.templatePath('component.less'),
                this.destinationPath(`${filePath}.less`),
                {
                    componentName: this.props.componentName
                }
            );
        }
    }
};
