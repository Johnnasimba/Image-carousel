import './App.css';


import ImageSlider from './components/image-slider.component';

import image1 from './assets/image1.jpg';
import image2 from './assets/image2.jpg';
import image3 from './assets/image3.jpg';
import image4 from './assets/image4.jpg';
import image5 from './assets/image5.jpg';
import image6 from './assets/image6.jpg';

function App() {
  return (
    <div className="App">
      <h1>Business meetings</h1>
      <ImageSlider images={[image1, image2, image3, image4, image5, image6]} />
    </div>
  );
}

export default App;
 