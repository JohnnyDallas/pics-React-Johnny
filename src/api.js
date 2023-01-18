import axios from 'axios';

const searchImages = async (term) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
          Authorization: 'Client-ID 5BWQ5Rln0nYI7XqFXzWqhaQZeLOUz_q42HOoVg77a-c'
        },
        params: {
          query: term,  
        },
    });   
   
   return response.data.results; 
};

export default searchImages;