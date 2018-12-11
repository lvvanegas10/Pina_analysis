import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';


Meteor.startup(() => {
  // code to run on server at startup
});

if(Meteor.isServer){
  Accounts.onCreateUser((options, user) =>{    
    return user
  });
}
