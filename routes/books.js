var express = require('express');
var router = express.Router();

let books = [{_id:1,name:"book1",price:200}, {_id:2,name:"book2",price:230}]
var maxId = 2
/* GET users listing. */

router.post("/record", function (req, res, next) {
    console.log(req.body.name)
    res.send(req.body.name)
})

router.route('/')
    .get(function (req, res) {
        res.json(books)

    })
    .post(function (req, res) {
        let book = req.body;
        book._id = ++maxId
        books.push(book)
        res.json(book)

    })
router.delete('/:id', function (req, res) {
    let id = req.params.id
    let index = books.findIndex(book => book._id == id)
    books.splice(index, 1)
    res.json({})

})

module.exports = router;
