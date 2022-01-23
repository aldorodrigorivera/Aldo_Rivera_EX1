const invitation = require('./inivitation');
const users = require('./users');

invitation.sendAllActiveInvitation();
console.log('Invited:::::',users.getInvitedUsers());
console.log('Missing:::::',users.getMissingUsers());
const {user, index} = users.changeStatus('rodrigo@gmail.com');
invitation.sendEmail(user.email, index);
console.log('Invited:::::',users.getInvitedUsers());


