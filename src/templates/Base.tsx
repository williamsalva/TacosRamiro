import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Hero } from './Hero';

const Base = () => (
  <div className="h-screen bg-custom-amber text-gray-600 antialiased">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Hero />
    {/* <TopPaquetes />
    <TacosBebidas />
    <Postres /> */}
    {/* <Sponsors />
    <VerticalFeatures />
    <Banner /> */}
    {/* <Footer /> */}
  </div>
);

export { Base };
