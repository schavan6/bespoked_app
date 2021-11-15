import axiosClient from "./httpclient";

export const getAllSalesPerson = async () => {
  const resp = await axiosClient.get("/api/v1/salespersons");
  return resp.data;
};

export const getAllCustomers = async () => {
  const resp = await axiosClient.get("/api/v1/customers");
  return resp.data;
};

export const getAllProducts = async () => {
  const resp = await axiosClient.get("/api/v1/products");
  return resp.data;
};

export const getAllSales = async () => {
  const resp = await axiosClient.get("/api/v1/sales");
  return resp.data;
};

export const createSale = async (data) => {
  const resp = await axiosClient.post("/api/v1/sales", data);
  return resp.data;
};

export const getCommissionReport = async (quarterId) => {
  const resp = await axiosClient.get(
    `/api/v1/salesreport?quarter=${quarterId}`
  );
  return resp.data;
};
