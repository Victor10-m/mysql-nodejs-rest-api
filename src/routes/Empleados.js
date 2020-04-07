const express = require('express');
const router = express.Router();

const myslqConnection = require('../DataBase');
router.get('/', (req, res) => {
    myslqConnection.query('select * from empelados', (err, rows, fields) => {
        if (!err){
            res.json(rows); 
        }else{
            console.log(err);
        }
    });
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    myslqConnection.query('select * from empelados where id = ?', [id], (err, rows, fields)=>{
        if (!err){
            res.json(rows[0]);
        }else{
            console.log(err);
        }
    });
});

router.post('/', (req, res ) =>{
    const {id, name, salary} = req.body;
    console.log(req.body)
    const query = 'call empleadoAddOrEdit (?,?,?);';
    myslqConnection.query(query, [id, name, salary], (err, rows, fields)=>{
        if (!err){
            res.json({Status: 'empleado guardardo'});
        }else{
            console.log(err);
        }
    })
})

router.put('/:id', (req, res)=> {
    const { name, salary } = req.body;
    const { id } = req.params;
    const query = 'call empleadoAddOrEdit (?,?,?);';
    myslqConnection.query(query, [id, name, salary], (err, rows, fields)=>{
        if (!err) {
            res.json({Status: 'empleado actualizado'});
        }else{
            console.log(err);
        }
        });
});

router.delete('/:id', (req, res)=> {
    const { id } = req.params;
    myslqConnection.query('delete from empelados where id = ?', [id], (err,
         rows, fields)=>{
        if (!err) {
            res.json({Status: 'empleado eliminado'});
        }else {
            console.log(err);
        }
        });
});

module.exports = router; 