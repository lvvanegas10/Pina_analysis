import { Mongo } from 'meteor/mongo';

export const Sites = new Mongo.Collection('sites');

if (Meteor.isServer) {
    Meteor.publish('sites', () => Sites.find({}));
    Meteor.publish('sites-admin', () => Sites.find({owner: Meteor.user().username}));
}

Meteor.methods({
    'sites.comment.add': function (id_site, comments, raiting) {
        const id = Meteor.userId();
        if (!id) {
            throw new Meteor.Error('Not authorized');
        }

        id_site = new Mongo.ObjectID(id_site);
        Sites.update(
            { _id: id_site },
            {
                $set: {
                    comments,
                    raiting
                }
            }
        );

        const site = Sites.findOne({ id_site });
        return site;
    },
    'sites.delete': function(id_site){
        const id = Meteor.userId();
        if (!id) {
            throw new Meteor.Error('Not authorized');
        }

        id_site = new Mongo.ObjectID(id_site);
        Sites.remove({_id: id_site});
    }
});
