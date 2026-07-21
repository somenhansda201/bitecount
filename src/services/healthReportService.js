import api from "./api";

export async function getHealthReport() {
  const response = await api.get("/health-report");
  return response.data;
}



export async function downloadHealthReport() {

  const response = await api.get("/health-report/pdf", {
    responseType: "blob",
  });

  return response.data;

}