class User {
    rockyObj = {
        name: 'Rocky',
        cellPhone: '(123)456-7891',
        email: 'random@gmail.com',
        status: 'Inactive',
    }
    miroslavObj = {
        name: 'Miroslav',
        cellPhone: '(987)654-3219',
        email: 'randomtest@gmail.com',
        status: 'Active'
    }
    donnyObj = {
        name: 'Donny',
        cellPhone: '(157)358-2349',
        email: 'test@gmail.com',
        status: 'Inactive'
    }
    mattObj = {
        name: 'Matt',
        cellPhone: '(999)888-7777',
        email: 'exercise@gmail.com',
        status: 'Active'
    }
    aldoObj = {
        name: 'Aldo',
        cellPhone: '(999)888-1234',
        email: 'aldo@gmail.com',
        status: 'Active'
    }
    rodrigoObj = {
        name: 'Rodrigo',
        cellPhone: '(999)888-3333',
        email: 'rodrigo@gmail.com',
        status: 'Inactive'
    }

    users = [];

    getActiveUsers() {
        const users = this.getAllUsers();
        return users.filter(user => user.status === 'Active');
    }

    getAllUsers() {
        const list = [this.rockyObj,this.miroslavObj,this.donnyObj,this.mattObj,this.aldoObj,this.rodrigoObj];
        this.users = list.map(user => {
            return {...user, invitationCode: null, sentAt: null};
        });
        return this.users;
    }

    getInvitedUsers(){
        return this.users.filter(user => user.invitationCode !== null);
    }

    getMissingUsers(){
        return this.users.filter(user => user.invitationCode === null);
    }

    changeStatus(email){
        const index = this.users.findIndex(user => user.email === email);
        this.users[index].status = 'Active';
        const user = this.users[index];
        return {
            user, 
            index
        }
    }

    setCode(index, code, date){
        this.users[index].invitationCode = code;
        this.users[index].sentAt = date;
    }

}

module.exports = new User();