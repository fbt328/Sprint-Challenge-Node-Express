const express = require('express');
const router = express.Router();
const ActionDB = require('./helpers/actionModel.js')



router.get('/', async (req, res) => {
    try {
        const actions = await ActionDB.get();
        res.status(200).json(actions);
        console.log('get success')
    } catch (error) {
        console.log(error);
        res.status(500).json({error: 'get failure'})
    }
})

module.exports = router;