function FeatureBlock({ title, videoSrc, features }) {
  return (
    <section className="features-container">
      <header className="feature-title">
        <h1>{title}</h1>
      </header>

      <div className="feature-content">
        <div className="feature-video">
          <video
            src={videoSrc}
            loop
            autoPlay
            muted
            playsInline
            preload="auto"
            className="custom-video"
          />
        </div>

        <div className="features-list">
          {features.map((feature, index) => (
            <article key={index} className="feature-list-item">
              <div className="list-title-container">
                <div>{feature.icon}</div>
                <p className="list-title">{feature.title}</p>
              </div>
              <div className="feature-description">
                <p>{feature.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeatureBlock;
