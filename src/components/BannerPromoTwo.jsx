import React from "react";
import { Link } from "react-router-dom";

function BannerPromoTwo() {
  return (
    <div class="relative overflow-hidden bg-white pt-16 pb-32 space-y-24">
      <div class="relative">
        <div class="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
          <div class="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 ">
            <div>
              <div class="mt-6">
                <h2 class="text-3xl font-bold tracking-tight text-black">
                  Routine de pureté pour une peau sublime{" "}
                </h2>
                <p class="mt-4 text-lg text-black">
                  Nos produits de soin visage agissent en synergie pour offrir
                  un nettoyage en profondeur et un démaquillage parfait. Leurs
                  formules douces purifient la peau, tout en préservant son
                  équilibre et en lui apportant une sensation d'hydratation, de
                  propreté et de fraîcheur instantanées.
                </p>
                <div class="mt-6">
                  <Link
                    class="inline-flex rounded-lg bg-[#ad9b60] px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-[#ad9b60] hover:bg-[#ad9b60] hover:ring-[#ad9b60]"
                    to="/products"
                  >
                    Voir plus
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-12 sm:mt-16 lg:mt-0">
            <div class="relative w-full sm:max-w-[350px] md:max-w-[550px] lg:max-w-none h-[250px] sm:h-[350px] md:h-[420px] lg:h-[485px] flex items-center justify-center mx-auto">
              <img
                alt="SOINS DE VISAGE"
                loading="lazy"
                class="max-h-full max-w-full object-contain rounded-xl shadow-xl ring-1 ring-black ring-opacity-5"
                src="/soinsdevisage.jpg"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="relative">
        <div class="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
          <div class="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 lg:col-start-2">
            <div>
              <div class="mt-6">
                <h2 class="text-3xl font-bold tracking-tight text-black">
                  Hydratation intense et parfum subtil pour votre peau{" "}
                </h2>
                <p class="mt-4 text-lg text-black">
                  Nos soins de peau offrent une nutrition intense et un parfum
                  durable pour une peau lisse et soyeuse. Chaque application
                  procure une sensation de confort et de douceur, tout en
                  laissant la peau profondément nourrie et délicatement
                  parfumée.
                </p>
                <div class="mt-6">
                  <Link
                    class="inline-flex rounded-lg bg-[#ad9b60] px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-[#ad9b60] hover:bg-[#ad9b60] hover:ring-[#ad9b60]"
                    to="/products"
                  >
                    Voir plus
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-12 sm:mt-16 lg:mt-0">
            {/* <div class="pl-2 pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0"> */}
            <div class="relative w-full sm:max-w-[350px] md:max-w-[550px] lg:max-w-none h-[250px] sm:h-[350px] md:h-[420px] lg:h-[485px] flex items-center justify-center mx-auto">
              <img
                alt="SOINS DE PEAU"
                loading="lazy"
                class="max-h-full max-w-full object-contain rounded-xl shadow-xl ring-1 ring-black ring-opacity-5"
                src="/inchhh.jpg"
              />{" "}
            </div>
          </div>
        </div>
      </div>

      <div class="relative">
        <div class="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
          <div class="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 ">
            <div>
              <div class="mt-6">
                <h2 class="text-3xl font-bold tracking-tight text-black">
                  L'Alliance parfaite de luxe et de parfum
                </h2>
                <p class="mt-4 text-lg text-black">
                  Découvrez l’élégance absolue à travers nos créations
                  raffinées, alliant la sensualité, le luxe et l'unicité. Nos
                  parfums cheveux et corps déposent un voile délicat sur la peau
                  et les cheveux, offrant une sensation de magnificence et de
                  sophistication qui vous accompagne tout au long de la journée.
                </p>
                <div class="mt-6">
                  <Link
                    class="inline-flex rounded-lg bg-[#ad9b60] px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-[#ad9b60] hover:bg-[#ad9b60] hover:ring-[#ad9b60]"
                    to="/products"
                  >
                    Voir plus
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-12 sm:mt-16 lg:mt-0">
            <div class="relative w-full sm:max-w-[350px] md:max-w-[550px] lg:max-w-none h-[250px] sm:h-[350px] md:h-[420px] lg:h-[485px] flex items-center justify-center mx-auto">
              <img
                loading="lazy"
                class="max-h-full max-w-full object-contain rounded-xl shadow-xl ring-1 ring-black ring-opacity-5"
                src="/inchoo (3).jpg"
                alt=" PARFUMS CHEVEUX ET CORPS"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="relative">
        <div class="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
          <div class="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 lg:col-start-2">
            <div>
              <div class="mt-6">
                <h2 class="text-3xl font-bold tracking-tight text-black">
                  Douceur et pureté : soins capillaires sans nocifs{" "}
                </h2>
                <p class="mt-4 text-lg text-black">
                  Nos produits de soins capillaires purs et naturels : toute une
                  gamme sans silicone, sans sulfate et sans paraben. Le
                  shampoing, le conditionneur, le sérum et le masque Sidr
                  nourrissent et revitalisent en profondeur, apportant douceur,
                  brillance et légèreté, tout en respectant la santé de vos
                  cheveux. Chaque produit est formulé pour préserver l’équilibre
                  naturel de vos cheveux, pour une chevelure propre, saine et
                  éclatante de beauté.
                </p>
                <div class="mt-6">
                  <Link
                    class="inline-flex rounded-lg bg-[#ad9b60] px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-[#ad9b60] hover:bg-[#ad9b60] hover:ring-[#ad9b60]"
                    to="/products"
                  >
                    Voir plus
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-12 sm:mt-16 lg:mt-0">
            <div class="relative w-full sm:max-w-[350px] md:max-w-[550px] lg:max-w-none h-[250px] sm:h-[350px] md:h-[420px] lg:h-[485px] flex items-center justify-center mx-auto">
              <img
                loading="lazy"
                class="max-h-full max-w-full object-contain rounded-xl shadow-xl ring-1 ring-black ring-opacity-5"
                src="/inchoo (4).jpg"
                alt="SOINS CAPILLAIRES"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="relative">
        <div class="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
          <div class="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 ">
            <div>
              <div class="mt-6">
                <h2 class="text-3xl font-bold tracking-tight text-black">
                  Bakhour Fatma, L’Âme en Fumée
                </h2>
                <p class="mt-4 text-lg text-black">
                  Au cœur de l’univers fascinant de l’encens Fatma, nous rendons
                  hommage à une femme hors du commun : Fatma notre source
                  d’inspiration de nos collections. Chaque création perpétue son
                  souvenir avec émotion, bien plus qu’un simple encens. C’est
                  ainsi que commence l’histoire de Maamoul Darna, de Mabthouth
                  Al Saif , et de Mestaka parfumée.
                </p>
                <div class="mt-6">
                  <Link
                    class="inline-flex rounded-lg bg-[#ad9b60] px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-[#ad9b60] hover:bg-[#ad9b60] hover:ring-[#ad9b60]"
                    to="/products"
                  >
                    Voir plus
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-12 sm:mt-16 lg:mt-0">
            <div class="relative w-full sm:max-w-[350px] md:max-w-[550px] lg:max-w-none h-[250px] sm:h-[350px] md:h-[420px] lg:h-[485px] flex items-center justify-center mx-auto">
              {" "}
              <img
                loading="lazy"
                class="max-h-full max-w-full object-contain rounded-xl shadow-xl ring-1 ring-black ring-opacity-5"
                src="/inchoo (5).jpg"
              />
            </div>
          </div>
        </div>
      </div>
      <section class="text-[#ad9b60] body-font">
        <div class="flex text-[#ad9b60] justify-center mt-10 text-4xl font-regular">
          NOS SERVICES
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
    </div>
  );
}

export default BannerPromoTwo;
