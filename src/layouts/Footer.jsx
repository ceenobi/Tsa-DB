import { Image,Container} from "react-bootstrap";
import { footerArrow } from "@assets";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="text-white p-3">
        <Container className="footer-inner d-flex flex-column align-items-center justify-content-center">
          <div className="d-flex gap-1 border-bottom mb-4">
          {/* <h6 className="mb-3">See the main website</h6> */}
          <a className="text-white" target="_blank" href="https://techstudio-site-c133stqiv-techstudioconsults.vercel.app/">See the main website </a>
          <div>
          <Image src={footerArrow} alt="footer-arrow-pic"/>
          </div>
          </div>
          <div className="horizontal-rule  w-100"></div>
          <p className="mt-4">Copyright {currentYear}, TSA Product Team.</p>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
