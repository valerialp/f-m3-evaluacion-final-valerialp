const URL ='https://hp-api.herokuapp.com/api/characters';

	const charactersFetch = () => {
	  return fetch(URL)
	 	.then(res => res.json())
	}

  export default charactersFetch;