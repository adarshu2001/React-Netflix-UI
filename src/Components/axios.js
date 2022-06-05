import axios from "axios";
import { baseURl } from "../constants/constants";


const instance = axios.create({
    baseURL: baseURl,
   
  });

  export default instance