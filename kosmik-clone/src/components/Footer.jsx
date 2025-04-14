function Footer() {
  return (
    <>
      <footer>
        <div className="footer-container">
          <div className="footer-list">
            <p>Start creating</p>
            <a href="#">Sign up</a>
            <a href="#">Download for Mac</a>
            <a href="#">Download for Windows</a>
            <a href="#">Pricing</a>
            <a href="#">Kosmik vs Figma</a>
            <a href="#">Get started</a>
          </div>
          <div className="footer-list">
            <p>About Kosmik</p>
            <a href="#">Blog</a>
            <a href="#">Newsletter</a>
            <a href="#">Why Kosmik</a>
            <a href="#">Legal information</a>
            <a href="#">Privacy Policy</a>
          </div>
          <div className="footer-list">
            <p>Let's be friends</p>
            <a href="#">Discord</a>
            <a href="#">Twitter</a>
            <a href="#">Reddit</a>
            <a href="#">Send us an email</a>
            <a href="#">⭐️ Rate us on ToolFinder</a>
            <p>Designed in Paris, with love 🥐</p>
          </div>

          {/* Eiffel Tower Image Inside the Container */}
          <div className="eiffle-tower">
            <img
              src="https://framerusercontent.com/images/4HXADmCzgs3mZsDtiG6WtQhlcs.png"
              alt="Eiffel Tower"
            />
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
