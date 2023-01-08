import Header from "./Header.tsx";
export const layout = "layouts/Base.tsx";

export default ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};
