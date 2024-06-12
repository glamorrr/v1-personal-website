import Head from 'next/head';

type Props = {
  meta: {
    title: string;
  };
  children?: React.ReactNode;
};

const DefaultLayout = ({ children, meta }: Props) => {
  const withTopPageLine = false;

  return (
    <>
      <Head>
        <title>{meta.title}</title>
      </Head>
      <div>
        <div className="bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
          {withTopPageLine && <div className="bg-primary-300 h-1 relative" />}
          <div className="container pt-12 pb-16">{children}</div>
        </div>
      </div>
    </>
  );
};

export default DefaultLayout;
