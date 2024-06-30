import Image from 'next/image';

import { Section } from '../layout/Section';

const Postres = () => {
  return (
    <Section yPadding="py-1">
      <div className="flex flex-col items-center justify-center md:flex-row md:space-x-4 lg:space-x-12">
        <div className="flex flex-1 items-center justify-center">
          {' '}
          {/* Asegura el centrado horizontal y vertical */}
          <div className="md:w-1/2">
            {' '}
            {/* Mantiene el ancho al 50% */}
            <h1 className="text-center text-4xl font-bold tracking-tight text-title-pedritos sm:text-6xl sm:tracking-tight lg:text-3xl xl:text-5xl xl:tracking-tight 2xl:text-[3.5rem]">
              Postres
            </h1>
            <Image
              src="/assets/images/postres.png"
              alt="Sentry"
              layout="responsive"
              width={2200} // Establece el ancho original de la imagen
              height={1187}
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

export { Postres };
