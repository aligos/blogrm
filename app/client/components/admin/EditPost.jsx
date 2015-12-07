C.EditPost = React.createClass({
    mixins: [ReactMeteorData],
    getMeteorData() {
        currentUser: Meteor.user();

        const handle = Meteor.subscribe('singlePost', this.props._id);
        const data = {};
        if(handle.ready()) {
            data.post = Posts.findOne({_id: this.props._id});
        }
    
        return data;
    },
    getInitialState() {
        return {
            errors: {}
        }
    },
    onSubmit(event) {
        event.preventDefault();

        var title = $(event.target).find("[name=title]").val();
        var content = $(event.target).find("[name=content]").val();

        var errors = {};

        if (!title) {
            errors.title = "Title required"
        }

        if (!content) {
            errors.content = "Content required"
        }

        this.setState({
            errors: errors
        });

        if (! _.isEmpty(errors)) {
            return;
        }

        Meteor.call("addPost", title, content);
        return FlowRouter.go('Blog');
    },
    render() {       
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-sm-offset-3">
                        <h1>Add New Post</h1>

                        <form onSubmit={this.onSubmit}>
                            <input name="title" type="text" label="Title" value={this.data.post.title} />
                            <textarea name="content" type="textarea" label="Content" value={this.data.post.content} />
                            <input type="submit" className="btn btn-default"/>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
});
