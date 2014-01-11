GistClone.Views.GistIndex = Backbone.View.extend({

	preTemplate: JST['gists/index'],

	postTemplate: JST['gists/index_end'],

	render: function(){
		var index = this;
		this.$el.html(this.preTemplate({ gists: this.collection }));
		this.collection.each(function(model){
			var show = new GistClone.Views.GistShow({ model: model });
			index.$el.append(show.render().$el);
		});
		this.$el.append(this.postTemplate());
		return this;
	}
});