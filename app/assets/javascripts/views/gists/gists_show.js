GistClone.Views.GistShow = Backbone.View.extend({

	template: JST['gists/show'],

	render: function(){
		this.$el.html(this.template({ gist: this.model }));
		return this;
	}
});