import {useState} from 'react';
import Dog from './Dog';

const App = () => {
  const [url, setUrl] = useState('https://thatcopy.pw/dogapi/restId/1');
  const randomDog = () => {
    let randomNum = Math.floor(Math.random() * (58-1) + 1);
    setUrl(`https://thatcopy.pw/dogapi/restId/${randomNum}`)
  }

  return (
    <div>
      <Dog url={url} />
      <button onClick={randomDog}>Click for random dog</button>
    </div>
  )
}

export default App;
