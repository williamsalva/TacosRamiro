import Image from 'next/image';

import { Section } from '../layout/Section';

const TopPaquetes = () => {
  return (
    <Section yPadding="py-1">
      <div className="flex flex-col md:flex-row md:space-x-4 lg:space-x-12">
        <div className="flex-1">
          <h1 className="text-center text-4xl font-bold tracking-tight text-title-pedritos sm:text-6xl sm:tracking-tight lg:text-3xl xl:text-5xl xl:tracking-tight 2xl:text-[3.5rem]">
            Top
          </h1>
          <Image
            src="/assets/images/top.png"
            alt="Sentry"
            layout="responsive"
            width={2200} // Establece el ancho original de la imagen
            height={1187}
          />
          <h1 className="text-center text-4xl font-bold tracking-tight text-title-pedritos sm:text-6xl sm:tracking-tight lg:text-3xl xl:text-5xl xl:tracking-tight 2xl:text-[3.5rem]">
            Ordenes
          </h1>
          <Image
            src="/assets/images/ordenes.png"
            alt="Sentry"
            layout="responsive"
            width={2200} // Establece el ancho original de la imagen
            height={1187}
            style={{ marginTop: '1rem' }}
          />
        </div>
        <div className="flex-1">
          <h1 className="text-center text-4xl font-bold tracking-tight text-title-pedritos sm:text-6xl sm:tracking-tight lg:text-3xl xl:text-5xl xl:tracking-tight 2xl:text-[3.5rem]">
            Paquetes
          </h1>
          <Image
            src="/assets/images/paquetes.png"
            alt="Sentry"
            layout="responsive"
            width={2200} // Establece el ancho original de la imagen
            height={2368}
            style={{ marginTop: '1rem' }}
          />
        </div>
      </div>
    </Section>
  );
};

export { TopPaquetes };
