import { get } from "./api.js";

const endpoints = {
  catalog: "/data/products?sortBy=_createdOn%20desc",
  byId: "/data/products/",
};
export async function getAll() {
  return get(endpoints.catalog);
}

export async function getById(id) {
  return get(endpoints.byId + id);
}
