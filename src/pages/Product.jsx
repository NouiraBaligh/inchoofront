import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import StarRatings from "react-star-ratings";
import CartContext from "../../context/CartContext";
import Swal from "sweetalert2";

const Product = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1); // State for quantity
  const [error, setError] = useState(null); // State for errors
  const [showViewCart, setShowViewCart] = useState(false); // State to toggle "Voir le Panier" button
  const { addToCart } = useContext(CartContext);
  const [activeTab, setActiveTab] = useState("description");
  const [rating, setRating] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [review, setReview] = useState("");
  const [success, setSuccess] = useState("");
  const [hoveredRating, setHoveredRating] = useState(""); // Tracks the hovered rating
  const [reviews, setReviews] = useState([]);
  const [showAll, setShowAll] = useState(false); // State to toggle "Show All" reviews
  const [averageRating, setAverageRating] = useState(0); // To hold the average rating

  const handleRatingChange = (star) => {
    setRating(star); // Set rating when a star is clicked
  };

  const handleMouseEnter = (star) => {
    setHoveredRating(star); // Set hovered rating on mouse enter
  };

  const handleMouseLeave = () => {
    setHoveredRating(0); // Reset hovered rating on mouse leave
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validate form data
    if (!name || !email || !review || !rating) {
      Swal.fire({
        title: "Error",
        text: "Tous les champs sont obligatoires.",
        icon: "warning",
        timer: 2000,
        showConfirmButton: false,
      });
      return; // Stop further execution if fields are missing
    }

    const reviewData = {
      productId,
      name,
      email,
      review,
      note: rating,
    };

    try {
      const response = await fetch(
        "http://localhost:8000/api/v1/products/rating",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(reviewData),
        }
      );

      if (response.ok) {
        const savedReview = await response.json();

        // Show success alert
        Swal.fire({
          title: "Success!",
          text: "Votre avis a été soumis avec succès.",
          icon: "success",
          timer: 2000,
          showConfirmButton: false,
        }).then(() => {
          // Optionally reset the form here or handle further actions
          setName("");
          setEmail("");
          setReview("");
          setRating("");
          fetchProductReviews();
        });
      } else {
        const error = await response.json();
        console.error("Error submitting review:", error.message);

        // Show error alert
        Swal.fire({
          title: "Error!",
          text: `Échec de la soumission de l'avis : ${error.message}`,
          icon: "error",
          confirmButtonText: "Try Again",
        });
      }
    } catch (error) {
      console.error("Unexpected error:", error);

      // Show unexpected error alert
      Swal.fire({
        title: "Unexpected Error",
        text: "An unexpected error occurred. Please try again later.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  const fetchProductDetails = async () => {
    try {
      const response = await fetch(
        `http://localhost:8000/api/v1/products/${productId}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch product details.");
      }
      const data = await response.json();
      setProduct(data);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchProductDetails();
  }, [productId]);

  // Fetch reviews of the product
  const fetchProductReviews = async () => {
    try {
      const response = await fetch(
        `http://localhost:8000/api/v1/products/rates/${productId}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch product reviews.");
      }
      const data = await response.json();
      setReviews(data.reviews); // Set the reviews to state
    } catch (error) {
      setError(error.message); // Set error if fetching fails
    }
  };
  const totalReviews = reviews.length;

  // Use useEffect to fetch the reviews when the component mounts or productId changes
  useEffect(() => {
    fetchProductReviews();
  }, [productId]);
  const reviewsToShow = showAll ? reviews : reviews.slice(0, 2);
  const totalNotes = reviews.reduce((acc, review) => acc + review.note, 0);

  const calculateAverageRating = () => {
    if (totalReviews > 0) {
      return (totalNotes / totalReviews).toFixed(1); // Round to 1 decimal place
    }
    return 0;
  };

  useEffect(() => {
    // Update average rating when reviews change
    setAverageRating(calculateAverageRating());
  }, [reviews]); // Recalculate when reviews change

  const handleAddToCart = () => {
    if (!product) return;

    // Validate quantity
    if (quantity <= 0) {
      Swal.fire({
        icon: "error",
        title: "Invalid Quantity",
        text: "Please enter a valid quantity.",
      });
      return;
    }

    const cartItem = {
      id: product._id, // Use _id as id for consistency
      productId: product._id,
      title: product.title,
      price: product.price,
      category: product.category,
      totalPrice: product.price * quantity,
      quantity,
      image: product.img,
    };

    addToCart(cartItem);

    // SweetAlert success message based on quantity
    if (quantity === 1) {
      // For quantity 1
      Swal.fire({
        icon: "success",
        title: "Ajouté au panier",
        text: `${product.title} a été ajouté à votre panier.`,
        timer: 2300,
        showConfirmButton: false,
      });
    } else {
      // For quantity > 1
      Swal.fire({
        icon: "success",
        title: "Ajouté au panier",
        text: `${quantity} ${product.title} ont été ajoutés à votre panier.`,
        timer: 2300,
        showConfirmButton: false,
      });
    }
    setShowViewCart(true);
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div class="font-sans">
      <div class="m-8 p-4 lg:max-w-6xl max-w-2xl max-lg:mx-auto">
        <div class="grid items-start grid-cols-1 lg:grid-cols-2 gap-8 max-lg:gap-16">
          <div class="w-full lg:sticky top-0 text-center">
            <div class="lg:h-[560px]">
              <img
                src={`http://localhost:3000/products_images/${
                  product.img.split("/")[2]
                }`}
                alt="Product"
                class="lg:w-11/12 w-full h-full rounded-md object-cover object-top"
              />
            </div>
          </div>

          <div>
            <div class="flex flex-wrap items-start gap-4">
              <div>
                <h2 class="text-2xl font-bold text-gray-800">
                  {product.title}
                </h2>
                <p class="text-sm text-gray-500 mt-2"> {product.category}</p>
              </div>

              {/* <div class="ml-auto flex flex-wrap gap-4">
                <button
                  type="button"
                  class="px-2.5 py-1.5 bg-pink-100 text-xs text-pink-600 rounded-md flex items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12px"
                    fill="currentColor"
                    class="mr-1"
                    viewBox="0 0 64 64"
                  >
                    <path
                      d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                      data-original="#000000"
                    ></path>
                  </svg>
                  100
                </button>
              </div> */}
            </div>

            <hr class="my-8" />

            <div class="flex flex-wrap gap-4 items-start">
              <div>
                <p class="text-gray-800 text-4xl font-bold">
                  د.ت{product.price}
                </p>
              </div>
              <div className="mt-4 sm:items-center sm:gap-4 sm:flex">
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
                  min="1"
                  className="w-16 text-center border border-gray-300 rounded-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                />
              </div>

              <div class="flex flex-wrap gap-4 ml-auto">
                <button
                  type="button"
                  class="px-2.5 py-1.5 bg-pink-100 text-xs text-pink-600 rounded-md flex items-center"
                >
                  <svg
                    class="w-3 mr-1"
                    fill="currentColor"
                    viewBox="0 0 14 13"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  {averageRating}
                </button>
                <a class="px-2.5 py-1.5 bg-gray-100 text-xs text-gray-800 rounded-md flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-3 mr-1"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                  >
                    <path
                      d="M14.236 21.954h-3.6c-.91 0-1.65-.74-1.65-1.65v-7.201c0-.91.74-1.65 1.65-1.65h3.6a.75.75 0 0 1 .75.75v9.001a.75.75 0 0 1-.75.75zm-3.6-9.001a.15.15 0 0 0-.15.15v7.2a.15.15 0 0 0 .15.151h2.85v-7.501z"
                      data-original="#000000"
                    />
                    <path
                      d="M20.52 21.954h-6.284a.75.75 0 0 1-.75-.75v-9.001c0-.257.132-.495.348-.633.017-.011 1.717-1.118 2.037-3.25.18-1.184 1.118-2.089 2.28-2.201a2.557 2.557 0 0 1 2.17.868c.489.56.71 1.305.609 2.042a9.468 9.468 0 0 1-.678 2.424h.943a2.56 2.56 0 0 1 1.918.862c.483.547.708 1.279.617 2.006l-.675 5.401a2.565 2.565 0 0 1-2.535 2.232zm-5.534-1.5h5.533a1.06 1.06 0 0 0 1.048-.922l.675-5.397a1.046 1.046 0 0 0-1.047-1.182h-2.16a.751.751 0 0 1-.648-1.13 8.147 8.147 0 0 0 1.057-3 1.059 1.059 0 0 0-.254-.852 1.057 1.057 0 0 0-.795-.365c-.577.052-.964.435-1.04.938-.326 2.163-1.71 3.507-2.369 4.036v7.874z"
                      data-original="#000000"
                    />
                    <path
                      d="M4 31.75a.75.75 0 0 1-.612-1.184c1.014-1.428 1.643-2.999 1.869-4.667.032-.241.055-.485.07-.719A14.701 14.701 0 0 1 1.25 15C1.25 6.867 7.867.25 16 .25S30.75 6.867 30.75 15 24.133 29.75 16 29.75a14.57 14.57 0 0 1-5.594-1.101c-2.179 2.045-4.61 2.81-6.281 3.09A.774.774 0 0 1 4 31.75zm12-30C8.694 1.75 2.75 7.694 2.75 15c0 3.52 1.375 6.845 3.872 9.362a.75.75 0 0 1 .217.55c-.01.373-.042.78-.095 1.186A11.715 11.715 0 0 1 5.58 29.83a10.387 10.387 0 0 0 3.898-2.37l.231-.23a.75.75 0 0 1 .84-.153A13.072 13.072 0 0 0 16 28.25c7.306 0 13.25-5.944 13.25-13.25S23.306 1.75 16 1.75z"
                      data-original="#000000"
                    />
                  </svg>
                  {totalReviews} Reviews
                </a>
              </div>
            </div>

            <hr class="my-8" />

            <div class="flex flex-wrap gap-4">
              <button
                type="button"
                onClick={handleAddToCart}
                className="text-white mt-4 sm:mt-0 bg-[#ad9b60] font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-[#ad9b60] dark:hover:bg-primary-700  flex items-center justify-center"
              >
                Ajouter au panier
              </button>

              {showViewCart && (
                <Link
                  className=" mt-4 sm:mt-0 font-medium rounded-lg text-sm px-5 py-2.5 border border-gray-800 bg-transparent hover:bg-gray-50 text-gray-800 flex items-center justify-center"
                  to="/myorders"
                >
                  Voir le Panier
                </Link>
              )}
            </div>
          </div>
        </div>

        <div class="mt-20 max-w-4xl">
          <ul className="flex border-b">
            <li
              className={`text-sm py-3 px-8 font-semibold cursor-pointer transition-all ${
                activeTab === "description"
                  ? "text-gray-800 bg-gray-100 border-b-2 border-gray-800"
                  : "text-gray-500 hover:bg-gray-100"
              }`}
              onClick={() => setActiveTab("description")}
            >
              Description
            </li>
            <li
              className={`text-sm py-3 px-8 font-semibold cursor-pointer transition-all ${
                activeTab === "reviews"
                  ? "text-gray-800 bg-gray-100 border-b-2 border-gray-800"
                  : "text-gray-500 hover:bg-gray-100"
              }`}
              onClick={() => setActiveTab("reviews")}
            >
              Avis
            </li>
          </ul>

          {/* Tab Content */}
          <div className="mt-5">
            {activeTab === "description" && (
              <div>
                <h3 className="text-xl font-bold text-gray-800">
                  Description du produit
                </h3>
                <p className="text-sm text-gray-500 mt-4">
                  {product.description}
                </p>
              </div>
            )}

            {activeTab === "reviews" && (
              <div>
                <h3 className="text-xl font-bold text-gray-800">Avis</h3>
                <section className="bg-white py-2  antialiased dark:bg-gray-900 ">
                  <div className="mt-2 divide-y divide-gray-200 dark:divide-gray-700">
                    <div>
                      {/* Display error if exists */}
                      {reviewsToShow.length === 0 ? (
                        <p>Il n’y a pas encore d’avis.</p>
                      ) : (
                        reviewsToShow.map((review) => (
                          <div
                            key={review._id}
                            className="gap-3 pb-6 sm:flex sm:items-start"
                          >
                            <div className="shrink-0 space-y-2 sm:w-48 md:w-72">
                              <div className="flex items-center gap-0.5">
                                {/* Dynamic Stars */}
                                {[...Array(5)].map((_, i) => (
                                  <svg
                                    key={i}
                                    className={`h-4 w-4 ${
                                      i < review.note
                                        ? "text-yellow-300"
                                        : "text-gray-300"
                                    }`}
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                                  </svg>
                                ))}
                              </div>
                              <div className="space-y-0.5">
                                <p className="text-base font-semibold text-gray-900 dark:text-white">
                                  {review.name}
                                </p>
                                <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                                  {new Date(review.createdAt).toLocaleString()}
                                </p>
                              </div>
                            </div>
                            <div className="mt-4 min-w-0 flex-1 space-y-4 sm:mt-0">
                              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                                {review.review}
                              </p>
                            </div>
                          </div>
                        ))
                      )}
                      {/* Show "Show All" button if there are more than 2 reviews */}
                      {reviews.length > 2 && !showAll && (
                        <button
                          onClick={() => setShowAll(true)}
                          className=" mt-4 sm:mt-0 font-medium rounded-lg text-sm px-5 py-2.5 border border-gray-800 bg-transparent hover:bg-gray-50 text-gray-800 flex items-center justify-center"
                        >
                          Voir plus
                        </button>
                      )}
                      {/* Show "Show Less" button if all reviews are shown */}
                      {reviews.length > 2 && showAll && (
                        <button
                          onClick={() => setShowAll(false)}
                          className=" mt-4 sm:mt-0 font-medium rounded-lg text-sm px-5 py-2.5 border border-gray-800 bg-transparent hover:bg-gray-50 text-gray-800 flex items-center justify-center"
                        >
                          Voir moins{" "}
                        </button>
                      )}
                    </div>
                  </div>
                  <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
                    <div class="p-4 mx-auto bg-white rounded-lg shadow-md max-w-4xl sm:p-6 grid grid-cols-1 lg:grid-cols-6 gap-6">
                      <div class="lg:col-span-4 col-span-1">
                        <form onSubmit={handleSubmit} className="space-y-4">
                          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                            Soumettre votre avis
                          </h2>

                          {/* Rating */}

                          <div className="flex items-center">
                            <label className="text-gray-600">
                              Votre note *
                            </label>
                            {[1, 2, 3, 4, 5].map(
                              (
                                star // Map from 1 to 5 for left to right
                              ) => (
                                <svg
                                  key={star}
                                  className={`w-4 h-4 ms-1 cursor-pointer 
            ${
              hoveredRating >= star || rating >= star
                ? "text-yellow-400"
                : "text-gray-300 dark:text-gray-500"
            }`}
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="currentColor"
                                  viewBox="0 0 22 20"
                                  onMouseEnter={() => handleMouseEnter(star)} // On hover, change the hovered rating
                                  onMouseLeave={handleMouseLeave} // On mouse leave, reset the hovered rating
                                  onClick={() => handleRatingChange(star)} // Set the rating when clicked
                                >
                                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                              )
                            )}
                          </div>
                          {/* Review */}
                          <div>
                            <label className="text-gray-600">
                              Votre avis *
                            </label>
                            <textarea
                              className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                              value={review}
                              onChange={(e) => setReview(e.target.value)}
                            ></textarea>
                          </div>

                          <div>
                            <label className="text-gray-600">Nom *</label>
                            <input
                              type="text"
                              className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                            />
                          </div>

                          {/* Email */}
                          <div>
                            <label className="text-gray-600">E-mail *</label>
                            <input
                              type="email"
                              className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                            />
                          </div>

                          {/* Error/Success Messages */}
                          {error && <p className="text-red-500">{error}</p>}
                          {success && (
                            <p className="text-green-500">{success}</p>
                          )}

                          {/* Submit Button */}
                          <div className="text-right py-4">
                            <button
                              type="submit"
                              className="text-white bg-[#ad9b60] hover:bg-[#ad9b60] focus:ring-4 focus:outline-none focus:ring-[#d2c084] font-semibold rounded-lg text-sm px-5 py-3"
                            >
                              Soumettre
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            )}
          </div>

          <ul class="space-y-3 list-disc mt-6 pl-4 text-sm text-gray-500"></ul>
        </div>
      </div>
    </div>
  );
};

export default Product;
