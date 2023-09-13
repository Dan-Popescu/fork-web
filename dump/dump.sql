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
    camp_visibility INTEGER
);

CREATE TABLE WARNINGS(
    ID INTEGER PRIMARY KEY ,
    CITY VARCHAR(200) REFERENCES CITY(NAME),
    color INTEGER,
    information VARCHAR(220),
    picture VARCHAR(220),
    notif INTEGER
);


/*---INSERT DATA---*/

INSERT INTO CITY(NAME, mail, password, latitude, longitude, color_flag, actual_picture, number_beach, number_sea) VALUES ('Test','victordalet@protonmail.com','',49,2.23,'green','',0,0,0);
INSERT INTO DATA(ID,CITY) VALUES(0,'Test');
INSERT INTO WARNINGS(ID, CITY) VALUES (0,'Test');
