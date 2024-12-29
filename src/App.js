import './App.css';
import LeftSection from './components/LeftSection';
import MidSection from './components/MidSection';
import RightSection from './components/RightSection';
function App() {

  return (
    <div className='flex justify-around text-white bg-black'>
      <LeftSection />
      <MidSection />
      <RightSection />
    </div>
  );
}

export default App;
