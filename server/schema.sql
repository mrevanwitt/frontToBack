create table products(
  id serial primary key not null,
  name varchar(70),
  description varchar(100),
  price money,
  type varchar(20)
);

create table cart(
  id serial primary key not null,
  product_id int references products
);

create table users(
  id serial primary key not null,
  firstName varchar(30),
  lastName varchar(30)
);
