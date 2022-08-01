const Steps = () => (
  <section id="steps" className="text-gray-700 body-font dark:text-white">
    <div className="container px-5 py-24 mx-auto">
      <h1 className="sm:text-3xl text-2xl font-medium text-center title-font mb-4 ">
        ¿Cual es el Proceso a Seguir?
      </h1>
      <div className="py-3 flex flex-wrap">
        <div className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
          <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">
            1
          </div>
          <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
            <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-12 h-12"
                viewBox="0 0 24 24"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </div>
            <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
              <h2 className="font-medium title-font text-gray-900 mb-1 text-xl dark:text-white">
                Charlemos
              </h2>
              <p className="leading-relaxed">
                Platicame más acerca de lo que tienes en mente, los detalles de
                tu proyecto para saber como podemos resolverlo.
              </p>
            </div>
          </div>
        </div>
        <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
          <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">
            2
          </div>
          <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
            <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-12 h-12"
                viewBox="0 0 24 24"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </div>
            <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
              <h2 className="font-medium title-font text-gray-900 mb-1 text-xl dark:text-white">
                Diseño y Planeación
              </h2>
              <p className="leading-relaxed">
                A partir de la info que obtuvimos, hay que planear y diseñar la
                solución para que sea acorde a lo que tu necesitas.
              </p>
            </div>
          </div>
        </div>
        <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
          <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">
            3
          </div>
          <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
            <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-12 h-12"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="5" r="3"></circle>
                <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
              </svg>
            </div>
            <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
              <h2 className="font-medium title-font text-gray-900 mb-1 text-xl dark:text-white">
                Desarrollo
              </h2>
              <p className="leading-relaxed">
                En esta parte nos ponemos a implementar todo y a construir la
                solución con la tecnología más adecuada a tu proyecto.
              </p>
            </div>
          </div>
        </div>
        <div className="flex relative pb-10 sm:items-center md:w-2/3 mx-auto">
          <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">
            4
          </div>
          <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
            <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-12 h-12"
                viewBox="0 0 24 24"
              >
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
              <h2 className="font-medium title-font text-gray-900 mb-1 text-xl dark:text-white">
                Pruebas y Entrega
              </h2>
              <p className="leading-relaxed">
                Finalmente, la solución se prueba (con estandares de calidad) y
                si estas pasan el producto llega a tus manos. De nosotros para
                ti, con cariño.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Steps;
