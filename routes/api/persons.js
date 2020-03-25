const express = require("express");
const { check, validationResult } = require("express-validator");
const moment = require("moment");
const Person = require("../../model/Person");
// const multer = require("multer");

// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, './uploads/');
//     },
//     filename: (req, file, cb) => {
//         cb(null, Date.now() + file.originalname);
//     }
// })

// const fileFilter = (req, file, cb) => {
//     if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/gif') {
//         cb(null, true);
//     } else {
//         cb(null, false);
//     }
// }

// const upload = multer({
//     storage: storage, limits: {
//         fileSize: 1024 * 1024 * 10
//     },
//     fileFilter: fileFilter
// })

const router = express.Router();
moment.locale("sv");

/**
 * @method - GET
 * @param - /
 * @description - Get Persons
 */
router.get("/all", async (req, res) => {
    // Person.find({}, (err, persons) => {
    //     if (err) return res.status(400).send(err);
    //     let result = orderByDate(persons);
    //     res.status(200).json(persons)
    // })

    Person.find({}, async function (err, users) {
        if (err) {
            res.send("error");
            next();
        }
        let result = await orderByDate(users);
        res.json(result)
    })
});

/**
 * @method - GET
 * @param - /
 * @description - Get Persons by ID
 */
router.get("/:id", async (req, res) => {
    Person.findById(req.params.id).then(doc => {
        if (!doc) { return res.status(404).end(); }
        return res.status(200).json(doc)
    }).catch(err => res.status(400).json(err))
});

/**
 * @method - POST
 * @param - /
 * @description - Add Person
 */
router.post(
    "/",
    [
        check("name", "Namn får inte vara tomt").notEmpty(),
        check("month", "Månad får inte vara tomt").notEmpty(),
        check("day", "Dag får inte vara tomt").notEmpty(),
        check("year", "År får inte vara tomt").notEmpty(),
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array()
            });
        }
        const { name, month, day, year } = req.body;
        try {
            person = new Person({
                name,
                month,
                day,
                year
            });

            await person.save();
            res.status(200).send(person);
        } catch (err) {
            console.log(err.message);
            res.status(500).send("Något gick fel");
        }
    }
);

/**
 * @method - DELETE
 * @param - /
 * @description - Delete Person
 */
router.delete("/:id", async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array()
        });
    }
    try {
        Person.findByIdAndRemove(req.params.id, function (err) {
            if (err) return false;
            res.status(200).send(`Person deleted.`);
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Något gick fel");
    }
});

/**
 * @method - PUT
 * @param - /
 * @description - Update Person
 */
router.put("/:id", upload.single('image'), async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array()
        });
    }
    try {
        const filter = { _id: req.params.id };
        let update = { ...req.body };
        if (req.file && req.file.path) {
            update.image = req.file.path
        }
        await Person.findOneAndUpdate(
            filter,
            update,
            {
                upsert: false, new: true
            },
            (err, doc) => {
                if (err) return res.status(400).send(err);;
                res.status(200).send(doc);
            }
        );
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Något gick fel");
    }
});

async function orderByDate(arr) {
    const personArray = [...arr];
    let today = moment().startOf("day");
    let currentMonth = today.month() + 1;
    let currentDay = today.date();
    let currentYear = today.year();

    let results = personArray.map(async person => {
        const month = person.month;
        const day = person.day;
        let year = currentYear;

        if (month < currentMonth) {
            year = year + 1;
        } else if (month == currentMonth && day < currentDay) {
            year = year + 1;
        }

        let birthday = moment()
            .set({ year: year, month: month - 1, date: day })
            .format();
        person.birthday = birthday;
        var a = moment(birthday);
        var b = moment(today);
        person.daysLeft = Math.ceil(a.diff(b, "days"));
        return person;
    });

    const values = await Promise.all(results).then(persons => {
        const personByBirthday = persons.sort(function (a, b) {
            var c = new Date(a.birthday);
            var d = new Date(b.birthday);
            return c - d;
        });
        return personByBirthday;
    });

    return values;
}

module.exports = router;
