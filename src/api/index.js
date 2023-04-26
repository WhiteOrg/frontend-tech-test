import { apiUrl } from "../constants/constants";

export const executeFetch = async (resolve, reject) => {
  return await fetch(apiUrl)
    .then(async (res) => await res.json())
    .then(resolve)
    .catch(reject);
};
