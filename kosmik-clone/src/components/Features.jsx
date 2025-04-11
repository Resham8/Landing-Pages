import features from "../data/FeaturesLists";
import FeatureBlock from "./FeatureBlock";

function Features() {
  return (
    <>
    <div>
      <FeatureBlock
        title="The Browser."
        videoSrc="https://framerusercontent.com/assets/Vlq0JZgICYTRRGpk0GQibLDWXx4.mp4"
        features={features}
      />
    </div></>
  );
}

export default Features;
