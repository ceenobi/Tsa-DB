import { Container} from "react-bootstrap";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="text-white p-3">
        <Container className="footer-inner d-flex flex-column align-items-center justify-content-center">
          <h6 className="mb-3">See the main website</h6>
          <div className="horizontal-rule  w-100"></div>
          <p className="mt-4">Copyright {currentYear}, TSA Product Team.</p>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
