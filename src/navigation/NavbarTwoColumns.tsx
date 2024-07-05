import type { ReactNode } from 'react';
import React from 'react';

type INavbarProps = {
  logo: ReactNode;
  children: ReactNode;
};

const NavbarTwoColumns = (props: INavbarProps) => (
  <div className="flex flex-wrap items-center justify-center  ">
    <nav>
      <ul className="navbar flex items-center justify-center text-center text-2xl font-medium text-custom-text sm:text-[.5rem] md:text-2xl">
        {React.Children.map(props.children, (child) => (
          <li>
            <button className="rounded bg-main-pedritos px-4 py-2 font-bold text-white">
              {child}
            </button>
          </li>
        ))}
      </ul>
    </nav>

    <style jsx>
      {`
        .navbar :global(li:not(:first-child)) {
          @apply mt-0;
        }

        .navbar :global(li:not(:last-child)) {
          @apply mr-5;
        }
      `}
    </style>
  </div>
);

export { NavbarTwoColumns };
