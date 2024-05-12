var express = require('express');
var router = express.Router();

let tasks =[];

router.get('/getTasks',function(req,res,next){
    res.json(tasks);
})

router.post('/addTask',function(req,res,next){
    let timestap = Date.now() + Math.random();
    if(req.body && req.body.name && req.body.description && req.body.dueDate){
        req.body.id=timestap.toString();
        tasks.push(req.body);
        res.status(200).json(tasks);
    }else{
        res.status(400).json({error:"No se esta enviando los parametros establecidos"});
    }
    
})

router.delete('/removeTask/:id', function(req, res, next) {
    if(req.params && req.params.id){
        let id= req.params.id;
        tasks = tasks.filter(task => task.id !== id);
        res.status(200).json(tasks)
    }else {
        res.status(400).json({error:"No hay ninguna tarea con ese ID"})
    } 
});


module.exports = router;