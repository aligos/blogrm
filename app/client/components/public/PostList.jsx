C.PostList = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    const handle = Meteor.subscribe('posts');
    const data = {};
    if(handle.ready()) {
      data.posts = Posts.find({}, {sort: {_id: 1}}).fetch();
    }
 
    return data;
  },
  getList() {
    return <div className="list-group">
      {this.data.posts.map(task => {
        const path = FlowRouter.path('Post', {_id: task._id})
        return <li className="list-group-item" key={task._id}><a href={path}>{task.title}</a></li>
      })}
    </div>;
  },
  render() {
    return <div>
      <h3>This is the post list</h3>
      {(this.data.posts)? this.getList() : "loading..."}
    </div>;
  }
});