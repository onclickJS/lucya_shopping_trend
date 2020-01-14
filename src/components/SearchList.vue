<template>
  <div class="table-responsive table-full-width">
    <table class="table table-hover table-striped">
      <thead>
        <th>ID</th>
        <th>Name</th>
        <th>Salary</th>
        <th>Country</th>
        <th>City</th>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Dakota Rice</td>
          <td>$36,738</td>
          <td>Niger</td>
          <td>Oud-Turnhout</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Minerva Hooper</td>
          <td>$23,789</td>
          <td>Curaçao</td>
          <td>Sinaai-Waas</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Sage Rodriguez</td>
          <td>$56,142</td>
          <td>Netherlands</td>
          <td>Baileux</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Philip Chaney</td>
          <td>$38,735</td>
          <td>Korea, South</td>
          <td>Overland Park</td>
        </tr>
        <tr>
          <td>5</td>
          <td>Doris Greene</td>
          <td>$63,542</td>
          <td>Malawi</td>
          <td>Feldkirchen in Kärnten</td>
        </tr>
        <tr>
          <td>6</td>
          <td>Mason Porter</td>
          <td>$78,615</td>
          <td>Chile</td>
          <td>Gloucester</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";

// Request Interceptor
const reqInterceptor = axios.interceptors.request.use(config => {
  console.log("Request Interceptor", config);
  // 헤더를 변경하려면 headers 오브젝트를 변경한다
  // config.headers.Authorization = 'something others'
  // 임의의 헤더를 새로 설정할 수 있다
  config.headers["X-Naver-Client-Id"] = "1HVvEavvXMq3hAXNFe1b";
  config.headers["X-Naver-Client-Secret"] = "6_T0ytO4zX";
  return config;
});

// Response Interceptor
const resInterceptor = axios.interceptors.response.use(res => {
  console.log("Response Interceptor", res);
  return res;
});

// Request Interceptor를 제거한다
axios.interceptors.request.eject(reqInterceptor);
// Response Interceptor를 제거한다
axios.interceptors.response.eject(resInterceptor);

//https://github.com/axios/axios#interceptors

export default {
  created() {
    this.load();
  },
  methods: {
    load() {
      // axios
      //   .patch("https://openapi.naver.com/v1/datalab/search")
      //   .then(res => console.log(res))
      //   .catch(error => console.log(error));

      axios({
        method: "post",
        url: "https://openapi.naver.com/v1/datalab/search",
        headers: {
          "X-Naver-Client-Id": "1HVvEavvXMq3hAXNFe1b",
          "X-Naver-Client-Secret": "6_T0ytO4zX"
        },
        withCredentials: true
      })
        .then(res => console.log(res))
        .catch(error => console.log(error));
    }
  }
};
</script>
