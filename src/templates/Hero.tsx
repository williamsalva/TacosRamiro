import Image from 'next/image';
import Link from 'next/link';

import { NavbarTwoColumns } from '@/navigation/NavbarTwoColumns';

import { Background } from '../background/Background';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-custom-amber">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="#WhatsApp">Haz tu pedido por WhatsApp</Link>
        </li>
        <li>
          <Link href="#redesSociales">Redes Sociales</Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="py-6">
      <div className="flex items-center justify-center">
        <Image
          src="/assets/images/logoPedritos.png"
          alt="Sentry"
          width={520}
          height={450}
        />
      </div>
    </Section>

    <Section yPadding="pt-20 pb-3">
      <HeroOneButton
        title="MENÚ"
        description="Nuestra barbacoa está hecha con insumos de calidad, 
no está mezclada con cerdo ni soya, 
es carne 100% de res certificada, por 
eso hace que tenga un sabor inigualable."
      />
    </Section>
  </Background>
);

export { Hero };
