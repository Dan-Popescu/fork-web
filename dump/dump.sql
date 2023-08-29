CREATE TABLE CITY(
    ID INTEGER PRIMARY KEY ,
    mail VARCHAR(200),
    password VARCHAR(220),
    name VARCHAR(200),
    latitude INTEGER,
    longitude INTEGER,
    color_flag INTEGER,
    actual_picture VARCHAR(200)
);

CREATE TABLE DATA(
    ID INTEGER PRIMARY KEY ,
    CITY INTEGER REFERENCES CITY(ID),
    nb_beach INTEGER,
    nb_sea INTEGER,
    time DATE,
    temp_sea INTEGER,
    temp_beach INTEGER,
    swell INTEGER,
    wind INTEGER,
    visibility INTEGER,
    camp_visibility INTEGER
);

CREATE TABLE WARNINGS(
    ID INTEGER PRIMARY KEY ,
    CITY INTEGER REFERENCES CITY(ID),
    color INTEGER,
    information VARCHAR(220),
    picture VARCHAR(220)
);
