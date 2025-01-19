const express = require('express');
const { 
    getAllProds, 
    getProdById, 
    createProd, 
    updateProd, 
    deleteProd 
} = require('../controllers/prod.controller');
const router = express.Router();

// Routes
router.get('/', getAllProds);
router.get('/:id', getProdById);
router.post('/', createProd);
router.put('/:id', updateProd);
router.delete('/:id', deleteProd);

module.exports = router;
