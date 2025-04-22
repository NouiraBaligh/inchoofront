import React from "react";

function AboutUs() {
  return (
    <div>
      <div class="relative w-full h-[460px]" id="home">
        <div class="absolute inset-0 ">
          <img
            src="/inchoo.jpg"
            alt="Background Image"
            class="object-cover object-center w-full h-full"
          />
        </div>
        {/* <div class="absolute inset-9 flex flex-col md:flex-row items-center justify-between">
          <div class="md:w-1/2 mb-4 md:mb-0">
            <a
              href="#contactUs"
              class="px-6 py-3 bg-[#c8a876] text-white font-medium rounded-full hover:bg-[#c09858]  transition duration-200"
            >
              Contactez Nous
            </a>
          </div>
        </div> */}
      </div>

      <section class="py-10" id="services">
        <div class="container mx-auto px-4">
          <h2 class="text-3xl font-bold text-gray-800 mb-8 text-center">
            NOS PRODUITS
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div class="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="/imgban12.webp"
                alt="SOINS DE VISAGE"
                class="w-full h-64 object-cover"
              />
              <div class="p-6 text-center">
                <h3 class="text-xl font-medium text-gray-800 mb-2">
                  SOINS DE VISAGE{" "}
                </h3>
              </div>
            </div>
            <div class="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="/imgban3.jpg"
                alt="SOINS DE PEAU"
                class="w-full h-64 object-cover"
              />
              <div class="p-6 text-center">
                <h3 class="text-xl font-medium text-gray-800 mb-2">
                  SOINS DE PEAU
                </h3>
              </div>
            </div>
            <div class="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="/soincap.jpg"
                alt="SOINS CAPILLAIRES"
                class="w-full h-64 object-cover"
              />
              <div class="p-6 text-center">
                <h3 class="text-xl font-medium text-gray-800 mb-2">
                  SOINS CAPILLAIRES
                </h3>
              </div>
            </div>
            <div class="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="/parfummaison.jpg"
                alt="PARFUMS MAISON"
                class="w-full h-64 object-cover"
              />
              <div class="p-6 text-center">
                <h3 class="text-xl font-medium text-gray-800 mb-2">
                  PARFUMS MAISON
                </h3>
              </div>
            </div>
            <div class="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="/parfmcorps.jpg"
                alt=" PARFUMS CHEVEUX ET CORPS"
                class="w-full h-64 object-cover"
              />
              <div class="p-6 text-center">
                <h3 class="text-xl font-medium text-gray-800 mb-2">
                  PARFUMS CHEVEUX ET CORPS
                </h3>
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
              <p class="mt-4 text-gray-600 text-lg">
                Depuis 2024, Inchoo est une entreprise innovante et passionnée
                par l’art de la beauté et du parfum. Spécialisée dans la
                fabrication de produits cosmétiques, d'encens et de parfums de
                luxe, notre mission est d'offrir des expériences sensorielles
                inoubliables à travers des créations raffinées et de qualité
                exceptionnelle.
              </p>
              <p class="mt-4 text-gray-600 text-lg">
                Nos produits sont conçus pour sublimer tous les aspects de votre
                quotidien. De la maison aux soins corporels, en passant par les
                cheveux, les mains et les pieds, chaque article de notre
                collection est soigneusement élaboré pour apporter confort,
                bien-être et une touche de luxe à votre routine.
              </p>
              <p class="mt-4 text-gray-600 text-lg">
                Chez Inchoo, nous mettons un point d'honneur à allier
                innovation, qualité et sensorialité, afin de créer des produits
                qui ne se contentent pas de séduire vos sens, mais qui vous
                permettent de vivre un moment de pure indulgence.
              </p>
              <p class="mt-4 text-gray-600 text-lg">
                Chez inchoo nous ne créons pas seulement des parfums, nous
                créons des souvenirs qui s’ancrent dans votre mémoire des
                moments qui deviennent uniques.
              </p>
            </div>
            <div class="mt-12 md:mt-0">
              <img
                src="/aboutUs.png"
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

      {/* <section class="text-gray-700 body-font" id="gallery">
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
      </section> */}

      <section class="text-[#ad9b60] body-font">
        <div class="flex text-[#ad9b60] justify-center mt-10 text-4xl font-regular">
          Gallerie{" "}
        </div>
        <section class="overflow-hidden">
          <div class="max-w-screen-xl 2xl:max-w-screen-3xl mx-auto py-12 lg:py-24 flex flex-col justify-center">
            <div class="flex flex-wrap justify-center gap-4">
              <a>
                <img
                  src="/imgco1.PNG"
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
                  src="/imgco3.PNG"
                  class="w-72 h-72 rounded-xl object-cover transform hover:scale-110 transition duration-300 ease-in-out"
                  alt="Image 3"
                />
              </a>
            </div>
          </div>
        </section>
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
                      <a>Téléphone: +216 94 121 754</a>
                    </p>

                    <p class="mt-1 font-bold text-gray-600">
                      <a>Email: inchoo.perfumes@gmail.com</a>
                    </p>
                  </div>
                  <div class="border-t border-gray-200 px-6 py-4">
                    <h3 class="text-lg font-medium text-gray-900">Addresse</h3>
                    <p class="mt-1 text-gray-600">Teboulba , Monastir</p>
                  </div>
                  <div class="border-t border-gray-200 px-6 py-4">
                    <h3 class="text-lg font-medium text-gray-900">Heures</h3>
                    <p class="mt-1 text-gray-600">
                      Lundi - Vendredi : 9h - 17h
                    </p>
                  </div>
                </div>
              </div>
              <div class="rounded-lg overflow-hidden order-none sm:order-first">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d202.64855123384262!2d10.9676809!3d35.6430866!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13021700383d10bb%3A0x302ef5e153437b3e!2sInchoo!5e0!3m2!1sfr!2stn!4v1734599022963!5m2!1sfr!2stn"
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
