import axios from "axios";

export const signup = async (data) => {
  const config = {
    header: {
      "Content-Type": "application/json",
    },
  };

  const response = await axios.post("/API/auth/signup", data, config);

  return response;
};
