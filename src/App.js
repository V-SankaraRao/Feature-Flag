import logo from './logo.svg';
import './App.css';
import useFeatureFlag from './UsefeatureFlag';
function App() {
  const isNewFeatureEnabled = useFeatureFlag('newFeature');
  return (
    <div className="App">
      
  

 
    <div className="my-component">
      {isNewFeatureEnabled ? (
        <div className="feature-enabled">New Feature is Enabled!</div>
      ) : (
        <div className="feature-disabled">New Feature is Disabled.</div>
      )}
    </div>
    </div>
  );
}

export default App;
