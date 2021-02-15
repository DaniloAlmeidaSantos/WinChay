const db = require('../Settings/db');

function userNorify(req, res, next) {
    return db.select().where({INVADM: 1}).table('wninvites')
    .then(data => {
        // Creating session for storage notifications by user
        req.session.notify = {
            DESCRIPTION: [],
            IDSERVER: []
        };

        for (var i = 0; data.length > i; i++) { 
            req.session.notify.DESCRIPTION.push(data[i].INVDESCR);
            req.session.notify.IDSERVER.push(data[i].INVSRV);
        }

        if (data.length > 0) {
            next();
        } else {
            return false;
        }
    })
    .catch(err => {
        console.log(err);
    });
}

module.exports = userNorify;