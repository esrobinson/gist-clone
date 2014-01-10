window.GistClone = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
  	GistClone.Collections.gists = new GistClone.Collections.Gists;
		GistClone.Collections.gists.fetch({
			success: function(){
				new GistClone.Routers.Gists({ $el: $('#content') });
				Backbone.history.start();
			}
		})
  }
};

$(document).ready(function(){
 	GistClone.initialize();
});
