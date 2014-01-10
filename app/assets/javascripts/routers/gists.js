GistClone.Routers.Gists = Backbone.Router.extend({

	initialize: function(options){
		this.$el = options.$el;
	},

	routes: {
		"": "index"
	},

	index: function(){
		var view = new GistClone.Views.GistIndex({
			 collection: GistClone.Collections.gists
		 });
		 this._swapView(view);
	},

	_swapView: function(view){
		this._currentView && this._currentView.remove();
		this._currentView = view;
		this.$el.html(view.render().$el);
	}

})