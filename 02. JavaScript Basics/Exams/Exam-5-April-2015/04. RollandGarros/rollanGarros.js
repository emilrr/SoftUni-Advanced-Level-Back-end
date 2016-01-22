function solve(input){
    var players = [];

    function updatePlayer(name, matchesWon, matchesLost, setsWon, setsLost, gamesWon, gamesLost) {
        var player = players.filter(function (p) {
            return p.name === name;
        })[0];

        if (!player) {
            players.push(
                {
                    name: name,
                    matchesWon: matchesWon,
                    matchesLost: matchesLost,
                    setsWon: setsWon,
                    setsLost: setsLost,
                    gamesWon: gamesWon,
                    gamesLost: gamesLost
                });
        } else {
            player.matchesWon += matchesWon;
            player.matchesLost += matchesLost;
            player.setsWon += setsWon;
            player.setsLost += setsLost;
            player.gamesWon += gamesWon;
            player.gamesLost += gamesLost;
        }
    }

    for(var i = 0; i < input.length; i++){
        var line = input[i].replace(/\s+/g, ' ');
        var dataPlayers = line.split(':');
        dataPlayers[0] = dataPlayers[0].trim();
        dataPlayers[1] = dataPlayers[1].trim();
        var playersData = dataPlayers[0].split('vs.'),
            firstName = playersData[0].trim(),
            secondName = playersData[1].trim(),
            results = dataPlayers[1].split(' '),
            firstPlayerGames = 0,
            firstPlayerSets = 0,
            firstPlayerMatches = 0,
            secondPlayerGames = 0,
            secondPlayerSets = 0,
            secondPlayerMatches = 0,
            firstPlayerSetBalance = 0;
        for (var r in results) {
            var gameResult = results[r].split('-');
            var resultFirst = Number(gameResult[0]);
            var resultSecond = Number(gameResult[1]);
            firstPlayerGames += resultFirst;
            secondPlayerGames += resultSecond;

            if (resultFirst > resultSecond) {
                firstPlayerSets++;
                firstPlayerSetBalance++;
            } else {
                secondPlayerSets++;
                firstPlayerSetBalance--;
            }
        }

        if (firstPlayerSetBalance > 0) {
            firstPlayerMatches++;
        } else {
            secondPlayerMatches++;
        }

        updatePlayer(firstName, firstPlayerMatches, secondPlayerMatches, firstPlayerSets, secondPlayerSets, firstPlayerGames, secondPlayerGames);
        updatePlayer(secondName, secondPlayerMatches, firstPlayerMatches, secondPlayerSets, firstPlayerSets, secondPlayerGames, firstPlayerGames);
    }

    players.sort(function (firstPlayer, secondPlayer) {
        if (secondPlayer.matchesWon !== firstPlayer.matchesWon) {
            return secondPlayer.matchesWon - firstPlayer.matchesWon;
        }

        if (secondPlayer.setsWon !== firstPlayer.setsWon) {
            return secondPlayer.setsWon - firstPlayer.setsWon;
        }

        if (secondPlayer.gamesWon !== firstPlayer.gamesWon) {
            return secondPlayer.gamesWon - firstPlayer.gamesWon;
        }

        return firstPlayer.name.localeCompare(secondPlayer.name);
    });

    console.log(JSON.stringify(players));
}

var data = [
    "Novak Djokovic vs. Roger Federer : 6-3 6-3",
    "Roger    Federer    vs.        Novak Djokovic    :         6-2 6-3",
    "Rafael Nadal vs. Andy Murray : 4-6 6-2 5-7",
    "Andy Murray vs. David     Ferrer : 6-4 7-6",
    "Tomas   Bedrych vs. Kei Nishikori : 4-6 6-4 6-3 4-6 5-7",
    "Grigor Dimitrov vs. Milos Raonic : 6-3 4-6 7-6 6-2",
    "Pete Sampras vs. Andre Agassi : 2-1",
    "Boris Beckervs.Andre        Agassi:2-1"
];

solve(data);