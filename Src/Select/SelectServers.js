const db = require('../../Settings/db');

module.exports = {
    async AvailableServers() {
        
        // Objct for server
        var Server = {
            IDSERVER: [],
            IDCREATOR: [],
            NAME: []
        }

        return db.select().table('WNSERVERS')
        .then(data => {
            for (var i = 0; i > data.length; i++) {
                var players = (data[i].SRVPLAYERS != null || data[i].SRVPLAYERS != '') ? data[i].SRVPLAYERS.split(';') : false;
                
                // Verify if MAXPLAYERS < Players on
                if (players.length > 0 && players.length  < data[i].SRVMAXPLAYERS) {
                    Server.IDSERVER.push(data[i].SRVID);
                    Server.IDCREATOR.push(data[i].SRVIDCREATOR);
                    Server.NAME.push(data[i].SRVNAME);
                }
                console.log(Server);
                if (data.length < i) {
                    
                    return Server;
                }
            }
        })
        .catch(err => {
            console.log(err);
        });
    }
}