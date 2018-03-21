const request = require('request')

module.exports.retrieve = async (req, res) => {
    const hashtag   = req.body.hashtag
    const count     = req.body.count

    const url       = "https://www.instagram.com/explore/tags/" + hashtag + "/?__a=1";

    // use hashtag to get json
    request.get(url, null, (err, response, json) => {
        console.log(json);
        res.status(201).render('detail', { hashtag, count })
    })
    // prettify json
    // parse until there's no more images or
    // we reach the given count
}