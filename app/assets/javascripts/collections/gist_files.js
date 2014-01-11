GistClone.Collections.GistFiles = Backbone.Collection.extend({

	initialize: function(data, options){
		this.gist = options.gist;
	},

	url: function(){
		return "/api/gists/" + this.gist.id + "/gist_files";
	}
})