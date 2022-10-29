import './App.css';
import RatingComponent from './components/RatingComponent';
import Attribution from './components/Attribution';
import RatedComponent from './components/RatedComponent';
import {useState} from 'react';

function App() {

  const [rating, setRating] = useState(0);

  const handleSetRating = (rat) => {
    setRating(rat);
  }

  return (
    <div className="App">
      <div className='flex justify-center items-center h-[95vh] bg-VeryDarkBlue'>
        {rating > 0 ? <RatedComponent rating={rating}></RatedComponent> : <RatingComponent handleSetRating={handleSetRating}></RatingComponent>}
      </div>
      
      <Attribution></Attribution>
    </div>
    
  );
}

export default App;
