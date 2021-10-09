INSERT INTO "doctor" ("doctor_name", "doctor_expertise", "doctor_password") VALUES
('Mathilda', 'Ophthalmology', 'password'),
('Jack', 'Traumatology', 'password');

INSERT INTO "patient" ("patient_name", "patient_age", "patient_ssn","medical_history") VALUES
('Jimmy', 22, 'VN032',"high blood pressure"),
('Debon', 55, 'US025'," lack of love");

INSERT INTO "treatment" ("patient_id", "doctor_id", "patient_status", "patient_diagnosis", "medicine", "treatment_day", "cost") VALUES
(1, 1, 'Patient health is not good', 'Require surgery', 'Acyclovir,Alemtuzumab', '2022-10-01 20:53:23', "10000000");

INSERT INTO "appointment" ("patient_id","doctor_id" "appointment_day", "appointment_descripton") VALUES
(1, 1, '2021-10-20 15:54:44', 'Im having backpain');
