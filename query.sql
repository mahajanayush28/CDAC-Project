-- Doctor

Create table Doctor(D_ID VARCHAR(50) PRIMARY KEY,Name VARCHAR(50),Age INT,Gender VARCHAR(50),
Specialization VARCHAR(50),Experience VARCHAR(50),Language VARCHAR(50),Email VARCHAR(50),
Mobile VARCHAR(50),Date DATE,Time TIME,Consultant_Fee VARCHAR(50));


-- Appointment
create table Appointment(App_ID INT PRIMARY KEY AUTO_INCREMENT,P_ID varchar(50),Specialization varchar(50),
Doctor_Name varchar(50),Consultant_Fee VARCHAR(50),Date DATE,Time TIME);


-- Perscription
create table Prescription(D_ID varchar(50),P_ID varchar(50) ,Medicine varchar(50),
Remark varchar(50),Advice varchar(50));

-- USer Registration
Create table UserReg(Name VARCHAR(50),Email VARCHAR(50) Primary key,Password VARCHAR(50),Role VARCHAR(50));

-- Admin
Create table Admin(A_ID Varchar(50) primary key,Name Varchar(50),DOB Varchar(50),
Gender Varchar(50),Email Varchar(50),Mobile Varchar(50),Address Varchar(50));


-- Patient
create table Patient(P_ID varchar(50),Name varchar(50),
DOB varchar(50),Gender varchar(50),Blood_Group varchar(50),
Email varchar(50),Address varchar(50),Mobile varchar(20),foreign key(Email) references UserReg(Email));

-- Bill
create table Bill(P_ID VARCHAR(50),BillNo INT PRIMARY KEY AUTO_INCREMENT,Date DATE,Time TIME,Status VARCHAR(50),Amount VARCHAR(50),Payment VARCHAR(50));