DROP TABLE IF EXISTS "doctor";
CREATE TABLE IF NOT EXISTS "doctor" (
  "doctor_id" int NOT NULL,
  "doctor_name" varchar(256) NOT NULL,
  "doctor_expertise" varchar(256) NOT NULL,
  "doctor_password" varchar(256) NOT NULL,
  PRIMARY KEY ("doctor_id")
);

DROP TABLE IF EXISTS "patient";
CREATE TABLE "patient" (
  "patient_id" int NOT NULL,
  "patient_name" varchar(256) NOT NULL,
  "patient_age" int NOT NULL,
  "patient_ssn" varchar(256) NOT NULL,
  PRIMARY KEY ("patient_id")
);

DROP TABLE IF EXISTS "medical_record";
CREATE TABLE "medical_record" (
  "record_id" int NOT NULL,
  "patient_id" int NOT NULL ,
  "medical_history" text,
  "day_of_arrival" timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "day_leaving" timestamp,
  PRIMARY KEY ("record_id"),
  FOREIGN KEY ("patient_id") REFERENCES "patient"("patient_id")
);

DROP TABLE IF EXISTS "treatment";
CREATE TABLE "treatment" (
  "treatment_id" int NOT NULL,
  "record_id" int NOT NULL ,
  "doctor_id" int NOT NULL ,
  "patient_status" text NOT NULL,
  "patient_diagnosis" text NOT NULL,
  "medicine" text,
  "treatment_day" timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "cost" float,
  PRIMARY KEY ("treatment_id"),
  FOREIGN KEY ("doctor_id") REFERENCES "doctor"("doctor_id"),
  FOREIGN KEY ("record_id") REFERENCES "medical_record"("record_id")
);

DROP TABLE IF EXISTS "appointment";
CREATE TABLE "appointment" (
  "appointment_id" int NOT NULL,
  "patient_id"   int NOT NULL,
  "appointment_day" timestamp NOT NULL,
  "appointment_descripton" varchar(256),
  PRIMARY KEY ("appointment_id"),
  FOREIGN KEY ("patient_id") REFERENCES "patient"("patient_id")
);