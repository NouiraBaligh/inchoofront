import React, { useState } from "react";
import Swal from "sweetalert2";
import { baseURL } from "../config/config";

function Contact() {
  const [formData, setFormData] = useState({
    email: "",
    sujet: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${baseURL}/users/createMsg`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        Swal.fire({
          icon: "success",
          text: "Votre message a été envoyé avec succès !",
          confirmButtonColor: "#ad9b60",
          showConfirmButton: false, // Hides the OK button
          timer: 1700,
        });
        setFormData({ email: "", sujet: "", message: "" }); // Clear the form
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: result.message || "Une erreur s'est produite.",
          confirmButtonColor: "#ad9b60",
        });
      }
    } catch (error) {
      console.error("Error sending message:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Impossible d'envoyer le message. Réessayez plus tard.",
        confirmButtonColor: "#ad9b60",
      });
    }
  };

  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
            Contactez Nous
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
            Vous avez un problème technique ? Vous souhaitez envoyer des
            commentaires sur un produit ? Faites-le-nous savoir.
          </p>
          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                E-mail
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="name@inchoo.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="sujet"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Sujet
              </label>
              <input
                type="text"
                id="sujet"
                value={formData.sujet}
                onChange={handleChange}
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Faites-nous savoir comment nous pouvons vous aider"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Message
              </label>
              <textarea
                id="message"
                required
                rows="6"
                value={formData.message}
                onChange={handleChange}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Laissez un commentaire..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="inline-block rounded-full bg-[#ad9b60] px-8 py-4 text-center font-bold text-white transition cursor-pointer"
            >
              Envoyer
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Contact;
