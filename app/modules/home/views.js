var template = require('./home');

var HomeView = Backbone.View.extend({
    template: template,

    render: function(){
        this.$el.html(this.template());
        return this;
    }
});

module.exports = HomeView;