import React, { useState, useEffect } from "react";
import Product from "./Product";
import { baseURL } from "../config/config";

const AllProducts = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false); // For small device filters
  const [loading, setLoading] = useState(true);

  // Fetch products from API
  const fetchProducts = async () => {
    try {
      setLoading(true); // Start loading
      const response = await fetch(`${baseURL}/products`);
      if (!response.ok) {
        throw new Error("Failed to fetch products.");
      }
      const products = await response.json();

      // Log the products to verify the averageRating field is included

      setData(products);
      setFilteredData(products);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleFilterChange = (category) => {
    const updatedCategories = selectedCategories.includes(category)
      ? selectedCategories.filter((c) => c !== category)
      : [...selectedCategories, category];

    setSelectedCategories(updatedCategories);

    if (updatedCategories.length > 0) {
      setFilteredData(
        data.filter((product) => updatedCategories.includes(product.category))
      );
    } else {
      setFilteredData(data);
    }
  };

  // Sorting logic
  const handleSortChange = (sortOption) => {
    let sortedData = [...filteredData];

    switch (sortOption) {
      case "price-asc":
        sortedData.sort((a, b) => a.price - b.price);
        break;

      case "price-desc":
        sortedData.sort((a, b) => b.price - a.price);
        break;

      case "rating":
        sortedData.sort((a, b) => b.averageRating - a.averageRating);
        console.log("Sorted by Rating:", sortedData); // Log the sorted data
        break;

      case "recent":
        sortedData.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        break;

      default:
        sortedData = [...filteredData];
    }

    setFilteredData(sortedData);
  };

  // Hide the mobile filter if the screen size changes
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileFilterOpen(false); // Close mobile filter for larger screens
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <div className="bg-white">
        <div>
          {/* Mobile Filter Menu */}
          {isMobileFilterOpen && (
            <div className="fixed inset-0 z-40 flex">
              {/* Overlay */}
              <div
                className="fixed inset-0 bg-black/25"
                aria-hidden="true"
                onClick={() => setIsMobileFilterOpen(false)} // Close when clicking outside
              ></div>
              <div className="relative ml-auto flex w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                <div className="flex items-center justify-between px-4">
                  <h2 className="text-lg font-medium text-gray-900">Filtres</h2>
                  <button
                    type="button"
                    className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                    onClick={() => setIsMobileFilterOpen(false)} // Close button
                  >
                    <span className="sr-only">Close menu</span>
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>

                <form className="mt-4 border-t border-gray-200">
                  <h3 className="sr-only"> Nos Catégories</h3>
                  <div className="border-t border-gray-200 px-4 py-6">
                    <h3 className="-mx-2 -my-3 flow-root">
                      <button
                        type="button"
                        className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500"
                        aria-controls="filter-section-mobile-1"
                        aria-expanded="false"
                      >
                        <span className="font-medium text-gray-900">
                          Nos Catégories
                        </span>
                      </button>
                    </h3>
                    <div className="pt-6">
                      <div className="space-y-6">
                        {[
                          "SOINS DE PEAU",
                          "SOINS DE VISAGE",
                          "SOINS CAPILLAIRES",
                          "PARFUMS MAISON",
                          "PARFUMS CHEVEUX ET CORPS",
                          "PACKS",
                          "ACCESOIRES",
                        ].map((category, index) => (
                          <div className="flex items-center" key={index}>
                            <input
                              id={`mobile-filter-${index}`}
                              type="checkbox"
                              value={category}
                              checked={selectedCategories.includes(category)}
                              onChange={() => handleFilterChange(category)}
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                            <label
                              htmlFor={`mobile-filter-${index}`}
                              className="ml-3 text-sm text-gray-500"
                            >
                              {category}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          )}

          {/* Main Content */}
          <main className="mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900"></h1>
              {/* Mobile Filter Button */}
              <button
                type="button"
                className="inline-flex lg:hidden items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50"
                onClick={() => setIsMobileFilterOpen(true)}
              >
                <svg
                  className="mr-2 h-5 w-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 11-2 0V6H5v1a1 1 0 11-2 0V5zm-1 8a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 11-2 0v-1H5v1a1 1 0 11-2 0v-2z"
                    clipRule="evenodd"
                  />
                </svg>
                Filtres
              </button>
            </div>

            {/* Sort Dropdown */}
            <div className="flex justify-end items-center m-4">
              <select
                id="sort"
                onChange={(e) => handleSortChange(e.target.value)}
                class="block py-2.5 px-0 text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
              >
                <option value="rating">Tri par notes moyennes</option>
                <option value="recent">
                  Tri du plus récent au plus ancien
                </option>
                <option value="price-asc">Tri par tarif croissant</option>
                <option value="price-desc">Tri par tarif décroissant</option>
              </select>
            </div>

            <section aria-labelledby="products-heading" className="pb-24 pt-6">
              <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                {/* Always Visible Sidebar for Large Devices */}
                <form className="hidden lg:block">
                  <h3 className="sr-only"> Nos Catégories</h3>
                  <div className="border-b border-gray-200 py-6">
                    <h3 className="-my-3 flow-root">
                      <span className="font-medium text-gray-900">
                        Nos Catégories
                      </span>
                    </h3>
                    <div className="pt-6">
                      <div className="space-y-4">
                        {[
                          "SOINS DE PEAU",
                          "SOINS DE VISAGE",
                          "SOINS CAPILLAIRES",
                          "PARFUMS MAISON",
                          "PARFUMS CHEVEUX ET CORPS",
                          "PACKS",
                          "ACCESOIRES",
                        ].map((category, index) => (
                          <div className="flex items-center" key={index}>
                            <input
                              id={`desktop-filter-${index}`}
                              type="checkbox"
                              value={category}
                              checked={selectedCategories.includes(category)}
                              onChange={() => handleFilterChange(category)}
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                            <label
                              htmlFor={`desktop-filter-${index}`}
                              className="ml-3 text-sm text-gray-600"
                            >
                              {category}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </form>

                {/* Products Section */}
                <div className="lg:col-span-3">
                  {loading ? (
                    <div className="flex justify-center items-center py-10">
                      <div className="flex flex-row gap-2">
                        <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.7s]"></div>
                        <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.3s]"></div>
                        <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.7s]"></div>
                      </div>
                    </div>
                  ) : filteredData.length === 0 ? (
                    // Display a message if no products match the filters
                    <div className="flex items-center justify-center h-full py-10">
                      <p className="text-lg text-gray-500">
                        Aucun produit disponible pour le moment pour les filtres
                        sélectionnés. Revenez dans les prochains jours.
                      </p>
                    </div>
                  ) : (
                    // Render products if available
                    <div className="flex flex-wrap mx-[40px]">
                      {filteredData.map((product) => (
                        <Product key={product.id} product={product} />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
