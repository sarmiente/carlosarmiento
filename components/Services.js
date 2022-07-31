const Services = () => (
  <section id="services" className="text-gray-700 body-font">
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-col text-center w-full mb-20">
        <h2 className="text-md text-indigo-500 tracking-widest font-medium title-font mb-1">
          SERVICIOS
        </h2>
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 dark:text-white">
          ¿Qué Puedo Hacer Por Ti?
        </h1>
      </div>
      <div className="flex flex-wrap -m-4 relative group">
        <div className="p-4 md:w-1/3">
          <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col shadow-lg transition duration-300 group-hover:bg-gradient-to-r from-blue-500 to-blue-300 group-hover:scale-105 lg:group-hover:scale-110 ">
            <div className="flex items-center mb-3 ">
              <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0 ">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <h2 className="text-gray-900 text-lg title-font font-medium ">
                Desarrollo Web
              </h2>
            </div>
            <div className="flex-grow">
              <p className="leading-relaxed text-base">
                ¿Necesitas una página que venda? ¿Necesitas darte a conocer en
                internet? Esta es la opción para ti
              </p>
              <a
                href="#contacto"
                className="mt-3 text-indigo-500 inline-flex items-center"
              >
                Saber Más
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="p-4 md:w-1/3">
          <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col shadow-lg">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <h2 className="text-gray-900 text-lg title-font font-medium">
                E-commerce
              </h2>
            </div>
            <div className="flex-grow">
              <p className="leading-relaxed text-base">
                ¿Quieres pasar tu tienda al mundo digital? ¿Necesitas vender
                algo por internet? Consigue las tiendas más rápidas del mundo
              </p>
              <a
                href="#contacto"
                className="mt-3 text-indigo-500 inline-flex items-center"
              >
                Saber Más
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="p-4 md:w-1/3">
          <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col shadow-lg">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <circle cx="6" cy="6" r="3"></circle>
                  <circle cx="6" cy="18" r="3"></circle>
                  <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                </svg>
              </div>
              <h2 className="text-gray-900 text-lg title-font font-medium">
                Apps
              </h2>
            </div>
            <div className="flex-grow">
              <p className="leading-relaxed text-base">
                ¿Tienes una idea para una App ganadora? Hagamosla realidad.
              </p>
              <a
                href="#contacto"
                className="mt-3 text-indigo-500 inline-flex items-center"
              >
                Saber Más
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Services;
