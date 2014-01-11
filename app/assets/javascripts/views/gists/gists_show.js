GistClone.Views.GistShow = Backbone.View.extend({

	events: {
		"click button": "toggleFavorite"
	},

	tagName: "li",

	template: JST['gists/show'],

	render: function(){
		this.$el.html(this.template({ gist: this.model }));
		if(this.model.get('favorite')) this.$('.favorite').toggleClass('hidden');
		return this;
	},

	toggleFavorite: function(event){
		$button = $(event.currentTarget);
		if($button.data('type') == 'add') this.addFavorite();
		else this.removeFavorite();
	},

	addFavorite: function(){
		var view = this;
		favorite = new GistClone.Models.Favorite({}, { gist: this.model });
		favorite.save({}, {
			success: function(){
				view.model.set('favorite', favorite)
				view.$('button').toggleClass('hidden');
			}
		});
	},

	removeFavorite: function(){
		var view = this;
		favorite = this.model.get('favorite');
		favorite.destroy({
			success: function(){
				console.log(view);
				view.$('button').toggleClass('hidden');
			}
		});
	}

});