const BASE_URL = 'https://fakestoreapi.com';

export const fetchCategories = async () => {
  const res = await fetch(`${BASE_URL}/products/categories`);
  return res.json();
};

export const fetchAllProducts = async () => {
  const res = await fetch(`${BASE_URL}/products`);
  return res.json();
};

export const fetchProductsByCategory = async (category) => {
  const res = await fetch(`${BASE_URL}/products/category/${category}`);
  return res.json();
};