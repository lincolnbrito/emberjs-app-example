App = Ember.Application.create();

App.Router.map(function(){
	this.resource('about');
	this.resource('posts');
});

App.PostsRoute = Ember.Route.extend({
	model: function(){
		return posts;
	}
});

var posts = [{
	id: '1',
	title: "Rails is Omakase",
	author: {name: "d2h"},
	date: new Date('12-27-2012'),
	excerpt: "There are lots of à la carte...",
	body: "I want this for my ORM, I want that for my template language"
},{
	id: '2',
	title: "The Parley Letter",
	author: {name: "d2h"},
	date: new Date('12-24-2012'),
	excerpt: "My appearance on the Ruby Rogue...",
	body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, ex quia cumque fugiat explicabo dolorum nesciunt distinctio eius nulla reprehenderit dolore voluptate totam officia fuga sint provident sunt numquam repellendus."
}];