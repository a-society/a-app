import React from 'react';
import landingPageBg from '../../assets/landing-page-bg.png';

function Home() {
  return (
    <div className="w-full h-screen">
      <div
        className="bg-cover bg-center h-screen bg-gray-900/10"
        style={{
          backgroundImage: `url(${landingPageBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="flex w-full h-full justify-center items-center text-white">
          <div className="flex flex-col items-center bg-gray-900/80 p-10 rounded-xl">
            <h1 className="font-extrabold text-5xl">
              Welcome to immaculate ą app!
            </h1>
            <div className="font-thin light text-lg">
              siema z nowego konfigu kubernetisa
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
