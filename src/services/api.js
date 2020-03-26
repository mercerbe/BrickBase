import { axios } from "@bundled-es-modules/axios";

axios.defaults.baseURL = "https://rebrickable.com/api/v3/";
const key = "b9e14b7ca27b2f434cc7b5129a831e0a";

const Brickable = {};

// COLORS
Brickable.getColors = params => {
  return axios
    .get("lego/colors", {
      params: {
        key: key,
        ...params
      }
    })
    .then(res => {
      return res.data.results;
    });
};

//
export default Brickable;
