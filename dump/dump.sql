CREATE TABLE CITY(
    NAME VARCHAR(200) PRIMARY KEY ,
    mail VARCHAR(200),
    password VARCHAR(220),
    latitude INTEGER,
    longitude INTEGER,
    color_flag INTEGER,
    actual_picture VARCHAR(200),
    number_beach INTEGER,
    number_sea INTEGER
);

CREATE TABLE DATA(
    ID INTEGER PRIMARY KEY ,
    CITY VARCHAR(200) REFERENCES CITY(NAME),
    nb_beach INTEGER,
    nb_sea INTEGER,
    time VARCHAR(200),
    precipitation INTEGER,
    temp_beach INTEGER,
    cloud_cover INTEGER,
    wind INTEGER,
    visibility INTEGER,
    cam_visibility INTEGER
);

CREATE TABLE WARNINGS(
    ID INTEGER PRIMARY KEY ,
    CITY VARCHAR(200) REFERENCES CITY(NAME),
    color INTEGER,
    information VARCHAR(220),
    picture VARCHAR(220),
    notif INTEGER
);


/*---INSERT INIT DATA---*/

INSERT INTO DATA(ID) VALUES(0);
INSERT INTO WARNINGS(ID) VALUES (0);
