import ThemeToggle from './ThemeToggle';

const pasos = [
  {
    id: 1,
    title: 'Sitio Web',
    profilePic: '/assets/frame1.svg',
    link: '/home/home',
    excerpt: 'Entra a mi pagina y mira mi trabajo.',
  },
  {
    id: 2,
    title: 'Goarbit',
    profilePic: '/assets/gologo.svg',
    link: 'https://accounts.binance.com/en/register?ref=WE3OAKWI',
    excerpt: 'Obten rendimientos de 20% mensual.',
  },
  {
    id: 3,
    title: 'Quantum',
    profilePic: '/assets/quantumlogo.svg',
    link: 'https://accounts.binance.com/en/register?ref=WE3OAKWI',
    excerpt: 'Rendimientos de hasta 25% mensual.',
  },
  {
    id: 4,
    title: 'Binance',
    profilePic: '/assets/binancelogo.svg',
    link: 'https://accounts.binance.com/en/register?ref=WE3OAKWI',
    excerpt: 'Registrate y gana un bono.',
  },
  {
    id: 5,
    title: 'Bybit',
    profilePic: '/assets/bybitlogo.svg',
    link: 'https://www.bybit.com/es-ES/invite?ref=O2PN1K',
    excerpt: 'Registrate y gana un bono.',
  },
  {
    id: 6,
    title: 'Github',
    profilePic: '/assets/githublogo.svg',
    link: 'https://github.com/sarmiente',
    excerpt: 'Mira algunos de mis proyectos.',
  },
];

export default function LinkTree() {
  return (
    <>
      <div className="h-screen dark:bg-black py-6 bg-white body-font">
        <div className="m-auto px-6 space-y-8 md:px-12 lg:px-20 pb-10">
          <div className="container mx-auto ">
            <ThemeToggle />
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-3">
            {pasos.map(({ profilePic, title, excerpt, link }) => (
              <a href={link} target="_blank">
                <div className="relative group ">
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 rounded-xl bg-white group-hover:bg-gray-200 shadow-md transition duration-300 group-hover:scale-105 lg:group-hover:scale-105"
                  />
                  <div className="relative space-y-2 px-3 py-4 md:p-8 lg:p-8 xl:p-6 ">
                    <img className="w-full rounded-md" src={profilePic} />
                    <div>
                      <h1 className="text-lg font-hero text-black font-medium transition group-hover:text-white-500">
                        {title}
                      </h1>
                      <p className="text-black font-display group-hover:text-white-500 md:text-lg">
                        {excerpt}
                      </p>
                    </div>
                    {/* <Image
              src={Facebook}
              className="w-16"
              width={50}
              height={50}
              alt="burger illustration"
            /> */}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
