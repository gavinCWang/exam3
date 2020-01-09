const mongoose = require('mongoose')

let ablumModel = mongoose.model("Album")

function addAlbum(album, callback) {
    let obj = ablumModel.create(album, function (err, nr) {
        console.log("[INFO] AlbumDao.addAlbum")
        if (!err)
            callback(nr.toObject())
    })
}

function findAllAlbums(callback) {
    ablumModel.find({}).exec(function (err, album) {
        console.log("[INFO] BookDao.findAllAlbums")
        if (!err)
            callback(album)
    })
}

function deleteAlbum(album_id, callback) {
    ablumModel.findByIdAndRemove(album_id, function (err) {
        console.log("[INFO] BookDao.deleteAlbum")
        if (!err)
            callback({})
    })
}

module.exports = {addAlbum, findAllAlbums, deleteAlbum}