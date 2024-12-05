import React from "react";

function Banner() {
  return (
    <header class="relative">
      <img
        src="/banner1.png"
        alt="Banner image inchoo"
        class="absolute -z-10 inline-block h-full w-full object-cover"
      />
      <div class="mx-auto pt-6 w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-64">
        <div class="mx-auto max-w-3xl text-center">
          <h1 class="mt-16 pb-4 text-4xl font-bold text-white md:text-6xl">
            Chaque fragrance raconte une histoire.{" "}
          </h1>
          <p class="mx-auto  mb-5 max-w-[528px] text-xl text-[#ffffff] lg:mb-8">
            Révélez votre éclat avec nos trésors de beauté soigneusement
            choisis.{" "}
          </p>
          <a
            href="#"
            class="inline-block rounded-full bg-[#ad9b60] px-8 py-4 text-center font-bold text-white transition hover:text-[#ad9b60] hover:border-black hover:bg-white"
          >
            Profitez
          </a>
        </div>
      </div>
    </header>
  );
}

export default Banner;
