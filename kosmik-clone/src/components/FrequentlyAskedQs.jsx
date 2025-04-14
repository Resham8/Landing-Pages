function FrequentlyAskedQs() {
  return (
    <div className="FnQ-container">
      <div className="FnQ-heading">
        <h1>Frequently asked questions</h1>
      </div>
      <div className="FnQ-List">
        <div className="FnQ-List-Item">
          <div className="question-container">
            <div className="question-no">
              <div className="ellipse">
                <p>1</p>
              </div>
            </div>
            <div className="question">
              <p>Is Kosmik Free?</p>
            </div>
          </div>

          <div className="anwser-description">
            <p>
              Kosmik is currently in beta and will remain free until the end of
              the beta period (May 2025). You can head over to our pricing page
              to learn more about our pricing plans. We will offer subscriptions
              and one-time payments options.{" "}
            </p>
          </div>
        </div>
        <div className="FnQ-List-Item">
          <div className="question-container">
            <div className="question-no">
              <div className="ellipse">
                <p>2</p>
              </div>
            </div>
            <div className="question">
              <p>How can I sign-up for Kosmik?</p>
            </div>
          </div>

          <div className="anwser-description">
            <p>
              Just sign-up with your google account or create a kosmik account
              in 3 steps.
            </p>
          </div>
        </div>
        <div className="FnQ-List-Item">
          <div className="question-container">
            <div className="question-no">
              <div className="ellipse">
                <p>3</p>
              </div>
            </div>
            <div className="question">
              <p>Can I share my work with other people?</p>
            </div>
          </div>

          <div className="anwser-description">
            <p>
              Kosmik allows you to invite people to collaborate with you or
              share a universe as a public link!
            </p>
          </div>
        </div>
        <div className="FnQ-List-Item">
          <div className="question-container">
            <div className="question-no">
              <div className="ellipse">
                <p>4</p>
              </div>
            </div>
            <div className="question">
              <p>Can I replace my browser with Kosmik?</p>
            </div>
          </div>

          <div className="anwser-description">
            <p>
              For research purposes yes! However Kosmik browser was not designed
              to be used to listen to music on Spotify or watch Netflix for
              examples. Websites requiring authentification (like banks) may
              also not work perfectly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FrequentlyAskedQs;
