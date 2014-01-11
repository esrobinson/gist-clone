GistClone.Routers.Gists = Backbone.Router.extend({

	initialize: function(options){
		this.$el = options.$el;
	},

	routes: {
		"": "index",
		"gists/new": "newGist",
		"gists/:id": "editGist"
	},

	index: function(){
		var view = new GistClone.Views.GistIndex({
			 collection: GistClone.Collections.gists
		 });
		 this._swapView(view);
	},

	newGist: function(){
		var view = new GistClone.Views.GistsForm
		this._swapView(view);
	},

	editGist: function(id){
		gist = GistClone.Collections.gists.get(id);
		var view = new GistClone.Views.GistsForm({model: gist});
		this._swapView(view);
	},

	_swapView: function(view){
		this._currentView && this._currentView.remove();
		this._currentView = view;
		this.$el.html(view.render().$el);
	}

})