import axios from 'axios'


axios.defaults.baseURL = 'https://rebrickable.com/api/v3/';
axios.defaults.headers.common['Authorization'] = process.env.API_KEY;

export default Brickable = {
    getColors = async (params) => {
        const res = await axios.get('lego/colors', {
            params: {
                ...params
            }
        }) 
    }
}