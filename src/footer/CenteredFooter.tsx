import type { ReactNode } from 'react';

import { FooterCopyright } from './FooterCopyright';
import { FooterIconList } from './FooterIconList';

type ICenteredFooterProps = {
  logo: ReactNode;
  iconList: ReactNode;
  iconDeliveryAppList: ReactNode;
  iconContactUsList: ReactNode;
  iconContactUsCommentsList: ReactNode;
  iconMaps: ReactNode;
  children?: ReactNode;
};

const CenteredFooter = (props: ICenteredFooterProps) => (
  <div className="text-center">
    <nav>
      <ul className="navbar mt-0 flex flex-row justify-center text-xl font-medium text-gray-800">
        {props.children}
      </ul>
    </nav>
    <h2 id="redesSociales" className="mt-1 text-xl font-semibold text-gray-800">
      ¡Síguenos en redes!
    </h2>
    <div className="mt-8 flex justify-center">
      <FooterIconList>{props.iconList}</FooterIconList>
    </div>
    {/* diddi uber eats */}
    <h2 className="mt-8 text-xl font-semibold text-gray-800">
      {' '}
      Tacos Pedritos a un clic
    </h2>
    <div className="mt-8 flex justify-center">
      <FooterIconList>{props.iconDeliveryAppList}</FooterIconList>
    </div>
    <h2 id="WhatsApp" className="mt-8 text-xl font-semibold text-gray-800">
      {' '}
      ¡Haz tu pedido por WhatsApp!
    </h2>
    <div className="mt-8 flex justify-center">
      <FooterIconList>{props.iconContactUsList}</FooterIconList>
    </div>
    <h2 className="mt-8 text-xl font-semibold text-gray-800">
      {' '}
      ¡Ubícanos en Maps!
    </h2>
    <div className="mt-8 flex justify-center">
      <FooterIconList>{props.iconMaps}</FooterIconList>
    </div>
    <h2 className="mt-8 text-xl font-semibold text-gray-800">
      {' '}
      Sugerencias y comentarios escribenos por WhatsApp
    </h2>
    <div className="mt-8 flex justify-center">
      <FooterIconList>{props.iconContactUsCommentsList}</FooterIconList>
    </div>
    <div className="mt-8 text-sm">
      <FooterCopyright />
    </div>
    <style jsx>
      {`
        .navbar :global(li) {
          @apply mx-4;
        }
      `}
    </style>
  </div>
);

export { CenteredFooter };
