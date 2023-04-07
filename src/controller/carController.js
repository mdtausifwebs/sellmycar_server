const carsSchema = require("../model/carsModel");
const companySchema = require("../model/company");
const modelsSchema = require("../model/models");

const addcar = async (req, res) => {
  try {
    let cars = await carsSchema.findOne({ model: req.body.model });
    if (!cars) {
      cars = await carsSchema.create(req.body);
      return res.status(201).json({
        success: true,
        cars,
      });
    }
    return res.status(301).json({
      success: true,
      message: "already in data base",
    });
  } catch (err) {
    return res.status(400).json({
      success: false,
      message: err.message,
    });
  }
};
const getcars = async (req, res) => {
  try {
    const cars = await carsSchema.find();
    return res.status(201).json({
      success: true,
      cars,
    });
  } catch (err) {
    return res.status(400).json({
      success: false,
      message: err.message,
    });
  }
};
const deleteone = async (req, res) => {
  try {
    const updatecar = await carsSchema.findById(req.params.id);
    let no = updatecar.quantity - 1;
    const car = await carsSchema.findByIdAndUpdate(req.params.id, {
      quantity: no,
    });

    return res.status(201).json({
      success: true,
      car,
    });
  } catch (err) {
    return res.status(400).json({
      success: false,
      message: err.message,
    });
  }
};
const deleteall = async (req, res) => {
  try {
    const car = await carsSchema.findByIdAndUpdate(req.params.id, {
      quantity: 0,
    });
    return res.status(201).json({
      success: true,
      car,
    });
  } catch (err) {
    return res.status(400).json({
      success: false,
      message: err.message,
    });
  }
};
// .filter((item) => item.company === req.params.name);
const sortcompay = async (req, res) => {
  try {
    console.log('req.query', req.query);
    const cars = await carsSchema.find(req.query);
    // console.log("car", car);
    return res.status(201).json({
      success: true,
      cars,
    });
  } catch (err) {
    return res.status(400).json({
      success: false,
      message: err.message,
    });
  }
};
module.exports = { addcar, getcars, deleteone, deleteall, sortcompay };
