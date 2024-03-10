// import { userApi } from "/Users/oksana/edu/full-stack-dev-1/setu-fs-dev-course/src/api/users-api.js";
import { userApi } from "./api/users-api.js";

export const apiRoutes = [
  { method: "GET", path: "/api/users", config: userApi.find },
  { method: "POST", path: "/api/users", config: userApi.create },
  { method: "DELETE", path: "/api/users", config: userApi.deleteAll },
  { method: "GET", path: "/api/users/{id}", config: userApi.findOne },
];