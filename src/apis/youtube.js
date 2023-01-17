import axios from "axios";

const KEY = "AIzaSyBUqkQLSm1Gs7rkthOpEiu6tn1OX77NNp0";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
