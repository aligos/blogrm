Meteor.startup(() => {

    if (Meteor.users.find().count() === 0) {
        Accounts.createUser({
            email: "aligos@aligos.com",
            password: "aligos555"
        });
    }

});