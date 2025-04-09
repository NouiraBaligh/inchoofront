import React, { useContext, useState } from "react";
import CartContext from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { baseURL } from "../config/config";

function Paiement() {
  const { cart, promoCode, discountPercentage, clearCart } =
    useContext(CartContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    prename: "",
    name: "",
    city: "Ariana",
    adresse: "",
    phone: "",
    secondPhone: "",
    email: "",
    notes: "",
  });
  const [formErrors, setFormErrors] = useState({}); // Track errors

  const calculateSubtotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };
  const shippingCost = calculateSubtotal() >= 99 ? 0 : 7.0; // Set shipping cost to 0 if subtotal is > 100  const discountedTotal = calculateSubtotal() * (1 - discountPercentage / 100);
  const discountedTotal = calculateSubtotal() * (1 - discountPercentage / 100);
  const totalCost = discountedTotal + shippingCost;

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
    setFormErrors({ ...formErrors, [id]: "" }); // Clear error on input change
  };

  const validateForm = () => {
    const errors = {};

    // Validate first name
    if (!formData.prename.trim()) {
      errors.prename = "Prénom est requis.";
    }

    // Validate last name
    if (!formData.name.trim()) {
      errors.name = "Nom est requis.";
    }

    // Validate address
    if (!formData.adresse.trim()) {
      errors.adresse = "Adresse est requise.";
    }

    // Validate phone
    if (!formData.phone.trim()) {
      errors.phone = "Numéro de téléphone est requis.";
    } else if (!/^\d+$/.test(formData.phone)) {
      errors.phone = "Numéro de téléphone invalide.";
    } else if (formData.phone.length !== 8) {
      errors.phone =
        "Le numéro de téléphone doit contenir exactement 8 chiffres.";
    }

    // Validate second phone if it exists
    if (formData.secondPhone.trim()) {
      if (!/^\d+$/.test(formData.secondPhone)) {
        errors.secondPhone = "Numéro de téléphone secondaire invalide.";
      } else if (formData.secondPhone.length !== 8) {
        errors.secondPhone =
          "Le numéro secondaire doit contenir exactement 8 chiffres.";
      }
    }
    return errors;
  };

  const handleCheckout = async (e) => {
    e.preventDefault();

    // Check if the cart is empty
    if (cart.length === 0) {
      Swal.fire({
        title: "Le panier est vide",
        text: "Veuillez ajouter des produits à votre panier avant de passer à commander.",
        icon: "warning",
        timer: 2000,
        showConfirmButton: false,
      });
      return; // Stop further execution if the cart is empty
    }

    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return; // Stop submission if there are errors
    }

    const orderData = {
      ...formData,
      products: cart.map((item) => ({
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
      })),
      totalPrice: totalCost,
    };

    try {
      const response = await fetch(`${baseURL}/orders`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });

      if (response.ok) {
        const savedOrder = await response.json();
        // Show success alert
        Swal.fire({
          title: "Success!",
          text: "Votre commande a été passée avec succès.",
          icon: "success",
          timer: 2000,
          showConfirmButton: false,
        }).then(() => {
          clearCart();
          navigate("/");
        });
      } else {
        const error = await response.json();
        console.error("Error creating order:", error.message);

        // Show error alert
        Swal.fire({
          title: "Error!",
          text: `Failed to create order: ${error.message}`,
          icon: "error",
          confirmButtonText: "Try Again",
        });
      }
    } catch (err) {
      console.error("Error:", err);

      // Show unexpected error alert
      Swal.fire({
        title: "Unexpected Error",
        text: "An unexpected error occurred. Please try again later.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  const handleRetour = () => {
    navigate("/myorders");
  };
  return (
    <div>
      <section class="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
        <form action="#" class="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <ol class="items-center flex w-full max-w-2xl text-center text-sm font-medium text-gray-500 dark:text-gray-400 sm:text-base">
            <li class="after:border-1 flex items-center text-[#ad9b60] after:mx-6 after:hidden after:h-1 after:w-full after:border-b after:border-gray-200 dark:text-[#ad9b60] dark:after:border-gray-700 sm:after:inline-block sm:after:content-[''] md:w-full xl:after:mx-10">
              <span class="flex items-center after:mx-2 after:text-gray-200 after:content-['/'] dark:after:text-gray-500 sm:after:hidden">
                <svg
                  class="me-2 h-4 w-4 sm:h-5 sm:w-5"
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

            <li class="after:border-1 flex items-center text-[#ad9b60] after:mx-6 after:hidden after:h-1 after:w-full after:border-b after:border-gray-200 dark:text-[#ad9b60] dark:after:border-gray-700 sm:after:inline-block sm:after:content-[''] md:w-full xl:after:mx-10">
              <span class="flex items-center after:mx-2 after:text-gray-200 after:content-['/'] dark:after:text-gray-500 sm:after:hidden">
                <svg
                  class="me-2 h-4 w-4 sm:h-5 sm:w-5"
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

            <li class="flex shrink-0 items-center">
              <svg
                class="me-2 h-4 w-4 sm:h-5 sm:w-5"
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

          <div class="mt-6 sm:mt-8 lg:flex lg:items-start lg:gap-12 xl:gap-16">
            <div class="min-w-0 flex-1 space-y-8">
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Détails de facturation
                </h2>
                <form onSubmit={handleCheckout}>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="prename"
                        className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Prénom *
                      </label>
                      <input
                        type="text"
                        id="prename"
                        className="block w-full rounded-lg border-2 border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:outline-none focus:border-[#ad9b60] dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400"
                        placeholder="Foulen"
                        required
                        value={formData.prename}
                        onChange={handleInputChange}
                      />
                      {formErrors.prename && (
                        <p className="mt-1 text-sm text-red-500">
                          {formErrors.prename}
                        </p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Nom *
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="block w-full rounded-lg border-2 border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:outline-none focus:border-[#ad9b60] dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400"
                        placeholder="ben foulen"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                      />
                      {formErrors.name && (
                        <p className="mt-1 text-sm text-red-500">
                          {formErrors.name}
                        </p>
                      )}
                    </div>
                    {/* Other form fields */}
                    <div>
                      <label
                        htmlFor="city"
                        className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Gouvernorat *
                      </label>
                      <select
                        id="city"
                        className="block w-full rounded-lg border-2 border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:outline-none focus:border-[#ad9b60] dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400"
                        value={formData.city}
                        onChange={handleInputChange}
                      >
                        <option value="Ariana">Ariana</option>
                        <option value="Béja">Béja</option>
                        <option value="Ben Arous">Ben Arous</option>
                        <option value="Bizerte">Bizerte</option>
                        <option value="Gabès">Gabès</option>
                        <option value="Gafsa">Gafsa</option>
                        <option value="Jendouba">Jendouba</option>
                        <option value="Kairouan">Kairouan</option>
                        <option value="Kasserine">Kasserine</option>
                        <option value="Kébili">Kébili</option>
                        <option value="Le Kef">Le Kef</option>
                        <option value="Mahdia">Mahdia</option>
                        <option value="La Manouba">La Manouba</option>
                        <option value="Médenine">Médenine</option>
                        <option value="Monastir">Monastir</option>
                        <option value="Nabeul">Nabeul</option>
                        <option value="Sfax">Sfax</option>
                        <option value="Sidi Bouzid">Sidi Bouzid</option>
                        <option value="Siliana">Siliana</option>
                        <option value="Sousse">Sousse</option>
                        <option value="Tataouine">Tataouine</option>
                        <option value="Tozeur">Tozeur</option>
                        <option value="Tunis">Tunis</option>
                        <option value="Zaghouan">Zaghouan</option>
                        {/* Other cities */}
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="adresse"
                        className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Adresse *
                      </label>
                      <input
                        type="text"
                        id="adresse"
                        className="block w-full rounded-lg border-2 border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:outline-none focus:border-[#ad9b60] dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400"
                        placeholder="Adresse"
                        required
                        value={formData.adresse}
                        onChange={handleInputChange}
                      />
                      {formErrors.adresse && (
                        <p className="mt-1 text-sm text-red-500">
                          {formErrors.adresse}
                        </p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Téléphone *
                      </label>
                      <input
                        type="text"
                        id="phone"
                        className="block w-full rounded-lg border-2 border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:outline-none focus:border-[#ad9b60] dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400"
                        placeholder="+216 52 123 123"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                      {formErrors.phone && (
                        <p className="mt-1 text-sm text-red-500">
                          {formErrors.phone}
                        </p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="secondPhone"
                        className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Téléphone 2 (facultatif)
                      </label>
                      <input
                        type="text"
                        id="secondPhone"
                        className="block w-full rounded-lg border-2 border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:outline-none focus:border-[#ad9b60] dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400"
                        placeholder="+216 52 123 123"
                        value={formData.secondPhone}
                        onChange={handleInputChange}
                      />
                      {formErrors.secondPhone && (
                        <p className="mt-1 text-sm text-red-500">
                          {formErrors.secondPhone}
                        </p>
                      )}
                    </div>
                    <div class="relative z-0 w-full mb-5 group">
                      <input
                        type="text"
                        name="notes"
                        id="notes"
                        value={formData.notes}
                        onChange={handleInputChange}
                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#ad9b60] focus:outline-none focus:ring-0 focus:border-[#ad9b60] peer"
                        placeholder=" "
                        required
                      />
                      <label
                        for="notes"
                        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#ad9b60] peer-focus:dark:text-[#ad9b60] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        Notes de commande (facultatif)
                      </label>
                    </div>
                  </div>
                </form>
              </div>

              <div class="space-y-4">
                <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
                  <div class="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800">
                    <div class="flex items-start">
                      <div class="ms-4 text-sm">
                        <label
                          for="credit-card"
                          class="font-medium leading-none text-gray-900 dark:text-white"
                        >
                          {" "}
                          Paiement à la livraison{" "}
                        </label>
                        <p
                          id="credit-card-text"
                          class="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400"
                        >
                          Payer comptant à la livraison.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="mt-6 w-full space-y-6 sm:mt-8 lg:mt-0 lg:max-w-xs xl:max-w-md">
              <div class="flow-root">
                <div class="-my-3 divide-y divide-gray-200 dark:divide-gray-800">
                  <h2 class="text-xl mb-3 font-semibold text-gray-900 dark:text-white">
                    Votre commande{" "}
                  </h2>
                  <dl class="flex items-center justify-between gap-4 py-3">
                    <dt class="text-base font-normal text-gray-500 dark:text-gray-400">
                      Produit
                    </dt>
                    <dd class="text-base font-medium text-gray-900 dark:text-white">
                      Sous-total
                    </dd>
                  </dl>

                  {/* <dd class="text-base font-medium text-gray-900 dark:text-white">
                      د.ت{calculateSubtotal().toFixed(2)}
                    </dd> */}
                  {cart.map((item, index) => (
                    <dl
                      key={index}
                      className="flex items-center justify-between gap-4 py-3"
                    >
                      <dt class="text-base font-normal text-gray-500 dark:text-gray-400">
                        {item.title} {/* Display product name */}
                        <span className="text-gray-500 dark:text-gray-400">
                          {" "}
                          x {item.quantity}
                        </span>{" "}
                      </dt>
                      <dd class="text-base font-medium text-gray-900 dark:text-white">
                        د.ت{(item.price * item.quantity).toFixed(2)}{" "}
                        {/* Display total price for each product */}
                      </dd>
                    </dl>
                  ))}
                  {discountPercentage > 0 && (
                    <dl class="flex items-center justify-between gap-4 py-3 text-green-500">
                      <dt class="text-base font-normal">
                        Réduction ({discountPercentage}%)
                      </dt>
                      <dd class="text-base font-medium  ">
                        <span className="ml-auto font-bold">
                          -
                          {(
                            (calculateSubtotal() * discountPercentage) /
                            100
                          ).toFixed(2)}{" "}
                          د.ت
                        </span>{" "}
                      </dd>
                    </dl>
                  )}

                  <dl class="flex items-center justify-between gap-4 py-3">
                    <dt class="text-base font-normal text-gray-500 dark:text-gray-400">
                      Tarif de Livraison
                    </dt>
                    <dd class="text-base font-medium text-gray-900 dark:text-white">
                      د.ت{shippingCost.toFixed(2)}
                    </dd>
                  </dl>

                  <dl class="flex items-center justify-between gap-4 py-3">
                    <dt class="text-base font-bold text-gray-900 dark:text-white">
                      Total
                    </dt>
                    <dd class="text-base font-bold text-gray-900 dark:text-white">
                      د.ت{totalCost.toFixed(2)}
                    </dd>
                  </dl>
                </div>
              </div>

              <div class="flex w-max gap-4">
                <button
                  type="submit"
                  onClick={handleCheckout}
                  class="inline-flex rounded-lg bg-[#ad9b60] px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-[#ad9b60] hover:bg-[#ad9b60] hover:ring-[#ad9b60]"
                >
                  Commander
                </button>
                <button
                  type="button"
                  onClick={handleRetour}
                  class="inline-flex rounded-lg bg-[#000000] px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-[#000000] hover:bg-[#000000] hover:ring-[#000000]"
                >
                  Retour
                </button>
              </div>
              <p class="text-sm font-normal text-gray-500 dark:text-gray-400">
                Vos données personnelles seront utilisées pour traiter votre
                commande.{" "}
              </p>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
}

export default Paiement;
