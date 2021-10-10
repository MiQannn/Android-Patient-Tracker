DROP TABLE IF EXISTS "doctor";
CREATE TABLE "doctor" (
  "doctor_id" varchar(256),
  "doctor_name" varchar(256) NOT NULL,
  "doctor_password" varchar(256) NOT NULL,
  PRIMARY KEY ("doctor_id")
);

DROP TABLE IF EXISTS "patient";
CREATE TABLE "patient" (
  "patient_id" varchar(256),
  "patient_name" varchar(256),
  "patient_age" int,
  "patient_ssn" varchar(256),
  "medical_history" text,
  PRIMARY KEY ("patient_id")
);

DROP TABLE IF EXISTS "treatment";
CREATE TABLE "treatment" (
  "treatment_id" serial unique,
  "patient_id" varchar(256),
  "doctor_id" varchar(256),
  "patient_status" text,
  "patient_diagnosis" text,
  "medicine" text,
  "treatment_day" timestamp default localtimestamp,
  "cost" bigint,
  PRIMARY KEY ("treatment_id"),
  CONSTRAINT "FK_treatment.patient_id"
    FOREIGN KEY ("patient_id")
      REFERENCES "patient"("patient_id"),
  CONSTRAINT "FK_treatment.doctor_id"
    FOREIGN KEY ("doctor_id")
      REFERENCES "doctor"("doctor_id")
);



DROP TABLE IF EXISTS "appointment";
CREATE TABLE "appointment" (
  "appointment_id" serial unique,
  "patient_id" varchar(256),
  "doctor_id" varchar(256),
  "appointment_day" timestamp,
  "appointment_descripton" text,
  PRIMARY KEY ("appointment_id"),
  CONSTRAINT "FK_Appointment.  patient_id"
    FOREIGN KEY ("patient_id")
      REFERENCES "patient"("patient_id"),
  CONSTRAINT "FK_Appointment.doctor_id"
    FOREIGN KEY ("doctor_id")
      REFERENCES "doctor"("doctor_id")
);





