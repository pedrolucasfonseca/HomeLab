const router = require('express').Router();

router.get('/', (req, res) => {
    res.json({ message: 'HomeLab API', version: '0.1.0' });
});

module.exports = router;