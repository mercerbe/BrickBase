import axios from "axios";

axios.defaults.baseURL = "https://rebrickable.com/api/v3/";
axios.defaults.headers.common["Authorization"] = process.env.API_KEY;

const Brickable = {};

Brickable.getColors = params => {
  return axios
    .get("lego/colors", {
      params: {
        ...params
      }
    })
    .then(res => {
      console.log(res);
      return res;
    });
};
export default Brickable;
