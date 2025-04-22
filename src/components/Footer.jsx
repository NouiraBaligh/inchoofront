import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer class="bg-black text-white">
      <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div class="md:flex md:justify-between">
          <div class="mb-6 md:mb-0">
            <Link to="/">
              <img src="/logoInchoo.png" class="h-24 me-3" alt="inchoo Logo" />
            </Link>
          </div>
          <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <Link to="/">
                <h2 class="mb-6 text-sm font-semibold  uppercase dark:text-white">
                  Accueil
                </h2>
              </Link>

              <Link to="/products">
                <h2 class="mb-6 text-sm font-semibold  uppercase dark:text-white">
                  Nos Produits
                </h2>
              </Link>
              <Link to="/aboutUs">
                <h2 class="mb-6 text-sm font-semibold  uppercase dark:text-white">
                  À propos de nous
                </h2>
              </Link>
            </div>
            <div>
              <h2 class="mb-6 text-sm font-semibold  uppercase dark:text-white">
                Suivez-nous{" "}
              </h2>
              <ul class=" dark:text-gray-400 font-medium">
                <li class="mb-4">
                  <a
                    href="https://www.facebook.com/Inchoo.fragrances"
                    class="hover:underline "
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/inchoo_fragrances/"
                    class="hover:underline"
                  >
                    Instagram{" "}
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 class="mb-6 text-sm font-semibold  uppercase dark:text-white">
                Contact
              </h2>
              <ul class=" dark:text-gray-400 font-medium">
                <li class="mb-4">
                  <a class="hover:underline">Monastir , Teboulba </a>
                </li>
                <li class="mb-4">
                  <a class="hover:underline">(+216) 94 121 754</a>
                </li>
                <li>
                  <a class="hover:underline">inchoo.perfumes@gmail.com</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div class="sm:flex sm:items-center sm:justify-between">
          <span class="text-sm  sm:text-center dark:text-gray-400">
            © 2024 <a class="hover:underline">INCHOO</a>. All Rights Reserved.
          </span>
          <div class="flex mt-4 sm:justify-center sm:mt-0">
            <a
              href="https://www.instagram.com/inchoo_fragrances/"
              class=" hover: dark:hover:text-white"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.344 3.608 1.319.975.975 1.257 2.242 1.319 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.344 2.633-1.319 3.608-.975.975-2.242 1.257-3.608 1.319-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.344-3.608-1.319-.975-.975-1.257-2.242-1.319-3.608-.058-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.849c.062-1.366.344-2.633 1.319-3.608.975-.975 2.242-1.257 3.608-1.319 1.265-.058 1.645-.07 4.849-.07m0-2.163C8.735 0 8.332 0 7.052.07c-1.547.081-2.913.392-4.004 1.483C1.957 2.645 1.646 4.011 1.565 5.558.996 7.287 1 7.69 1 12s-.004 4.713.07 6.442c.081 1.547.392 2.913 1.483 4.004 1.091 1.091 2.457 1.402 4.004 1.483C8.332 24 8.735 24 12 24s3.668 0 4.948-.07c1.547-.081 2.913-.392 4.004-1.483 1.091-1.091 1.402-2.457 1.483-4.004.074-1.729.07-2.132.07-6.442s.004-4.713-.07-6.442c-.081-1.547-.392-2.913-1.483-4.004-1.091-1.091-2.457-1.402-4.004-1.483C15.668 0 15.265 0 12 0z" />
                <circle cx="12" cy="12" r="3.156" />
                <path d="M18.406 5.594c-.796 0-1.438.642-1.438 1.438s.642 1.438 1.438 1.438 1.438-.642 1.438-1.438-.642-1.438-1.438-1.438z" />
              </svg>
              <span class="sr-only">Instagram page</span>
            </a>
            <a
              href="https://www.facebook.com/Inchoo.fragrances"
              class=" hover: dark:hover:text-white ms-5"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.406.593 24 1.325 24H12.82v-9.294H9.692V11.41h3.128V8.797c0-3.1 1.893-4.787 4.657-4.787 1.325 0 2.464.099 2.796.143v3.24h-1.918c-1.504 0-1.796.715-1.796 1.763v2.31h3.587l-.467 3.295h-3.12V24h6.116c.731 0 1.324-.593 1.324-1.324V1.325C24 .593 23.406 0 22.675 0z" />
              </svg>
              <span class="sr-only">Facebook page</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
