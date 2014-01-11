GistClone.Models.Favorite = Backbone.Model.extend({

	initialize: function(data, options){
		this.gist = options.gist;
	},
	url: function(){
		if(this.gist) return "/api/gists/" + this.gist.id + "/favorite";
		return "/";
	}
});