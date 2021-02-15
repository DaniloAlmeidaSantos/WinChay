const db = require('../../Settings/db');
const bcrypt = require('bcryptjs');

module.exports = {
    async CreateServer(name, nPlayers, password, idCreator) {
        // Checking if parameters is not undefined
        const isSomeParameterUndefined = [name, nPlayers].includes(undefined);
        
        // Checking if exists password
        var passwdCheck = (password) ? true : false;

        if (isSomeParameterUndefined) {
            return false;
        } else {            
            // Insert password if exists in parameter
            if (passwdCheck) {
                // Encrypt password
                var salt = bcrypt.genSaltSync(10);
                var hash = bcrypt.hashSync(password, salt);

                return db.insert({SRVNAME: name, SRVMAXPLAYERS: nPlayers, SRVIDCREATOR: idCreator, SRVPASSWD: hash})
                .table('wnservers')
                .then(data => {
                    var result = (data.length != 0) ? true : false;

                    console.log(result)

                    return result;
                })
                .catch(err => {
                    console.log(err);
                });
            } else {
                return db.insert({SRVNAME: name, SRVMAXPLAYERS: nPlayers, SRVIDCREATOR: idCreator})
                .table('wnservers')
                .then(data => {
                    var result = (data.length != 0) ? true : false;

                    console.log(result)

                    return result;
                })
                .catch(err => {
                    console.log(err);
                });
            }
        }
    },

    async AlterServer(id, name, nPlayers, passowrd) {
        // Checking if parameters is not undefined
        const isSomeParameterUndefined = [name, nPlayers].includes(undefined);
        
        // Checking if exists password
        var passwdCheck = (passowrd) ? true : false;

        if (isSomeParameterUndefined) {
            return false;
        } else {            
            // Insert password if exists in parameter
            if (passwdCheck) {
                // Encrypt password
                var salt = bcrypt.genSaltSync(10);
                var hash = bcrypt.hashSync(password, salt);

                return db.update({SRVNAME: name, SRVMAXPLAYERS: nPlayers, SRVPASSWD: hash}).where({SRVID: id})
                .table('wnservers')
                .then(data => {
                    var result = (data.length != 0) ? true : false;
                    return result;
                })
                .catch(err => {
                    console.log(err);
                });
            } else {
                return db.update({SRVNAME: name, SRVMAXPLAYERS: nPlayers, SRVIDCREATOR: idCreator}).where({SRVID: id})
                .table('wnservers')
                .then(data => {
                    var result = (data.length != 0) ? true : false;
                    return result;
                })
                .catch(err => {
                    console.log(err);
                });
            }
        }
    }
}
