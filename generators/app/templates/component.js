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
