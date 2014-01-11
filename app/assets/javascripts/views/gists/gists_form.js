GistClone.Views.GistsForm = Backbone.View.extend({

	events:{
		"submit form": "submit",
		"click button#addFile": "addFile"
	},

	template: JST['gists/form'],

	render: function(){
		var view = this;
		this.$el.html(this.template({gist: this.model}));
		if(this.model){
			this.model.get('gist_files').each(function(gist_file){
				gist_file_form = new GistClone.Views.GistFileForm({model: gist_file});
				view.$('.gist_files').append(gist_file_form.render().$el);
			});
		}
		gist_file_form = new GistClone.Views.GistFileForm;
		this.$('.gist_files').append(gist_file_form.render().$el);
		return this;
	},

	submit: function(event){
		event.preventDefault();

		var $form = $(event.currentTarget)
		var formData = $form.serializeJSON();
		console.log(formData.gist_files);
		formData.gist_files = _.reject(formData.gist_files, function(gist_file){
			return gist_file.name == "" && gist_file.body == "";
		});

		if(this.model){
			this.model.save(formData, {
				success: function(){
					Backbone.history.navigate('/', {trigger: true})
				}
			});
		} else {
			gist = GistClone.Collections.gists.create(formData, {
				success: function(){
					Backbone.history.navigate('/', {trigger: true})
				}
			});
		}
	},


	addFile: function(event){
		event.preventDefault();
		gist_file_form = new GistClone.Views.GistFileForm;
		this.$('.gist_files').append(gist_file_form.render().$el);
	}

});