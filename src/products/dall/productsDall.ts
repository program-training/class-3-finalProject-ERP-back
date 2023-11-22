import { ProductModel } from "../../configuration/userSchema";
import { productUpdate } from "../../configuration/TypeUser";
import { Product } from "../../configuration/TypeUser";


export const getProductFromDB = async (productID: string) => {
  try {
    const product = await ProductModel.findById(productID);
    return product;
  } catch (err) {
    throw err;
  }
};




export const getProductDall = async () => {
  try {
    const product = await ProductModel.find({})
    return product
  } catch (err) {
    throw err
  }
};


export const getByQuery = async (searchTerm:string) => {
  try {
    const regex = new RegExp(searchTerm, 'i');
    const result = await ProductModel.find({
      $or: [
        { name: regex }, 
        { description: regex },
        { category: regex }  
      ]
    });
    if(!result || result.length === 0) {
      throw new Error("not found results")
    }
    return result;
  } catch (error) {
    throw error; 
  }
}


export const deleteDall = async (id: string) => {
  try {
    const product = await ProductModel.findByIdAndDelete(id)
    return product
  } catch (err) {
    throw err
  }
};

export const newProductsDall = async (product: Product) => {
  const newUser = new ProductModel(product)
  try {
    const newProduct = await newUser.save()
    return newProduct
  } catch (err) {
    throw err
  }
};


export const editProductDall = async (product:Product, id: string) => {
  try {
    const newProduct = await ProductModel.findByIdAndUpdate(id, product , { new: true })
    return newProduct
  } catch (err) {
    throw err
  }
};

/// categories

export const getCategoryDall = async (categoryName) => {
  try {
    const product = await ProductModel.find({})
    return product
  } catch (err) {
    throw err
  }
};