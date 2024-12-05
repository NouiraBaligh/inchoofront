import React from "react";

function AboutUs() {
  return (
    <div>
      <div class="relative w-full h-[320px]" id="home">
        <div class="absolute inset-0 opacity-70">
          <img
            src="/imgban12.webp"
            alt="Background Image"
            class="object-cover object-center w-full h-full"
          />
        </div>
        <div class="absolute inset-9 flex flex-col md:flex-row items-center justify-between">
          <div class="md:w-1/2 mb-4 md:mb-0">
            <h1 class="text-grey-700 font-medium text-4xl md:text-5xl leading-tight mb-2">
              Inchoo
            </h1>
            <p class="font-regular text-xl mb-8 mt-4">
              Offrez à votre corps ce qu'il mérite.
            </p>
            <a
              href="#contactUs"
              class="px-6 py-3 bg-[#c8a876] text-white font-medium rounded-full hover:bg-[#c09858]  transition duration-200"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>

      <section class="py-10" id="services">
        <div class="container mx-auto px-4">
          <h2 class="text-3xl font-bold text-gray-800 mb-8 text-center">
            Nos services
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="/imgban12.webp"
                alt="wheat flour grinding"
                class="w-full h-64 object-cover"
              />
              <div class="p-6 text-center">
                <h3 class="text-xl font-medium text-gray-800 mb-2">Test1</h3>
                <p class="text-gray-700 text-base">test1 </p>
              </div>
            </div>
            <div class="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="/imgban9.jpg"
                alt="Coffee"
                class="w-full h-64 object-cover"
              />
              <div class="p-6 text-center">
                <h3 class="text-xl font-medium text-gray-800 mb-2">test2</h3>
                <p class="text-gray-700 text-base">Test2</p>
              </div>
            </div>
            <div class="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="/imgban3.jpg"
                alt="Coffee"
                class="w-full h-64 object-cover"
              />
              <div class="p-6 text-center">
                <h3 class="text-xl font-medium text-gray-800 mb-2">Test3</h3>
                <p class="text-gray-700 text-base">
                  Test3
                  {/* <details>
                    <summary>Read More</summary>
                    <p>
                      Our jowar flour is also a good source of protein and
                      fiber, making it a healthy choice for your family.
                    </p>
                  </details> */}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="bg-gray-100" id="aboutus">
        <div class="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div class="max-w-lg">
              <h2 class="text-3xl font-bold text-gray-800 mb-8 text-center">
                À propos de nous
              </h2>
              <p class="mt-4 text-gray-600 text-lg">Inchoo</p>
            </div>
            <div class="mt-12 md:mt-0">
              <img
                src="/imgban4.jpg"
                alt="About Us Image"
                class="object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      <section class="text-[#ad9b60] body-font">
        <div class="flex text-[#ad9b60] justify-center mt-10 text-4xl font-regular">
          Pourquoi nous choisir ?
        </div>
        <div class="container px-5 py-12 mx-auto">
          <div class="flex flex-wrap text-center justify-center">
            <div class="p-4 md:w-1/4 sm:w-1/2">
              <div class="px-4 py-6 transform transition duration-500 hover:scale-110">
                <div class="flex justify-center">
                  <img src="/icon1-3.png" class="w-32 mb-3" />
                </div>
                <h2 class="title-font font-regular text-2xl text-[#ad9b60]">
                  CONSEILS PERSONNALISES SELON VOTRE BESOIN{" "}
                </h2>
              </div>
            </div>

            <div class="p-4 md:w-1/4 sm:w-1/2">
              <div class="px-4 py-6 transform transition duration-500 hover:scale-110">
                <div class="flex justify-center">
                  <img src="/icon4.png" class="w-32 mb-3" />
                </div>
                <h2 class="title-font font-regular text-2xl text-[#ad9b60]">
                  PAIEMENT à LA LIVRAISON
                </h2>
              </div>
            </div>

            <div class="p-4 md:w-1/4 sm:w-1/2">
              <div class="px-4 py-6 transform transition duration-500 hover:scale-110">
                <div class="flex justify-center">
                  <img src="/icon3-1-1.png" class="w-32 mb-3" />
                </div>
                <h2 class="title-font font-regular text-2xl text-[#ad9b60]">
                  LIVRAISON EFFECTUE DANS UN DELAI DE 48H
                </h2>
              </div>
            </div>

            <div class="p-4 md:w-1/4 sm:w-1/2">
              <div class="px-4 py-6 transform transition duration-500 hover:scale-110">
                <div class="flex justify-center">
                  <img src="/icon2-1-1.png" class="w-32 mb-3" />
                </div>
                <h2 class="title-font font-regular text-2xl text-[#ad9b60]">
                  LIVRAISON GRATUITE à PARTIR DE 100DT D'ACHAT
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="text-gray-700 body-font" id="gallery">
        <div class="flex justify-center text-3xl font-bold text-gray-800 text-center py-10">
          Gallerie
        </div>

        <div class="grid grid-cols-1 place-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
          <div class="group relative">
            <img
              src="/imgco1.PNG"
              alt="Image 1"
              class="aspect-[2/3] h-80 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
            />
          </div>

          <div class="group relative">
            <img
              src="/imgco2.PNG"
              alt="Image 1"
              class="aspect-[2/3] h-80 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
            />
          </div>

          <div class="group relative">
            <img
              src="/imgco3.PNG"
              alt="Image 1"
              class="aspect-[2/3] h-80 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
            />
          </div>
          <div class="group relative">
            <img
              src="/imgpromo1.jpg"
              alt="Image 1"
              class="aspect-[2/3] h-80 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
            />
          </div>
        </div>
      </section>

      <section class="bg-gray-100">
        <div class="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:py-20 lg:px-8">
          <div class="max-w-2xl lg:max-w-4xl mx-auto text-center">
            <h2 class="text-3xl font-extrabold text-gray-900" id="contactUs">
              Visitez nous
            </h2>
            <p class="mt-3 text-lg text-gray-500">
              Laissez-nous vous servir le meilleur
            </p>
          </div>
          <div class="mt-8 lg:mt-20">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div class="max-w-full mx-auto rounded-lg overflow-hidden">
                  <div class="border-t border-gray-200 px-6 py-4">
                    <h3 class="text-lg font-bold text-gray-900">Contact</h3>
                    <p class="mt-1 font-bold text-gray-600">
                      <a href="tel:+123">Téléphone: +216 52745149</a>
                    </p>
                    <a class="flex m-1" href="tel:+919823331842">
                      <div class="flex-shrink-0">
                        <div class="flex items-center justify-between h-10 w-30 rounded-md bg-indigo-500 text-white p-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-6 h-6"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                            />
                          </svg>
                          Appelez nous
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="px-6 py-4">
                    <h3 class="text-lg font-medium text-gray-900">
                      Notre Addresse
                    </h3>
                    <p class="mt-1 text-gray-600">Teboulba , Monastir</p>
                  </div>
                  <div class="border-t border-gray-200 px-6 py-4">
                    <h3 class="text-lg font-medium text-gray-900">Heures</h3>
                    <p class="mt-1 text-gray-600">
                      Lundi - Vendredi : 8h - 17h
                    </p>
                  </div>
                </div>
              </div>
              <div class="rounded-lg overflow-hidden order-none sm:order-first">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6484.756301462455!2d10.96780230000001!3d35.64305380000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2stn!4v1732275986033!5m2!1sfr!2stn"
                  width="600"
                  height="450"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
