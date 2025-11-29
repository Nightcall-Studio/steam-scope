import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const ContentWrapper = (props: Props) => {
  const { children } = props;

  return (
    <div
      className="
        w-full m-auto
        max-w-[288px]
        sm:max-w-[388px]
        md:max-w-[488px]
        lg:max-w-[750px]
        xl:max-w-[1280px]
        xl:px-0
      "
    >
      <div className="hidden">yes</div>
      {children}
    </div>
  );
};

export default ContentWrapper;
