import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer 5fRNVfXnuTxxD5FY6W_di9B93B719UDt-yTW_aZuWHZ5dY064fJuOxenVx_2KaKkqQ-ZOARPRx1NagYVgTokFYA0CCrCVJ1iKXNwVtKosLT7Aj9UMfOqvAW5UlBXX3Yx",
  },
});
