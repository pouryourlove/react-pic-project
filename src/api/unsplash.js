import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID ZH_MNPjPri7zpan6Z2mtteGyeHbrZPGtj0ucXHMshiE",
  },
});
