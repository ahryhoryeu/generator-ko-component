import template from './<%= componentName %>.html';
import componentRegistrator from 'common/scripts/helpers/componentRegistrator';
<% if (addViewModel && separateViewModel) {%>import <%= viewModelName %> from './<%= componentName %>-view-model';<%}%><% if(addViewModel && !separateViewModel) {%>
class <%= viewModelName %> {
    constructor(params) {

    }
}
<%} %>
componentRegistrator.register('<%= componentName %>', template, <%= viewModelName %>);