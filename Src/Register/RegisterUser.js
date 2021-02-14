const db = require('../../Settings/db');
const bcrypt = require('bcryptjs')

module.exports = {
    async RegisterUser(name, password, email, age) {
        // Encrypt password
        var salt    = bcrypt.genSaltSync(10);
        var hash    = bcrypt.hashSync(password, salt);

        return db.insert({ASEMAIL: email, ASUSER: name, ASPASSWD: hash, ASAGE: age}).table('WNACCESS')
        .then(function(data) {
            var result = (data.length != 0) ? true : false;
            return result;
        }).catch(err => {
            console.log(err);
        });
    },

    async AlterUser(id, name, password, email, age) {
        // Encrypt password
        var salt    = bcrypt.genSaltSync(10);
        var hash    = bcrypt.hashSync(password, salt);

        return db.insert({ASEMAIL: email, ASUSER: name, ASPASSWD: hash, ASAGE: age}).table('WNACCESS')
        .then(function(data) {
            var result = (data.length != 0) ? true : false;
            return result;
        }).catch(err => {
            console.log(err);
        });
    }
}