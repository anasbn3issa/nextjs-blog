import axios from './axios';


export const getAllPokemons = async (name) => {
    const res = await axios.get('pokemon/'+name);
    return res.data.results;
}
