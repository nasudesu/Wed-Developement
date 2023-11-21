import Header from "./Header";
import PageLinks from "./PageLinks";
import SocialLinks from "./SocialLinks";

const Navigation = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <Header />
        <PageLinks parentClass="nav-link" />
        <SocialLinks />
      </div>
    </nav>
  );
};

export default Navigation;
