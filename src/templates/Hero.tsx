import Image from 'next/image';

import { Background } from '../background/Background';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';

const Hero = () => (
  <Background color="bg-custom-amber">
    {/* <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="#WhatsApp">WhatsApp</Link>
        </li>
        <li>
          <Link href="#redesSociales">Redes Sociales</Link>
        </li>
      </NavbarTwoColumns>
    </Section> */}

    <Section yPadding="py-6">
      <div className="flex items-center justify-center">
        <Image
          src="/assets/images/logoTacosRamiro.png"
          alt="Sentry"
          width={520}
          height={450}
        />
      </div>
    </Section>

    <Section yPadding="pt-20 pb-3">
      <HeroOneButton title="Muy pronto..." description="" />
    </Section>
  </Background>
);

export { Hero };
