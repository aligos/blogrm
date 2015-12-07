Posts = new Meteor.Collection('posts');
if(Meteor.isServer) {
  Posts.remove({});
  Posts.insert({
    _id: 'one', title: 'New Meteor Rocks', content: 'Yeah! Check our Meteor Blog for more!'
  });
  Posts.insert({_id: 'two', title: 'MeteorHacks + Kadira => Kadira++', content: 'Something new soon.'});
  Posts.insert({_id: 'three', title: 'My Secret Post', category: 'private'});
};


Meteor.methods({
  addPost(title, content) {
    
    if (! Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }
 
    Posts.insert({
      title: title,
      content: content
    });
  }
});