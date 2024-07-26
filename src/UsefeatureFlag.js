import './App.css'
const featureFlags = {
    newFeature: false,
  };

  

const useFeatureFlag = (flagName) => featureFlags[flagName]||false;

export default useFeatureFlag;