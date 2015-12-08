/**
 * Created by naor on 12/7/15.
 */

Template.userForm.events({
  'submit form': function (event) {
    event.preventDefault();

    const form = event.target;
    User.insert({name: form.userName.value});
    form.userName.value = '';
  }
});
