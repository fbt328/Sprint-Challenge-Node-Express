const express = require('express');
const router = express.Router();
const ProjectDB = require('./helpers/projectModel.js')

// get endpoint
router.get('/', async (req, res) => {
    try {
        const projects = await ProjectDB.get();
        res.status(200).json(projects);
        console.log('get project success')
    } catch (error) {
        console.log(error);
        res.status(500).json({error: 'There was an error getting your projects'})
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
        res.status(500).json({error: 'There was an error getting your project, are you sure the ID is correct?'})
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
        res.status(500).json({error: 'There was an error getting your actions. Are you sure your project ID is correct?'})
    }
})

// post
router.post('/', async (req, res) => {
    const {name, description} = req.body
    try {
        if (name && description){
            const newProject = await ProjectDB.insert({name, description});
            res.status(200).json(newProject);
            console.log('post success')
        } else {
            res.status(400).json({error: "Please provide both a name and description."}); 
        }
        
    } catch (error) {
        console.log(error);
        res.status(500).json({error: 'There was an error adding your project'})
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
        res.status(500).json({error: 'There was an error deleting your project'})
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
      res.status(500).json({message: 'There was an error updating the project'});
    }
  });


  module.exports = router;