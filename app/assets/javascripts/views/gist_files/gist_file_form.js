GistClone.Views.GistFileForm = Backbone.View.extend({

	template: JST['gist_files/form_part'],

	render: function(){
		this.$el.html(this.template({gist_file: this.model}));
		return this;
	}

});