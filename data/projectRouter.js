const express = require('express');
const router = express.Router();
const ProjectDB = require('./helpers/projectModel.js')

// router.get
// router.get (by id)
// router.post insert()
// router.delete remove()
// router.put update()

// get endpoint
router.get('/', async (req, res) => {
    try {
        const projects = await ProjectDB.get();
        res.status(200).json(projects);
        console.log('get project success')
    } catch (error) {
        console.log(error);
        res.status(500).json({error: 'get project failure'})
    }
})

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const projectbyID = await ProjectDB.get(id)
        res.status(200).json(projectbyID);
        console.log('get by id success')
    } catch (error) {
        console.log(error);
        res.status(500).json({error: 'get failure'})
    }
})

// get actions by project ID
router.get('/:id/actions', async (req, res) => {
    try {
        const { id } = req.params;
        const project = await ProjectDB.getProjectActions(id)
        res.status(200).json(project);
        console.log('get project by id success')
    } catch (error) {
        console.log(error);
        res.status(500).json({error: 'get project failure'})
    }
})

// post
router.post('/', async (req, res) => {
    const project = req.body
    try {
            const newProject = await ProjectDB.insert(project);
            res.status(200).json(newProject);
            console.log('post success')
        
    } catch (error) {
        console.log(error);
        res.status(500).json({error: 'post failure'})
    }
})

// delete remove()
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deleting = await ProjectDB.remove(id)
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
      const updating = await ProjectDB.update(req.params.id, req.body);
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