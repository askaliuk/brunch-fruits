// Application init.
Application = {
    initialize: function() {
        var Router   = require('router');
        this.router  = new Router();
        if (typeof Object.freeze === 'function') Object.freeze(this);
    }
};

$(function() {
    Application.initialize();
    Backbone.history.start();
});
