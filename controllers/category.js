const Category = require("../models/category");

exports.create = async (req, res) => {
  const { category } = req.body;

  try {
    const categoryExist = await Category.findOne({
      category: { $regex: new RegExp(`^${category}$`, "i") },
    });
    if (categoryExist) {
      return res.status(400).json({
        errorMessage: `${category} already exists`,
      });
    }

    let newCategory = new Category();
    newCategory.category = category;

    newCategory = await newCategory.save();

    res.status(200).json({
      category: newCategory,
      successMessage: `${newCategory.category} was created successfully`,
    });
  } catch (error) {
    console.log("create category error", error);
    res.status(500).json({
      errorMessage: "Uh Oh! Something went wrong, Please try again later",
    });
  }
};

exports.readAll = async (req, res) => {
  try {
    const categories = await Category.find({});
    res.status(200).json({
      successMessage: "All categories were retrieved successfully",
      categories,
    });
  } catch (error) {
    console.log("readAll category error", error);
    res.status(500).json({
      errorMessage: "Uh Oh! Something went wrong, Please try again later",
    });
  }
};
