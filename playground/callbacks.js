const getUser = (id, callback) => {
  const user = {
    id,
    name: 'Suvajit'
  };
  callback(user);
};

getUser(115, (userParam) => {
    console.log(userParam);
  });

console.log('Hello');
