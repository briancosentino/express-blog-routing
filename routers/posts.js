const express = require('express');
const router = express.Router();
const postsList = require('../immagini_e_posts/posts')




//index
router.get('/', (req, res)=>{
    /* res.send('Lista dei post') */
    res.json(postsList)


})
//show
router.get('/:id', (req, res)=>{
    res.json(postsList[req.params.id - 1])
})

//store
router.post('/', (req, res)=>{
    res.send('aggiunta post')
})

//update
router.put('/:id', (req, res)=>{
    res.send('modifica completa del post' + req.params.id)
})

//modify
router.patch('/:id', (req, res)=>{
    res.send('modifica parziale di ' + req.params.id)
})

//delete
router.delete('/:id', (req, res)=>{
    res.send('elimina ' + req.params.id)
})

module.exports = router