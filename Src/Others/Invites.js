const db = require('../../Settings/db');

module.exports = {
    
    async InviteAdm(idAdm, idSrv) {
        // Checking if parameters is not undefined
        const isSomeParameterUndefined = [idAdm, idSrv].includes(undefined);

        if (isSomeParameterUndefined) {
            return false;
        } else {
            return db.insert({INVADM: idAdm, INVSRV: idSrv})
            .then(data => {
                var result = (data.length > 0) ? true : false; 

                return result;
            })  
            .catch(err => {
                console.log(err);
            });
        }
    }

}