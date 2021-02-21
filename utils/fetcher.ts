import axios from 'axios';

function fetcher(url: string) {
  axios
    .get(url, {
      withCredentials: true, // 다른 도메인간의 쿠키 생성, 전송등을 가능하게 해줌, 생성은 백엔드에서!
    })
    .then((response) => response.data);
}
export default fetcher;
