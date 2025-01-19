const Prod = require('../models/prod.model');

// Fetch all products
const getAllProds = async (req, res) => {
    try {
        const prods = await Prod.find({});
        res.status(200).json(prods);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Fetch product by ID
const getProdById = async (req, res) => {
    try {
        const { id } = req.params;
        const prod = await Prod.findById(id);
        if (!prod) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json(prod);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new product
const createProd = async (req, res) => {
    try {
        const prod = await Prod.create(req.body);
        res.status(201).json(prod);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update an existing product
const updateProd = async (req, res) => {
    try {
        const { id } = req.params;
        const prod = await Prod.findByIdAndUpdate(id, req.body, { new: true });
        if (!prod) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json(prod);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete a product
const deleteProd = async (req, res) => {
    try {
        const { id } = req.params;
        const prod = await Prod.findByIdAndDelete(id);
        if (!prod) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json(prod);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAllProds,
    getProdById,
    createProd,
    updateProd,
    deleteProd
};
