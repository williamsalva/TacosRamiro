import type { ReactNode } from 'react';

type IHeroOneButtonProps = {
  title: ReactNode;
  description: ReactNode;
  button?: ReactNode;
};

const HeroOneButton = (props: IHeroOneButtonProps) => (
  <header className="text-center">
    <h1 className="text-center text-4xl font-bold tracking-tight text-title-tacos-ramiro sm:text-6xl sm:tracking-tight lg:text-6xl xl:text-[6rem] xl:tracking-tight 2xl:text-[6.5rem]">
      {props.title}
    </h1>
    <div className="mb-16 mt-4 text-2xl text-title-tacos-ramiro">
      {props.description}
    </div>

    {props.button ? props.button : null}
  </header>
);

export { HeroOneButton };
