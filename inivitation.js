const mUsers = require('./users');

class Invitation {
    allUsers = mUsers.getAllUsers();
    activeUsers = mUsers.getActiveUsers();

    generateInvitationCode(email) {
        const time = Math.floor(new Date().getTime() / 10);
        return btoa(`${email}::${time}`);
    }

    sendEmail(email, index){
        const code = this.generateInvitationCode(email);
        mUsers.setCode(index, code, new Date());
        console.log(`Email sent to:${email}`);
    }

    sendAllActiveInvitation() {
        this.activeUsers.map((user, index) => {
            if(user.invitationCode === null){
                this.sendEmail(user.email, index);
            }
        });
    } 
}

module.exports = new Invitation;