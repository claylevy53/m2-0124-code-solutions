import { Header } from './Header';
import { ImageContainer } from './ImageContainer';
import { ImageCaption } from './ImageCaption';
import { ImageDescription } from './ImageDescription';
import { ButtonContainer } from './ButtonContainer';
import './App.css';

const headerText = 'React Image Bank';
const imageSrc = ['/starry-sky.jpeg', '/pleideis.jpeg', '/andromeda.jpeg'];
const imageCap = [
  'A Beautiful Image of Space',
  'The Pleiades Cluster',
  'The Andromeda Galaxy',
];
const imageDescrip = ['Starry Sky', 'The Pleiades', 'Andromeda Galaxy'];
const buttonText = 'Click for Next Image';

function App() {
  return (
    <>
      <Header headerText={headerText} />
      <ImageContainer imageSrc={imageSrc} />
      <ImageCaption imageCap={imageCap} />
      <ImageDescription imageDescrip={imageDescrip} />
      <ButtonContainer buttonText={buttonText} />
    </>
  );
}

export default App;
