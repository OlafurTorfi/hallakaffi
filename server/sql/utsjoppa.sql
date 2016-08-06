create table utsjoppa (
    USERID   DECIMAL(15,0),
    HREYFING SMALLINT,
    DAGS     TIMESTAMP,
    PRIMARY KEY(USERID,DAGS)
);
