type Props = {
  children?: React.ReactNode;
};

const DefaultLayout = ({ children }: Props) => {
  return (
    <div>
      <div className="bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <div className="bg-pink-300 h-1 relative" />
        <div className="max-w-xl pt-12 pb-16 mx-auto px-4 m-2">{children}</div>
      </div>
    </div>
  );
};

export default DefaultLayout;
