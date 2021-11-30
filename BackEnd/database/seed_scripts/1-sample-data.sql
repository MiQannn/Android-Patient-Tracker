/* DOCTOR DATA */
INSERT INTO "doctor" ("doctor_id", "doctor_name", "doctor_password") VALUES
('doc1', 'Tran Van Sy', '$2b$10$xcSoOE7nBOSRBiU3IDQlnOnKNIqk2lqjoLRsf31T0b5aJ41XNEL9C'),
('doc2', 'Vo Thanh Nhan', '$2b$10$xcSoOE7nBOSRBiU3IDQlnOnKNIqk2lqjoLRsf31T0b5aJ41XNEL9C'),
('doc3', 'Nguyen Thi Trang', '$2b$10$xcSoOE7nBOSRBiU3IDQlnOnKNIqk2lqjoLRsf31T0b5aJ41XNEL9C'),
('doc4', 'Tran Le Yen Nhi', '$2b$10$xcSoOE7nBOSRBiU3IDQlnOnKNIqk2lqjoLRsf31T0b5aJ41XNEL9C'),
('doc5', 'Nguyen Van Vinh', '$2b$10$xcSoOE7nBOSRBiU3IDQlnOnKNIqk2lqjoLRsf31T0b5aJ41XNEL9C'),
('doc6', 'Cao Van Sang', '$2b$10$xcSoOE7nBOSRBiU3IDQlnOnKNIqk2lqjoLRsf31T0b5aJ41XNEL9C'),
('doc7', 'Le Quoc Viet', '$2b$10$xcSoOE7nBOSRBiU3IDQlnOnKNIqk2lqjoLRsf31T0b5aJ41XNEL9C'),
('doc8', 'Eugene Braunwuld', '$2b$10$xcSoOE7nBOSRBiU3IDQlnOnKNIqk2lqjoLRsf31T0b5aJ41XNEL9C');

/* PATIENT DATA */
INSERT INTO "patient" ("patient_name", "patient_age", "patient_ssn","medical_history") VALUES
('Nguyen Thi Thuy', 21, '001500125352','dysrhythmias'),
('Cao Tan Phat ', 60, '001500121352','cerebral aneurysm'),
('Tran Le Tien Phat', 75, '001503125352','hypotension'),
('Dao Thi My Linh', 32, '001500122352','hypertension'),
('Tran Van Trong', 40, '001500825352','diabete'),
('Mai Van Vinh', 45, '001500125552','epilepsy'),
('Nguyen Duy Manh', 42, '001500125552','stroke'),
('Dam Vinh Hung', 35, '001500125342','lung cancer'),
('Nguyen Thanh Tung',32 , '001500125354','cardiac arrest');

/* APPOINTMENT DATA */
INSERT INTO "appointment" ("patient_id","doctor_id", "appointment_day", "appointment_descripton") VALUES
('1', 'doc1', '2021-11-27 15:54:44', 'Cannot breath properly'),
('2', 'doc2', '2021-11-30 15:54:44', 'Cannot staying conscious'),
('3', 'doc1', '2021-12-08 15:54:44', 'Severe headache'),
('4', 'doc1', '2021-12-29 15:54:44', 'Severe stomachache'),
('5', 'doc3', '2021-02-27 15:54:44', 'Cannot walk normally'),
('6', 'doc4', '2022-01-01 15:54:44', 'Heavy breathing'),
('7', 'doc8', '2021-03-22 15:54:44', 'Chest pain');

/* TREATMENT DATA */
INSERT INTO "treatment" ("patient_id", "doctor_id", "patient_status", "patient_diagnosis", "medicine", "treatment_day", "cost") VALUES
('1', 'doc1', 'Patient cannot breath properly', 'Need further inspection', 'Acyclovir,Alemtuzumab', '2021-11-27 15:54:44', '10000000'),
('5', 'doc3', 'Patient cannot walk normally, fainting', 'Need X-ray', 'No', '2021-02-27 15:54:44', '5000000'),
('7', 'doc8', 'Patient has pain in the chest', 'Patient have COVID-19', 'Kineret,Lagevrio,Olumiant,RoActemra,Xevudy', '2021-03-22 15:54:44', '100000000');




