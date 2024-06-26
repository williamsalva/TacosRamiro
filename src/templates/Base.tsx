import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Footer } from './Footer';
import { Hero } from './Hero';
import { TacosBebidas } from './TacosBebidas';
import { TopPaquetes } from './TopPaquetes';

const Base = () => (
  <div className="bg-custom-amber text-gray-600 antialiased">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Hero />
    <TopPaquetes />
    <TacosBebidas />
    {/* <Sponsors />
    <VerticalFeatures />
    <Banner /> */}
    <Footer />
  </div>
);

export { Base };
