C.AddPost = React.createClass({
    mixins: [],
    PropTypes: {

    },
    getInitialState() {
        return {
            errors: {}
        }
    },
    getMeteorData() {
        return {

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
                            <C.FormInput name="title" type="text" label="Title" />
                            <C.FormInput name="content" type="textarea" label="Content" />
                            <input type="submit" className="btn btn-default"/>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
});
