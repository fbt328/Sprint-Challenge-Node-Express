const express = require('express');
const router = express.Router();
const ActionDB = require('./helpers/actionModel.js')

// router.get
// router.get (by id)
// router.post insert()
// router.delete remove()
// router.put update()

// get endpoint
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

// get by ID
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const action = await ActionDB.get(id)
        res.status(200).json(action);
        console.log('get by id success')
    } catch (error) {
        console.log(error);
        res.status(500).json({error: 'get failure'})
    }
})

// post
router.post('/', async (req, res) => {
    const { project_id, description, notes } = req.body
    try {
        if (project_id && description && notes) {
            const newAction = await ActionDB.insert({project_id, description, notes});
            res.status(200).json(newAction);
            console.log('post success')
        } else {
            res.status(400).json({error: "Please provide all required fields."});
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({error: 'post failure'})
    }
})

// delete remove()
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deleting = await ActionDB.remove(id)
        res.status(200).json(deleting);
        console.log('delete success')
    } catch (error) {
        console.log(error);
        res.status(500).json({error: 'delete failure'})
    }

})

// put update()
router.put('/:id', async (req, res) => {
    try {
      const updating = await ActionDB.update(req.params.id, req.body);
      if (updating) {
        res.status(200).json(updating);
        console.log('updating success')
      } else {
        res.status(404).json({ message: 'The action could not be found' });
      }
    } catch (error) {
      // log error to database
      console.log(error);
      res.status(500).json({
        message: 'Error updating the action',
      });
    }
  });


  module.exports = router;