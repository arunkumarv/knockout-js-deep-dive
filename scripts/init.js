require(['knockout-3.5.1', 'appViewModel', 'sidebarViewModel'], function(ko, appViewModel, sidebarViewModel) {
    ko.components.register('message-editor', {
        viewModel: function(params) {
            this.text = ko.observable(params.initialText || '');
        },
        template: 'Message: <input data-bind="value: text" /> '
                + '(length: <span data-bind="text: text().length"></span>)'
    });
     
    ko.applyBindings(new appViewModel(), document.getElementById("app"));
    ko.applyBindings(new sidebarViewModel(), document.getElementById("sidebar"));
});