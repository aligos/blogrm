Meteor.publish('posts', () => {
  const selector = {category: {$ne: "private"}};
  return Posts.find(selector);
});


Meteor.publish('singlePost', slug => {
  return Posts.find({slug});
});