C.PostPage = React.createClass({
  propTypes: {
    slug: React.PropTypes.string.isRequired
  },
  mixins: [ReactMeteorData],
  getMeteorData() {
    const handle = Meteor.subscribe('singlePost', this.props.slug);
    const data = {};
    if(handle.ready()) {
      data.post = Posts.findOne({slug: this.props.slug});
    }
    
    return data;
  },
  getContent() {
    return <div className="container">
      <a href={FlowRouter.path('/blog')}>Back</a>
      <h3>{this.data.post.title}</h3>
      <p>{this.data.post.content}</p>
    </div>;
  },
  render() {
    return (this.data.post)? this.getContent() : <div>loading...</div>;
  }
});
