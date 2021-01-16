import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID 1G5eE0b0gqIqLOj_XGQ-B2o-NwGRj-J9OY4wGm8mg0g",
  },
});
