INSERT INTO "doctor" ("doctor_id", "doctor_name", "doctor_password") VALUES
('DOC1', 'Mathilda', '$2b$10$xcSoOE7nBOSRBiU3IDQlnOnKNIqk2lqjoLRsf31T0b5aJ41XNEL9C'),
('DOC2', 'Jack', '$2b$10$xcSoOE7nBOSRBiU3IDQlnOnKNIqk2lqjoLRsf31T0b5aJ41XNEL9C');

INSERT INTO "patient" ("patient_name", "patient_age", "patient_ssn","medical_history") VALUES
('Jimmy', 22, 'VN032','high blood pressure'),
('Debon', 55, 'US025','lack of love'),
('Jack', 35, 'US025','lack of love'),
('Jacquelin', 45, 'US025','lack of love'),
('Dorothy', 25, 'US025','lack of love'),
('Dacquard', 75, 'US025','lack of love'),
('Jacquard', 85, 'US025','lack of love'),
('Jessy', 85, 'US025','lack of love'),
('Jones', 85, 'US025','lack of love');




INSERT INTO "treatment" ("patient_id", "doctor_id", "patient_status", "patient_diagnosis", "medicine", "treatment_day", "cost") VALUES
('1', 'DOC1', 'Patient health is not good', 'Require surgery', 'Acyclovir,Alemtuzumab', '2022-10-01 20:53:23', '10000000');

INSERT INTO "appointment" ("patient_id","doctor_id", "appointment_day", "appointment_descripton") VALUES
('1', 'DOC1', '2021-10-20 15:54:44', 'Im having backpain'),
('3', 'DOC1', '2022-10-20 15:54:44', 'Im having backpain'),
('4', 'DOC1', '2021-11-27 15:54:44', 'Im having headache'),
('7', 'DOC1', '2021-11-27 15:54:44', 'Im having stomachache'),
('8', 'DOC1', '2021-11-27 15:54:44', 'Im gay'),
('9', 'DOC1', '2021-11-27 15:54:44', 'Im lesbian'),
('1', 'DOC1', '2030-10-20 15:54:44', 'Im having backpain'),
('1', 'DOC1', '2100-10-20 15:54:44', 'Im having backpain'),
('1', 'DOC1', '2121-10-20 15:54:44', 'Im having backpain'),
('1', 'DOC1', '2221-10-20 15:54:44', 'Im having backpain'),
('1', 'DOC1', '2321-10-20 15:54:44', 'Im having backpain'),
('1', 'DOC1', '2019-10-20 15:54:44', 'Im having backpain');

