import axiosClient from "@/services/api-common/axiosClient.js";

const ENDPOINT = "/healthcheck";

export const healthcheckApi = {
  healthcheck: async () => {
    return await axiosClient.get(ENDPOINT);
  },
};
