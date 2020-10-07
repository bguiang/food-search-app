import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer bRz0KcEfZ7rujEMYyIVid6fgXS5EpzmTJJpOH_a481PZTxEdOTxlRYNZ6x7W7bHqLIlaHNs0bTAvGJ8L5i9bW6I-eQ9pWE4cOXKc5n_kg6iFpF511-krn3TifBF2X3Yx",
  },
});
