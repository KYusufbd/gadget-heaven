const Footer = () => {
  return (
    <div className="w-full bg-bgcol">
      <footer className="footer mx-auto max-w-page-width justify-around p-10 text-base-content">
        <nav className="flex flex-col items-center">
          <h6 className="footer-title">Services</h6>
          <a className="link-hover link">Product Support</a>
          <a className="link-hover link">Order Tracking</a>
          <a className="link-hover link">Shipping & Delivery</a>
          <a className="link-hover link">Returns</a>
        </nav>
        <nav className="flex flex-col items-center">
          <h6 className="footer-title">Company</h6>
          <a className="link-hover link">About Us</a>
          <a className="link-hover link">Careers</a>
          <a className="link-hover link">Contact</a>
        </nav>
        <nav className="flex flex-col items-center">
          <h6 className="footer-title">Legal</h6>
          <a className="link-hover link">Terms of use</a>
          <a className="link-hover link">Privacy policy</a>
          <a className="link-hover link">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
