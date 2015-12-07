C.MainHeader = React.createClass({
    mixins: [ReactMeteorData],
    getMeteorData() {
        return {
            currentUser: Meteor.user()
        }
    },
    handleLogout() {
        Meteor.logout();
    },
    render() {
        let loginButton;
        let addPost;
        let { currentUser } = this.data;

        if (currentUser) {
            addPost = (
                <li><a href={FlowRouter.path('Add Post')} >Add Post</a></li>
            ),
            loginButton = (
              <li><a href="#" onClick={this.handleLogout}>Logout</a></li>
            )
        } else {
            loginButton = (
              <li><a href="/login">Login</a></li>
            )
        }

        return (
            <nav className="navbar navbar-default">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href={FlowRouter.path('Home')} >React Meteor</a>
                    </div>

                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="/">Home</a></li>
                            <li><a href="/blog">Blog</a></li>
                            {addPost}
                            {loginButton}
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
});