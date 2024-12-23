import React, { useContext, useState } from "react";
import CartContext from "../../context/CartContext";
import { useNavigate } from "react-router-dom"; // If using React Router v6
import { baseURL, URLImg } from "../config/config";

const Order = () => {
  const {
    cart,
    applyPromoCodeContext,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    discountPercentage,
  } = useContext(CartContext); // Import functions from context
  const navigate = useNavigate(); // Hook to navigate to different routes

  const [promoCode, setPromoCode] = useState("");
  const [promoError, setPromoError] = useState(null);

  const calculateSubtotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const applyPromoCode = async () => {
    try {
      const response = await fetch(`${baseURL}/promocode/apply`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: promoCode,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        // Apply the promo code and discount to the context
        applyPromoCodeContext(promoCode, data.promoCode.pourcentage); // Apply to context
        setPromoError(null); // Clear any error
      } else {
        setPromoError(data.message || "Saisir un code de réduction valide .");
        applyPromoCodeContext(promoCode, 0); // Reset discount in context
      }
    } catch (error) {
      setPromoError("An error occurred while applying the promo code.");
      applyPromoCodeContext(promoCode, 0); // Reset discount in context
    }
  };

  const shippingCost = calculateSubtotal() >= 99 ? 0 : 7.0; // Set shipping cost to 0 if subtotal is > 100  const discountedTotal = calculateSubtotal() * (1 - discountPercentage / 100);
  const discountedTotal = calculateSubtotal() * (1 - discountPercentage / 100);
  const totalCost = discountedTotal + shippingCost;

  const handleBackToProducts = () => {
    navigate("/products"); // Navigate to the products page
  };

  const handleCheckout = () => {
    navigate("/paiement"); // Navigate to the payment page
  };

  return (
    <section class="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
      <div className="font-sans">
        <div className="grid lg:grid-cols-3 gap-10 p-4">
          {/* Products List */}
          <div className="lg:col-span-2 bg-white divide-y">
            {cart.length === 0 ? (
              <div className="text-center text-xl font-bold text-gray-800">
                <p>Votre panier est actuellement vide.</p>
                <button
                  onClick={handleBackToProducts}
                  className="mt-4 text-sm px-5 py-2.5 bg-[#ad9b60] hover:bg-[#ad9b60] text-white rounded-md"
                >
                  Retour aux produits
                </button>
              </div>
            ) : (
              <>
                {/* Render breadcrumb only if there are items in the cart */}
                <div className="flex justify-center">
                  <ol className="mb-4 items-center flex w-full max-w-2xl text-center text-sm font-medium text-gray-500 dark:text-gray-400 sm:text-base">
                    <li className="after:border-1 flex items-center text-[#ad9b60] after:mx-6 after:hidden after:h-1 after:w-full after:border-b after:border-gray-200 dark:text-[#ad9b60] dark:after:border-gray-700 sm:after:inline-block sm:after:content-[''] md:w-full xl:after:mx-10">
                      <span className="flex items-center after:mx-2 after:text-gray-200 after:content-['/'] dark:after:text-gray-500 sm:after:hidden">
                        <svg
                          className="me-2 h-4 w-4 sm:h-5 sm:w-5"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                          />
                        </svg>
                        Panier
                      </span>
                    </li>

                    <li className="after:border-1 flex items-center after:mx-6 after:hidden after:h-1 after:w-full after:border-b after:border-gray-200 dark:text-[#ad9b60] dark:after:border-gray-700 sm:after:inline-block sm:after:content-[''] md:w-full xl:after:mx-10">
                      <span className="flex items-center after:mx-2 after:text-gray-200 after:content-['/'] dark:after:text-gray-500 sm:after:hidden">
                        <svg
                          className="me-2 h-4 w-4 sm:h-5 sm:w-5"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                          />
                        </svg>
                        Validation
                      </span>
                    </li>

                    <li className="flex shrink-0 items-center">
                      <svg
                        className="me-2 h-4 w-4 sm:h-5 sm:w-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                      </svg>
                      Commande
                    </li>
                  </ol>
                </div>

                {/* Render the cart items */}
                {cart.map((item, index) => (
                  <div
                    key={item.id}
                    className={`flex items-start max-sm:flex-col gap-4 py-4 ${
                      index === 0 ? "text-[#ad9b60]" : ""
                    }`}
                  >
                    <div className="w-48 h-48 sm:w-36 sm:h-36 flex-shrink-0">
                      <img
                        src={`${URLImg}/products_images/${
                          item.image.split("/")[2]
                        }`}
                        alt={item.name}
                        className="w-full h-full object-cover rounded-md"
                      />
                    </div>

                    <div className="flex items-start gap-4 w-full">
                      <div>
                        <h3 className="text-lg font-bold text-gray-800 mb-1">
                          {item.title}
                        </h3>
                        <div className="space-y-1">
                          <h6 className="text-sm text-gray-800">
                            Catégorie:{" "}
                            <strong className="ml-2">{item.category}</strong>
                          </h6>
                        </div>
                        <div className="mt-4 flex flex-wrap gap-4">
                          <button
                            type="button"
                            onClick={() => removeFromCart(item.id)} // Call removeFromCart
                            className="font-semibold text-red-500 text-sm flex items-center gap-2 shrink-0"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-4 fill-current inline"
                              viewBox="0 0 24 24"
                            >
                              <path d="M19 7a1 1 0 0 0-1 1v11.191A1.92..." />
                            </svg>
                            Remove
                          </button>
                        </div>
                      </div>

                      <div className="ml-auto text-right">
                        <div className="flex items-center justify-end gap-3">
                          {/* Decrease Quantity Button */}
                          <button
                            type="button"
                            onClick={() => decreaseQuantity(item.id)} // Decrease quantity
                            className="flex items-center justify-center w-8 h-8 bg-[#ad9b60] outline-none rounded-full"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-4 h-4"
                              viewBox="0 0 24 24"
                            >
                              <path d="M19 12H5V11H19V12Z" fill="white" />{" "}
                              {/* Minus icon */}
                            </svg>
                          </button>
                          <span className="font-bold text-sm leading-[18px]">
                            {item.quantity}
                          </span>
                          {/* Increase Quantity Button */}
                          <button
                            type="button"
                            onClick={() => increaseQuantity(item.id)} // Increase quantity
                            className="flex items-center justify-center w-8 h-8 bg-[#ad9b60] outline-none rounded-full"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-4 h-4"
                              viewBox="0 0 24 24"
                            >
                              <path
                                d="M12 5V19H13V5H12ZM5 12H19V11H5V12Z"
                                fill="white"
                              />{" "}
                              {/* Plus icon */}
                            </svg>
                          </button>
                        </div>

                        <div className="mt-6">
                          <h4 className="text-lg font-bold text-gray-800">
                            د.ت{item.price * item.quantity}
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>

          {/* Order Summary (Only show if cart is not empty) */}
          {cart.length > 0 && (
            <div className="shadow-md p-6 lg:sticky lg:top-0 h-max">
              <h3 className="text-lg font-bold text-gray-800 border-b pb-4">
                Total panier
              </h3>

              <ul className="text-gray-800 divide-y mt-4">
                <li className="flex flex-wrap gap-4 text-sm py-3">
                  Sous-total{" "}
                  <span className="ml-auto font-bold">
                    د.ت{calculateSubtotal().toFixed(2)}
                  </span>
                </li>
                {discountPercentage > 0 && (
                  <li className="flex flex-wrap gap-4 text-sm py-3 text-green-500">
                    Réduction ({discountPercentage}%)
                    <span className="ml-auto font-bold">
                      -
                      {(
                        (calculateSubtotal() * discountPercentage) /
                        100
                      ).toFixed(2)}{" "}
                      د.ت
                    </span>
                  </li>
                )}
                <li className="flex flex-wrap gap-4 text-sm py-3">
                  Tarif de Livraison{" "}
                  <span className="ml-auto font-bold">
                    د.ت{shippingCost.toFixed(2)}
                  </span>
                </li>
                <li className="flex flex-wrap gap-4 text-sm py-3 font-bold">
                  Total{" "}
                  <span className="ml-auto">د.ت{totalCost.toFixed(2)}</span>
                </li>
              </ul>

              <button
                type="button"
                onClick={handleCheckout}
                className="mt-4 text-sm px-5 py-2.5 w-full bg-[#ad9b60] hover:bg-[#ad9b60] text-white rounded-md"
              >
                Valider la commande
              </button>

              <div className="mt-8">
                <h3 className="text-lg font-bold text-gray-800 mb-4">
                  Appliquer un code promo
                </h3>

                <div className="flex border border-[#ad9b60] overflow-hidden max-w-md rounded-md">
                  <input
                    type="text"
                    placeholder="Code promo"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    className="w-full outline-none bg-white text-gray-600 text-sm px-4 py-2.5"
                  />

                  <button
                    type="button"
                    onClick={applyPromoCode}
                    className="flex items-center justify-center bg-[#ad9b60] hover:bg-[#ad9b60] px-5 text-sm text-white"
                  >
                    Appliquer
                  </button>
                </div>
                {promoError && (
                  <p className="text-red-500 text-sm mt-2">{promoError}</p>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Order;
