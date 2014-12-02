Router.configure({
    loadingTemplate:'loading',
    notFoundTemplate: 'notFound',
    waiton: function() { return Meteor.suscribe('home');}
});

Router.route ('/',{name:'home'});
Router.route ('/loggin',{name:'loggin'});
Router.route ('/enfants',{name:'enfants'});
Router.route ('/parents',{name:'parents'});
Router.route ('/admin',{name:'admin'});
Router.route ('/category/:id',{
    name:'homePage',
    data:function() { return home.findOne(this.params._id);}
});


var requireLogin = function() {
    if (! Meteor.user()) {
        if (Meteor.loggingIn()) {
            this.render(this.loadingTemplate);
        } else {
            this.render('accessDenied');
        }
    } else {
        this.next();
    }
}

Router.onBeforeAction('dataNotFound', {only: 'homePage'});