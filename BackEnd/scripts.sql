-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 01, 2021 at 03:55 PM
-- Server version: 10.4.18-MariaDB
-- PHP Version: 8.0.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";






CREATE DATABASE IF NOT EXISTS `patient_tracker` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `patient_tracker`;

DROP TABLE IF EXISTS `doctor`;
CREATE TABLE IF NOT EXISTS `doctor` (
  `doctor_id` int UNSIGNED NOT NULL AUTO_INCREMENT,
  `doctor_name` varchar(256) NOT NULL,
  `doctor_expertise` varchar(256) NOT NULL,
  `doctor_password` varchar(256) NOT NULL,
  PRIMARY KEY (`doctor_id`)
);

DROP TABLE IF EXISTS `patient`;
CREATE TABLE `patient` (
  `patient_id` int UNSIGNED NOT NULL AUTO_INCREMENT,
  `patient_name` varchar(256) NOT NULL,
  `patient_age` int NOT NULL,
  `patient_ssn` varchar(256) NOT NULL,
  PRIMARY KEY (`patient_id`)
);

DROP TABLE IF EXISTS `medical_record`;
CREATE TABLE `medical_record` (
  `record_id` int UNSIGNED NOT NULL AUTO_INCREMENT,
  `patient_id` int UNSIGNED NOT NULL ,
  `medical_history` text,
  `day_of_arrival` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `day_leaving` datetime,
  PRIMARY KEY (`record_id`),
  FOREIGN KEY (`patient_id`) REFERENCES `patient`(`patient_id`)
);

DROP TABLE IF EXISTS `treatment`;
CREATE TABLE `treatment` (
  `treatment_id` int UNSIGNED NOT NULL AUTO_INCREMENT,
  `record_id` int UNSIGNED NOT NULL ,
  `doctor_id` int UNSIGNED NOT NULL ,
  `patient_status` text NOT NULL,
  `patient_diagnosis` text NOT NULL,
  `medicine` text,
  `treatment_day` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `cost` float,
  PRIMARY KEY (`treatment_id`),
  FOREIGN KEY (`doctor_id`) REFERENCES `doctor`(`doctor_id`),
  FOREIGN KEY (`record_id`) REFERENCES `medical_record`(`record_id`)
);

DROP TABLE IF EXISTS `appointment`;
CREATE TABLE `appointment` (
  `appointment_id` int UNSIGNED NOT NULL AUTO_INCREMENT,
  `patient_id`   int UNSIGNED NOT NULL,
  `appointment_day` datetime NOT NULL,
  `appointment_descripton` varchar(256),
  PRIMARY KEY (`appointment_id`),
  FOREIGN KEY (`patient_id`) REFERENCES `patient`(`patient_id`)
);





INSERT INTO `doctor` (`doctor_id`, `doctor_name`, `doctor_expertise`, `doctor_password`) VALUES
(1, 'Mathilda', 'Ophthalmology', 'password'),
(2, 'Jack', 'Traumatology', 'password');

INSERT INTO `patient` (`patient_id`, `patient_name`, `patient_age`, `patient_ssn`) VALUES
(1, 'Jimmy', 22, 'VN032'),
(2, 'Debon', 55, 'US025');

INSERT INTO `medical_record` (`record_id`, `patient_id`, `medical_history`, `day_of_arrival`, `day_leaving`) VALUES
(1, 1, 'Fatigue,Diabetes', '2021-10-01 20:50:29', '0000-00-00 00:00:00'),
(2, 2, 'Obesity', '2021-10-01 20:51:56', '0000-00-00 00:00:00');

INSERT INTO `treatment` (`treatment_id`, `record_id`, `doctor_id`, `patient_status`, `patient_diagnosis`, `medicine`, `treatment_day`, `cost`) VALUES
(1, 1, 1, 'Patient health is not good', 'Require surgery', 'Acyclovir,Alemtuzumab', '2021-10-01 20:53:23', NULL);

INSERT INTO `appointment` (`appointment_id`, `patient_id`, `appointment_day`, `appointment_descripton`) VALUES
(1, 1, '2021-10-20 15:54:44', 'Im having backpain');
