const Product = require("../models/Product");
const fs = require("fs");

exports.create = async (req, res) => {
  console.log("req.body", req.body);
  console.log("req.file", req.file);
  console.log("req.user", req.user);

  const { filename } = req.file;
  const {
    productName,
    productDescription,
    productPrice,
    productCategory,
    productQuantity,
  } = req.body;

  try {
    let product = new Product();
    product.fileName = filename;
    product.productName = productName;
    product.productDescription = productDescription;
    product.productPrice = productPrice;
    product.productCategory = productCategory;
    product.productQuantity = productQuantity;

    await product.save();
    res.json({
      successMessage: `${productName} was added successfully!`,
      product,
    });
  } catch (error) {
    console.log(error, "ProductController.create Error");
    res.status(500).json({ errorMessage: "Please try again later" });
  }
};

exports.readAll = async (req, res) => {
  try {
    const products = await Product.find({}).populate(
      "productCategory",
      "category"
    );

    res.json({ products });
  } catch (error) {
    console.log(error, "ProductController.readAll Error");
    res.status(500).json({ errorMessage: "Please try again later" });
  }
};

exports.readByCount = async (req, res) => {
  try {
    const products = await Product.find({})
      .populate("productCategory", "category")
      .limit(6);
    res.json({ products });
  } catch (error) {
    console.log(error, "ProductController.readAll Error");
    res.status(500).json({ errorMessage: "Please try again later" });
  }
};

exports.read = async (req, res) => {
  try {
    const productId = req.params.productId;
    const product = await Product.findById(productId);
    res.json(product);
  } catch (error) {
    console.log(error, "ProductController.read Error");
    res.status(500).json({ errorMessage: "Please try again later" });
  }
};

exports.update = async (req, res) => {
  const productId = req.params.productId;

  if (req.file !== undefined) {
    req.body.fileName = req.file.filename;
  }

  const oldProduct = await Product.findByIdAndUpdate(productId, req.body);

  if (req.file !== undefined && req.file.filename !== oldProduct.fileName) {
    fs.unlink(`uploads/${oldProduct.fileName}`, (err) => {
      if (err) throw err;
      console.log("image successfully deleted from fileSystem");
    });
  }

  res.json({
    successMessage: "Product successfully updated",
  });
};

exports.delete = async (req, res) => {
  try {
    const productId = req.params.productId;
    const deletedProduct = await Product.findByIdAndDelete(productId);

    fs.unlink(`uploads/${deletedProduct.fileName}`, (err) => {
      if (err) throw err;
      console.log(
        "image successfully deleted from filesystem",
        deletedProduct.fileName
      );
    });
    res.json(deletedProduct);
  } catch (error) {
    console.log(error, "ProductController.delete Error");
    res.status(500).json({ errorMessage: "Please try again later" });
  }
};
