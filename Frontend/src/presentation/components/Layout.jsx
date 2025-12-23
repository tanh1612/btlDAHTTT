import Footer from "../components/Footer";
import Header from "../components/Header";

const Layout = ({ children }) => {
  console.log(children);
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
