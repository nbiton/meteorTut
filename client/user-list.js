/**
 * Created by naor on 12/7/15.
 */

Template.userList.helpers({
  users: function () {
    return User.find({}, {sort: {score: -1}});
  }
});

Template.userList.events({
  'click button': function () {
    User.update(this._id, {$inc: {score: 5}});
  }
});