import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Arun Kumar',
    email: 'arun@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Dinesh',
    email: 'dinesh@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
