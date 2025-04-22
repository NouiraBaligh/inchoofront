import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const slides = [
  {
    image: "/62d324e332d57d92eb724d1a2e4f0800.jpg",
    smallImage: "/ddc5e8e9-9ef4-419d-88a4-c25c74a649ff.png",
    title: "Inchoo, chaque fragrance raconte une histoire.",
    description:
      "Révélez votre éclat avec nos trésors de beauté soigneusement choisis.",
  },
  {
    image: "/0c744977-8b99-4447-acd3-8ec5530d89dc.png",
    smallImage: "/4ab00eb3-d4eb-4013-8c55-56e88ca620b9.png",
    title: "Une expérience sensorielle unique.",
    description: "Découvrez des parfums qui éveillent vos sens.",
  },
];

function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isSmallDevice, setIsSmallDevice] = useState(window.innerWidth < 768); // Adjust the breakpoint as needed

  useEffect(() => {
    const handleResize = () => {
      setIsSmallDevice(window.innerWidth < 768); // Update state based on window size
    };

    window.addEventListener("resize", handleResize); // Add event listener for resize
    return () => window.removeEventListener("resize", handleResize); // Cleanup on unmount
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <header className="relative h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={isSmallDevice ? slide.smallImage : slide.image} // Use small image for small devices
            alt={`Banner image ${index + 1}`}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white p-5 rounded-lg bg-black bg-opacity-50 shadow-lg">
              {" "}
              {/* Added background and shadow */}
              <h1 className="text-4xl text-center font-bold md:text-6xl">
                {slide.title}
              </h1>
              <p className="m-9 text-center text-2xl lg:mb-8">
                {slide.description}
              </p>
              <Link
                to="/products"
                className="inline-block rounded-full bg-[#ad9b60] px-8 py-4 text-center font-bold text-white transition"
              >
                Profitez
              </Link>
            </div>
          </div>
        </div>
      ))}
    </header>
  );
}

export default Banner;
