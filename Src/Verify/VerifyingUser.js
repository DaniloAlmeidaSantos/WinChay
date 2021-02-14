const db = require('../../Settings/db');
const bcrypt = require('bcryptjs');

module.exports = {
    async VerifyUserRegister(name, password, email) {
        // Checking if parameters is not undefined
        const isSomeParameterUndefined = [email, name, password].includes(undefined);
        
        if (isSomeParameterUndefined) {
            return false;
        } else {
            // Checking e-mail not used by other user
            return db.select().where({ASEMAIL: email}).table('WNACCESS')
            .then(function(data) {
                var result = (data.length == 0) ? true : false;

                return result;
            }).catch(err => {
                console.log(err);
            });
    
        }
    },

    async VerifyUserLogin(email, password) {
        // Checking if parameters is not undefined
        const isSomeParameterUndefined = [email, password].includes(undefined);
        
        if (isSomeParameterUndefined) {
            return false;
        } else {
            // Checking e-mail not used by other user
            return db.select().where({ASEMAIL: email}).table('WNACCESS')
            .then(function(data) {

                return bcrypt.compare("B4c0/\/", data[0].ASPASSWD, function(err, res) {
                    console.log(res, password, data[0].ASPASSWD)
            
                    var result = (data.length > 0 && res) ? true : false;

                    return result;
                });
                

            }).catch(err => {
                console.log(err);
            });
    
        }
    }
}
