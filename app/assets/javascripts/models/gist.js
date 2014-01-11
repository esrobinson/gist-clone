GistClone.Models.Gist = Backbone.Model.extend({

	parse: function(data){
		favorite = data.favorite;
		gist_files = data.gist_files;
		if(favorite){
			data.favorite = new GistClone.Models.Favorite(favorite, {gist: this});
		}
		data.gist_files = new GistClone.Collections.GistFiles(
														gist_files, {gist: this});

		return data;
	},

	toJSON: function(){
		data = _.clone(this.attributes);
		delete data.favorite;
		return data;
	}

});