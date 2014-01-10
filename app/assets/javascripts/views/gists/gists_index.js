GistClone.Views.GistIndex = Backbone.View.extend({

	tagName: "ul",

	template: JST['gists/index'],

	render: function(){
		var index = this;
		this.$el.html(this.template({ gists: this.collection }));
		this.collection.each(function(model){
			var show = new GistClone.Views.GistShow({ model: model });
			index.$el.append(show.render().$el);
		});
		return this;
	}
});