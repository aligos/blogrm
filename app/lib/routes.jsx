FlowRouter.route("/", {
    name: 'Home',
    subscriptions(params) {

    },
    action(params) {
        renderMainLayoutWith(<C.Home />);
    }
});

FlowRouter.route("/blog", {
    name: 'Blog',
    subscriptions(params) {

    },
    action(params) {
        renderMainLayoutWith(<C.Blog />);
    }
});

FlowRouter.route("/addpost", {
    name: 'Add Post',
    subscriptions(params) {

    },
    action(params) {
        renderMainLayoutWith(<C.AddPost />);
    }
});

FlowRouter.route("/post/:_id/edit", {
    name: 'Edit Post',
    subscriptions(params) {

    },
    action(params) {
        renderMainLayoutWith(<C.EditPost />);
    }
});

FlowRouter.route('/post/:slug', {
  name: 'Post',
  action(params) {
    renderMainLayoutWith(<C.PostPage slug={params.slug} />);
  }
});

FlowRouter.route("/login", {
    name: "Login",
    subscriptions(params) {

    },
    action(params) {
        renderMainLayoutWith(<C.UserLogin />);
    }
});

function renderMainLayoutWith(component) {
    ReactLayout.render(C.MainLayout, {
        header: <C.MainHeader />,
        content: component,
        footer: <C.MainFooter />
    });
}