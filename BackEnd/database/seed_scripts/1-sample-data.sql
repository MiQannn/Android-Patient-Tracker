INSERT INTO "doctor" ("doctor_id", "doctor_name", "doctor_expertise", "doctor_password") VALUES
(1, 'Mathilda', 'Ophthalmology', 'password'),
(2, 'Jack', 'Traumatology', 'password');

INSERT INTO "patient" ("patient_id", "patient_name", "patient_age", "patient_ssn") VALUES
(1, 'Jimmy', 22, 'VN032'),
(2, 'Debon', 55, 'US025');

INSERT INTO "medical_record" ("record_id", "patient_id", "medical_history", "day_of_arrival", "day_leaving") VALUES
(1, 1, 'Fatigue,Diabetes', '2021-10-01 20:50:29', '2021-10-01 00:00:00'),
(2, 2, 'Obesity', '2021-10-01 20:51:56', '2021-10-01 00:00:00');

INSERT INTO "treatment" ("treatment_id", "record_id", "doctor_id", "patient_status", "patient_diagnosis", "medicine", "treatment_day", "cost") VALUES
(1, 1, 1, 'Patient health is not good', 'Require surgery', 'Acyclovir,Alemtuzumab', '2022-10-01 20:53:23', NULL);

INSERT INTO "appointment" ("appointment_id", "patient_id", "appointment_day", "appointment_descripton") VALUES
(1, 1, '2021-10-20 15:54:44', 'Im having backpain');
