GistClone.Collections.Gists = Backbone.Collection.extend({
	url: "/api/gists",
	model: GistClone.Models.Gist
});