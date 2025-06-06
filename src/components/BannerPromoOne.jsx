import React from "react";
import { Link } from "react-router-dom";
import {
  FaSprayCan,
  FaFeatherAlt,
  FaSnowflake,
  FaDiceD20,
} from "react-icons/fa";
import { IoDiamondSharp } from "react-icons/io5";

function BannerPromoOne() {
  return (
    <section class="bg-white px-4 py-8 antialiased dark:bg-gray-900 md:py-16">
      <div class="mx-auto  max-w-6xl text-center p-6 dark:bg-gray-900">
        <p class="mb-5 text-center text-4xl  text-[#ad9b60] dark:text-gray-200 sm:text-5xl">
          NOS PRODUITS
        </p>
        <div class="gr mx-auto max-w-3xl items-stretch space-y-4 text-left sm:flex sm:space-y-0 sm:space-x-8 sm:text-center">
          <a
            class="flex w-full items-center rounded-xl border border-black border-opacity-10 px-4 py-6 text-black duration-200 hover:border-opacity-0 hover:no-underline hover:shadow-lg dark:text-white dark:hover:bg-white dark:hover:bg-opacity-10 sm:flex-col sm:hover:shadow-2xl"
            target="_blank"
          >
            <IoDiamondSharp className="mr-4 w-12 sm:mr-0 sm:h-32 sm:w-32 text-[#ad9b60]" />

            <div>
              <div class="font-semibold text-black dark:text-white sm:mt-4 sm:mb-2">
                Luxe{" "}
              </div>
            </div>
          </a>
          <a
            class="flex w-full items-center rounded-xl border border-black border-opacity-10 px-4 py-6 text-black duration-200 hover:border-opacity-0 hover:no-underline hover:shadow-lg dark:text-white dark:hover:bg-white dark:hover:bg-opacity-10 sm:flex-col sm:hover:shadow-2xl"
            target="_blank"
          >
            <FaSnowflake className="mr-4 w-12 sm:mr-0 sm:h-32 sm:w-32 text-[#ad9b60]" />

            <div>
              <div class="font-semibold text-black dark:text-white sm:mt-4 sm:mb-2">
                Fraîche{" "}
              </div>
            </div>
          </a>
          <a
            class="flex w-full items-center rounded-xl border border-black border-opacity-10 px-4 py-6 text-black duration-200 hover:border-opacity-0 hover:no-underline hover:shadow-lg dark:text-white dark:hover:bg-white dark:hover:bg-opacity-10 sm:flex-col sm:hover:shadow-2xl"
            target="_blank"
          >
            <FaSprayCan className="mr-4 w-12 sm:mr-0 sm:h-32 sm:w-32 text-[#ad9b60]" />

            <div>
              <div class="font-semibold text-black dark:text-white sm:mt-4 sm:mb-2">
                Durable{" "}
              </div>
            </div>
          </a>
        </div>
      </div>
      <div class="mx-auto grid max-w-screen-xl rounded-lg  p-4 dark:bg-gray-800 md:p-8 lg:grid-cols-12 lg:gap-8 lg:p-16 xl:gap-16">
        <div class="lg:col-span-5 lg:mt-0">
          <a>
            <img
              class="mb-4 h-56 w-56 dark:hidden sm:h-96 sm:w-96 md:h-full md:w-full"
              src="/logoInchoo.png"
              alt="peripherals"
            />
          </a>
        </div>
        <div class="me-auto place-self-center lg:col-span-7">
          <p class="mb-6 text-gray-500 dark:text-gray-400">
            Inchoo est une marque tunisienne des produits cosmétiques, encens et
            des fragrances de luxes qui réinvente l'art du parfum, en offrant
            des créations uniques pour la maison, la peau et les cheveux. Chaque
            produit est une invitation à l'élégance, fusionnant des senteurs
            envoûtantes avec un raffinement absolu. Içi nous façonnons des
            souvenirs autant que des parfums.
          </p>
          <Link
            to="/aboutUs"
            class="inline-block rounded-full bg-[#ad9b60] px-8 py-4 text-center font-bold text-white transition "
          >
            Voir Plus
          </Link>
        </div>
      </div>
      <section class="text-[#ad9b60] body-font">
        <div class="flex text-[#ad9b60] justify-center mt-10 text-4xl font-regular">
          COUP DE COEUR
        </div>
        <section class="overflow-hidden">
          <div class="max-w-screen-xl 2xl:max-w-screen-3xl mx-auto py-12 lg:py-24 flex flex-col justify-center">
            <div class="flex flex-wrap justify-center gap-4">
              <a>
                <img
                  src="/imgpromo3.jpg"
                  class="w-72 h-72 rounded-xl object-cover transform hover:scale-110 transition duration-300 ease-in-out"
                  alt="Image 1"
                />
              </a>
              <a>
                <img
                  src="/imgco2.PNG"
                  class="w-72 h-72 rounded-xl object-cover transform hover:scale-110 transition duration-300 ease-in-out"
                  alt="Image 2"
                />
              </a>
              <a>
                <img
                  src="/imgpromo1.jpg"
                  class="w-72 h-72 rounded-xl object-cover transform hover:scale-110 transition duration-300 ease-in-out"
                  alt="Image 3"
                />
              </a>
              <a>
                <img
                  src="/imgpromo2.jpg"
                  class="w-72 h-72 rounded-xl object-cover transform hover:scale-110 transition duration-300 ease-in-out"
                  alt="Image 3"
                />
              </a>
            </div>
          </div>
        </section>
      </section>
    </section>
  );
}

export default BannerPromoOne;
