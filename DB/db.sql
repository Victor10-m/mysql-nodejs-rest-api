create database company;

use company;

create table empelados(
id int (11) not null auto_increment,
name varchar(45) default null,
salary int (11) default null,
primary key (id)
);