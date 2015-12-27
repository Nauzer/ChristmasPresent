Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
	
  // SUBSCRIBES
  waitOn: function() {
      /*
      if (Roles.userIsInRole(Meteor.userId(), 'admin')) {
          return [
              Meteor.subscribe('Icons'),
              Meteor.subscribe('Games'),
              Meteor.subscribe('GameTypes'),
              Meteor.subscribe('GameTypeProperties'),
              Meteor.subscribe('GameTypeEvents'),
              Meteor.subscribe('GameTypeEventActions'),
              Meteor.subscribe('Groups')
          ];
      };
      */
  }
});

Router.route('/', function() {
  this.render("home");
  },
  {
    name: "home"
  }
);

Router.route('/login', function() {
  this.render("login");
  },
  {
    name: "login"
  }
);

Router.route('/english', function() {
        this.render("english");
    },
    {
        name: "english"
    }
);

Router.route('/kies-cadeautje', function() {
        this.render("pick-present");
    },
    {
        name: "pick-present"
    }
);

/*
Router.route('/admin/gametype/:_id/addproperty', function() {
  this.layout('adminModalFormLayout');
  this.render("adminAddProperty", { 
    data: function() {
      return GameTypes.findOne(this.params._id);
    },
    name: 'gametype.addproperty'
  });
});
*/


var requireLogin = function() {
    if (!Meteor.user()) {
        if (Meteor.loggingIn()) {
            this.render(this.loadingTemplate);
        } else {
            this.render('login');
        }
    } else {
        this.next();
    }
};


Router.onBeforeAction('loading');
Router.onBeforeAction(requireLogin, { only: ['pick-present'] });