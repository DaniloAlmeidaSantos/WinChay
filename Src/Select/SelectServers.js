const db = require('../../Settings/db');

module.exports = {
    async AvailableServers() {
        var ServerName, ServerCreator = [];

        return db.select().table('WNSERVERS')
        .then(data => {
            for (var i = 0; i < data.length; i++) {
                var players = (data[i].SRVPLAYERS != null || data[i].SRVPLAYERS != '') ? data[i].SRVPLAYERS.split(';') : false;
                
                // Verify if MAXPLAYERS < Players on
                if (players.length > 0 && players.length  < data[i].SRVMAXPLAYERS) {
                    Server.push(data[i].SRVNAME, data[i].SRVIDCREATOR);
                }
                
                if (data.length == i) {
                    return Server;
                }
            }
        })
        .catch(err => {
            console.log(err);
        });
    }
}