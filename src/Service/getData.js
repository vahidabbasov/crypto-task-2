import axios from "axios"
import { BASE_URL } from "../consts"

export const getData = () => {
  return axios.get(`${BASE_URL}/coins/markets?vs_currency=usd&order=market_cap_desc`)
}                  