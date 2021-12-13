import client from "./axiosClient";

export const getPatientByID = async (patientId) => {
  return (await client.get("/api/patient", { params: { patientId } }))[0];
};

export const getPatientByName = async (patientName) => {
  return await client.get("/api/patient", { params: { patientName } });
};

export const registerPatient = async (
  patientName,
  patientAge,
  patientSSN,
  medicalHistory
) => {
  return await client.post("/api/patient", {
    patientName,
    patientAge,
    patientSSN,
    medicalHistory,
  });
};
