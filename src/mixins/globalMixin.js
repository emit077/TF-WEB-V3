import axios from "axios";
import axios_instance from "@/helper/axios-helper";

let CancelToken = axios.CancelToken;
let source = CancelToken.source();

export default {
  mounted() {
    console.log("mounted", { name: this.$options.name });
    
  },
  methods: {
    showSnakeBar(type, text) {
      console.log("type,text");
      console.log(type, text);
      this.$store.dispatch("snackbar/setSnackbar", {
        flag: true,
        text,
        color: type,
      });
    },
    // toggle_loading(){
    // 	this.$store.dispatch('setPageLoader', !this.$store.state.page_loader )
    // },
    handleError(response) {
      let msg = "";
      switch (response.status) {
        case 401:
          msg = "Invalid Access token";
          break;
        case 440:
          msg = "Session Expired";
          break;
        case 403:
          msg = "Invalid token";
          break;
        case 404:
          msg = "Invalid request";
          break;
        case 400:
          msg = response.data.message;
          break;
        case 500:
          msg = "Internal server error";
          break;

        default:
        // code block
      }
      this.showSnakeBar("error", msg);
    },
    /* handle 500 error */
    handleNoInternetConnection() {
      console.log("No Internet");
      this.showSnakeBar("error", "Please check your internet connection");
    },
    /* common  function  for GET API call */
    request_GET: (
      self,
      url,
      params,
      fnSuccessResponse = null,
      headers = null,
      fnFailureResponse = null,
      finallyHandler = null,
      is_cancel = false
    ) => {
      if (is_cancel) {
        source.cancel();
        source = axios.CancelToken.source();
      }

      if (headers == null) {
        headers = {
          token: localStorage.getItem("token"),
          // 'city-id': self.$store.state.city || ''
        };
      }

      axios_instance
        .get(url, {
          params: params,
          headers: headers,
          cancelToken: is_cancel ? source.token : "",
        })
        .then(function (response) {
          // console.log("response")
          if (fnSuccessResponse != null) {
            if (response.data.success == false)
              self.showSnakeBar("error", response.data.message);

            fnSuccessResponse(response);
          }
        })
        .catch(function (error) {
          console.log(error.response);
          if (axios.isCancel(error)) {
            console.log("Request canceled", error.message);
            return false;
          }

          if (error.response) {
            self.handleError(error.response);
          } else {
            if (fnFailureResponse != null) {
              fnFailureResponse();
            } else {
              // self.handleNoInternetConnection()
            }
          }
        })
        .finally(function () {
          if (finallyHandler !== null) {
            finallyHandler();
          }
        });
    },
    /* common function for the POST API Call */
    request_POST(
      self,
      url,
      params,
      fnSuccessResponse = null,
      headers = null,
      fnFailureResponse = null,
      finallyHandler = null
    ) {
      console.log("post");
      if (headers == null) {
        let token = "";
        if (localStorage.getItem("token"))
          token = localStorage.getItem("token");

        headers = {
          token: token,
          // 'city-id': self.$store.state.city || ''
        };
      }
      axios_instance
        .post(url, params, {
          headers: headers,
        })
        .then(function (response) {
          console.log("response.data.success=" + response.data.success);
          if (fnSuccessResponse != null) {
            if (response.data.success == false) {
              console.log("response.data.success==", response.data.success);
              self.showSnakeBar("red", response.data.message);
            }
            console.log("log1.1");
            fnSuccessResponse(response);
          }
        })
        .catch(function (error) {
          console.log("error==", error);
          if (!error.response) {
            console.log(error);
          } else {
            console.log(error.response.data.status_code);
            self.handle400(error.response.status);
            self.handle401(error.response.status);
            self.handle440(error.response.status);
            self.handle403(error.response.status);
            self.handle500(error.response.status);
            self.handle404(error.response.status);
            if (fnFailureResponse != null) {
              fnFailureResponse();
            } else {
              // self.handleNoInternetConnection()
            }
          }
        })
        .finally(function (res) {
          if (finallyHandler !== null) {
            finallyHandler();
          }
        });
    },
    /*perform encryption for Route params */
    encrypt: function (text) {
      return this.CryptoJS.AES.encrypt(
        text.toString(),
        "tutor-factory"
      ).toString();
    },
    /*perform decryption for Route params*/
    decrypt: function (text) {
      return this.CryptoJS.AES.decrypt(text, "tutor-factory").toString(
        this.CryptoJS.enc.Utf8
      );
    },
    /* city auto complete */
    cityAutoComplete() {
      const self = this;
      let params = {
        search_query: self.city_serch_query,
      };
      self.city_loading = true;
      const successHandler = (response) => {
        self.city_list = response.data.city_list;
      };
      const finallyHandler = () => {
        self.city_loading = false;
      };
      self.request_GET(
        self,
        self.$urls.CITY_LIST,
        params,
        successHandler,
        null,
        null,
        finallyHandler
      );
    },
    /* city auto complete */
    cityList() {
      const self = this;
      let params = {};
      const successHandler = (response) => {
        this.cities = response.data.city_list;
      };
      const finallyHandler = () => {
        self.city_loading = false;
      };
      self.request_GET(
        self,
        self.$urls.CITY,
        params,
        successHandler,
        null,
        null,
        finallyHandler
      );
    },
  },
};
