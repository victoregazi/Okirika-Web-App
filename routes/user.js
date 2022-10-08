const router = require('express').Router();

router.get('/user', (req, res) => {
    res.send('hekko')
})


module.exports = router;