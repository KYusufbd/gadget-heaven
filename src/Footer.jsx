const Footer = () => {
  return (
    <footer className="w-full bg-white py-6 text-txtcol">
      <div className="flex w-full flex-col items-center gap-3 pb-8">
        <h3 className="text-3xl font-bold">Gadget Heaven</h3>
        <p className="text-center font-medium opacity-60">
          Leading the way in cutting-edge technology and innovation.
        </p>
      </div>
      <hr className="mx-auto max-w-banner-width" />
      <div className="mx-auto flex max-w-page-width flex-row flex-wrap justify-around gap-6 p-10 text-base-content">
        <nav className="flex w-44 flex-col items-center">
          <h6 className="footer-title">Services</h6>
          <a className="link-hover link">Product Support</a>
          <a className="link-hover link">Order Tracking</a>
          <a className="link-hover link">Shipping & Delivery</a>
          <a className="link-hover link">Returns</a>
        </nav>
        <nav className="flex w-44 flex-col items-center">
          <h6 className="footer-title">Company</h6>
          <a className="link-hover link">About Us</a>
          <a className="link-hover link">Careers</a>
          <a className="link-hover link">Contact</a>
        </nav>
        <nav className="flex w-44 flex-col items-center">
          <h6 className="footer-title">Legal</h6>
          <a className="link-hover link">Terms of use</a>
          <a className="link-hover link">Privacy policy</a>
          <a className="link-hover link">Cookie policy</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
