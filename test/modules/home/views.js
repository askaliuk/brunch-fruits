var HomeView = require('modules/home/views');

suite('Home', function(){
  suite('views', function(){

    test('render', function(){
        var view = new HomeView();
        assert.ok(view.template);
        view.render();
        assert.ok(view.el);
        assert.equal(view.$("h4").html(),
            "Hello World!", "wrong header");
        assert.isTrue(view.$(".footer").exists(), "footer doesn't exist");
        view.remove();
    });

  });
});