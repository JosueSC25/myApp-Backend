var express = require('express');
var router = express.Router();

let goals =[];

router.get('/getGoals',function(req,res,next){
    res.json(goals);
})

router.post('/addGoals',function(req,res,next){
    let timestap = Date.now() + Math.random();
    if(req.body && req.body.name && req.body.description && req.body.dueDate){
        req.body.id=timestap.toString();
        goals.push(req.body);
        res.status(200).json(goals);
    }else{
        res.status(400).json({error:"No se esta enviando los parametros establecidos"});
    }
    
})

router.delete('/removeGoals/:id',function(req,res,next){
if (!req.params.id) {
    return res.status(400).json({ error: "Se requiere un ID válido para eliminar la tarea." });
}
const id = req.params.id;
const index = goals.findIndex(goal => goal.id === id);
if (index === -1) {
    return res.status(400).json({ error: "No se encontró ninguna meta con ese ID." });
}
goals.splice(index, 1);
res.status(200).json({ message: "Meta eliminada exitosamente.", goals });
});

module.exports = router;