import React, { useState, useEffect } from "react";
import Product from "./Product";

// Helper function to manage the button styles based on selected filter
const getButtonClass = (currentFilter, buttonFilter) => {
  return currentFilter === buttonFilter
    ? "inline-block rounded-full bg-[#ad9b60] px-8 py-4 text-center font-bold text-white transition cursor-pointer"
    : "inline-block rounded-full bg-white text-[#ad9b60] px-8 py-4 text-center font-bold transition cursor-pointer";
};

const Products = () => {
  const [data, setData] = useState([]); // State to store all products
  const [filteredData, setFilteredData] = useState([]); // State to store filtered products
  const [filter, setFilter] = useState("nouveaux"); // Default filter to "nouveaux" (New Arrivals)
  const [loading, setLoading] = useState(true);

  // Fetch products from API
  const fetchProducts = async () => {
    try {
      setLoading(true); // Start loading
      const response = await fetch("http://localhost:8000/api/v1/products");
      const products = await response.json();
      setData(products); // Store all products
      handleFilter("nouveaux", products); // Set default filter to "nouveaux" after fetching
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  // Apply filter to products
  const handleFilter = (filter, products = data) => {
    setFilter(filter);
    if (filter === "nouveaux") {
      // Show the 4 most recent products (assuming latest products are last in the array)
      setFilteredData(products.slice(-4));
    } else if (filter === "packs") {
      // Filter products by "packs" category
      setFilteredData(
        products.filter((product) => product.category === "Packs")
      );
    } else {
      // Show all products
      setFilteredData(products);
    }
  };

  // Fetch products on component mount
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <div className="flex justify-center items-center ">
        <ul className="flex gap-3 my-8 md:my-12 flex-wrap justify-center items-center px-4 md:px-8 max-w-sm text-sm">
          <li
            className={getButtonClass(filter, "nouveaux")}
            onClick={() => handleFilter("nouveaux")}
          >
            <a>NOUVEAUX</a>
          </li>
          <li
            className={getButtonClass(filter, "packs")}
            onClick={() => handleFilter("packs")}
          >
            <a>PACKS</a>
          </li>
        </ul>
      </div>
      <div className="flex flex-wrap mx-[40px]">
        {loading ? (
          <div className="flex justify-center items-center py-10">
            <div className="flex flex-row gap-2">
              <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.7s]"></div>
              <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.3s]"></div>
              <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.7s]"></div>
            </div>
          </div>
        ) : (
          filteredData.map((product) => (
            <Product key={product._id} product={product} />
          ))
        )}
      </div>
    </div>
  );
};

export default Products;
