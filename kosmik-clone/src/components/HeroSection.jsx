function HeroSection() {
  return (
    <>
      <div className="intro-container">        
        <div className="intro-heading">
          <h1>
            <span class="heading-part-1">The best browser for</span>
            <span class="heading-part-2"> visual research and notetaking</span>
          </h1>
        </div>
        <div className="intro-subheading">
          <h3>
            The single platform to browse, capture, and organize your knowledge.
          </h3>
        </div>
        <div className="intro-buttons">
          <button className="primary-btn intro-btn">
            Get Started for free
          </button>
          <button className="secondary-btn intro-btn">Watch demo</button>
        </div>
        <div className="intro-img">
          <img
            className="responsive-image"
            src="https://framerusercontent.com/images/hOG0dQNBYYINY6D9FZOhsc8IaA.png"
            srcSet={`
                https://framerusercontent.com/images/hOG0dQNBYYINY6D9FZOhsc8IaA.png?scale-down-to=512 512w,
                https://framerusercontent.com/images/hOG0dQNBYYINY6D9FZOhsc8IaA.png?scale-down-to=1024 1024w,
                https://framerusercontent.com/images/hOG0dQNBYYINY6D9FZOhsc8IaA.png 1624w`}
            sizes="(max-width: 768px) 100vw, 1180px"
            alt="demo image"
          />
        </div>
        <div className="intro-about">
          <div className="intro-heading">
            <h1>Where browsing meets thinking.</h1>
          </div>
          <div className="intro-para">
            <p>Most note-taking apps make you leave your browser. Kosmik turns your
            browser into a powerful research environment - capture visually,
            organize spatially, and navigate your knowledge like you're
            exploring a map, not a file system.</p>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
