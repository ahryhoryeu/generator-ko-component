define(function (require) {
    'use strict';

    var template = require('text!<%= basePath %>.html');
    <% if (addViewModel && separateViewModel) {%>var <%= viewModelName %> = require('<%= basePath %>-view-model');<%}%>
    <% if(addViewModel && !separateViewModel) {%>
    function <%= viewModelName %>(params) {

    }
    <%} %>
    return {
        template: template<% if(addViewModel) {%>,
        viewModel: <%= viewModelName %><%} %>
    };
});


import template from './<%= componentName %>.html';
import componentRegistrator from 'common/scripts/helpers/componentRegistrator';
<% if (addViewModel && separateViewModel) {%> import <%= viewModelName %> from '<%= componentName %>-view-model';<%}%>
<% if(addViewModel && !separateViewModel) {%>
class <%= viewModelName %> {
    constructor(params) {

    }
}
<%} %>
componentRegistrator.register('<%= componentName %>', template, <%= viewModelName %>);