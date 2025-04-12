import { Browser, Canvas, Finder } from "../data/FeaturesLists";
import FeatureBlock from "./FeatureBlock";

function Features() {
  return (
    <div className="features">
      <FeatureBlock
        title="The Browser."
        videoSrc="https://framerusercontent.com/assets/Vlq0JZgICYTRRGpk0GQibLDWXx4.mp4"
        features={Browser}
      />
      <FeatureBlock
        title="The Canvas."
        videoSrc="https://framerusercontent.com/assets/jcZBvLMNYT3LVvVeq8liqnuYc.mp4"
        features={Canvas}
      />
      <FeatureBlock
        title="The Finder."
        videoSrc="https://framerusercontent.com/assets/ymyKADs63yZ3CAdWmgI6D9jnY.mp4"
        features={Finder}
      />
      <div className="intro-buttons">
        <button className="primary-btn intro-btn">Get Started for free</button>
        <button className="secondary-btn intro-btn">Download Kosmik</button>
      </div>
    </div>
  );
}

export default Features;
