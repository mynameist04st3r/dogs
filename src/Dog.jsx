import {useState, useEffect} from 'react';

import PropTypes from 'prop-types';
const Dog = ({ url }) => {
  const [dog, setDog] = useState({url})
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setDog(data))
  }, [url]);
  return (
    <div>
      {dog.url && (
        <img src={dog.url} alt={dog?.id} style={{width: '400px'}} />
      )}
    </div>
  )
}
Dog.propTypes = {
  url: PropTypes.string.isRequired,
}

export default Dog
