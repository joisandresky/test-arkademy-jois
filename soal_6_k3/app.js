var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mysql = require('mysql2');
var cors = require('cors');

var app = express();

var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'arkademy'
});

// app.use(express.static(path.join(__dirname, "client")));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/programmers', function (req, res) {
    conn.query('SELECT * FROM users', function (err, results) {
        if (err) return res.status(500).send('Error mendapatkan data!');

        res.status(200).json(results);
    });
});

// function getSkills(results, cb) {
//     // var results = data.slice();
//     // var oldRes = results;
//     var newResults = [];
//     for (var i = 0; i < results.length; i++) {
//         var oldRes = results[i];
//         conn.query('SELECT skill_name FROM skills WHERE user_id = ?', [oldRes.id], function (err, skills) {
//             console.log('reesss', oldRes.name);
//             var temp = {
//                 id: oldRes.id,
//                 name: oldRes.name,
//                 skills: skills
//             }
//             newResults.push(temp);
//         });
//         if (i === results.length - 1) {
//             console.log('nr', newResults);
//             cb(newResults);
//         }
//     }
// }

app.post('/api/programmers', function (req, res) {
    conn.query('INSERT INTO users VALUES(?,?)', [null, req.body.name], function (err, results) {
        if (err) return res.status(500).send('Error saat menyimpan data!');

        res.status(201).json(results);
    });
});

app.post('/api/programmers/skills/:id', function (req, res) {
    conn.query('INSERT INTO skills VALUES(?,?,?)', [null, req.body.skill_name, req.params.id], function (err, results) {
        if (err) return res.status(500).send('Error saat menyimpan data!');

        res.status(201).json(results);
    });
});

app.listen(3000, () => console.log(`Server Running on PORT 3000`));