const Candidate = require('./candidate.model');

exports.index = function (req, res) {
    Candidate.find().exec(function (err, candidates) {
        if (err) return res.status(500).send(err);

        res.json(candidates);
    });
};

exports.seeding = function (req, res) {
    let candidates = [
        {
            name: "Jokowi-Ma`Ruf",
            earned_vote: 0
        }, {
            name: "Prabowo-Sandi",
            earned_vote: 0
        }
    ];
    Candidate.count().exec(function (err, count) {
        if (count > 0) return res.status(200).json({ message: "Paslon Sudah Ada!" });
        Candidate.create(candidates, function (err, candidates) {
            if (err) return res.status(500).send(500);

            return res.status(201).json({ message: "Paslon Berhasil di Buat!" });
        });
    });
};

exports.vote = function (req, res) {
    if (!req.params.id) return res.status(400).json({ message: "Param ID cannot be null" });

    Candidate.findOne({ _id: req.params.id }).exec(function (err, candidate) {
        if (err) return res.status(500).send(500);
        if (!candidate) return res.status(404).json({ message: "Candidate not Found!" });

        candidate.earned_vote += 1;
        candidate.save(function (err) {
            if (err) return res.status(500).send(500);
            return res.status(200).json({ message: `You Are Voted ${candidate.name}!` });
        });
    });
}