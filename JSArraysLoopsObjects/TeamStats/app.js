const team = {
    _players: [
        {
            firstName: 'Pablo',
            lastName: 'Sanchez',
            age:11
        },
        {
            firstName: 'Matt',
            lastName: 'Ellisor',
            age:25
        },
        {
            firstName: 'John',
            lastName: 'Smith',
            age:21
        }
    ],
    _games: [
        {
            opponent: 'Team_A',
            teamPoints: 10,
            opponentPoints: 5
        },
        {
            opponent: 'Team_B',
            teamPoints: 15,
            opponentPoints: 55
        },
        {
            opponent: 'Team_C',
            teamPoints: 30,
            opponentPoints: 15
        }
    ],
    get players () {
        return this._players;
    },
    get games () {
        return this._games;
    },
    addPlayer (firstName,lastName,age) {
        this._players.push({
            firstName: firstName,
            lastName: lastName,
            age: age
        });
    },
    addGame (opponent,teamPoints,opponentPoints) {
        this._games.push({
            opponent: opponent,
            teamPoints: teamPoints,
            opponentPoints: opponentPoints
        });
    }
};

team.addPlayer('firstA','lastA',55);
team.addPlayer('firstB','lastB',56);
team.addPlayer('firstC','lastC',57);
team.addGame('OpponentA',100,200);
team.addGame('OpponentB',110,210);
team.addGame('OpponentC',120,220);

console.log(Object.entries(team.players));
console.log('\n');
console.log(Object.entries(team._games));