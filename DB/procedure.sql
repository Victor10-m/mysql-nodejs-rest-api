CREATE DEFINER=`root`@`localhost` PROCEDURE `empleadoAddOrEdit`(
in _id int,
in _name varchar(45),
in _salary int 
)
begin
if _id = 0 then
insert into empelados (name, salary)
value (_name, _salary);
set _id = last_insert_id();
else
update empelados
set 
name = _name,
salary = _salary
where id = _id;
end if;
select _id as id;
end