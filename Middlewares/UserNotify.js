const db = require('../Settings/db');

function userNorify(req, res, next) {
    return db.select().where({INVADM: 1}).table('wninvites')
    .then(data => {
        if (data.length > 0) {
            console.log('Nova notificação!')
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