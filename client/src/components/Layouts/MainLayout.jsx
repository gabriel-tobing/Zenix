const MainLayout = (props) => {
  const { children } = props;

  return <div className="absolute top-14 w-full p-2">{children}</div>;
};

export default MainLayout;
