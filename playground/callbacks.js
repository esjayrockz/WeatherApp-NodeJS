const getUser = (id, callback) => {
  const user = {
    id,
    name: 'Suvajit'
  };
  return callback(user);
};

let user2 = getUser(115, (userParam) => {
  console.log(userParam);
  userParam['newId'] = 2;
  return userParam;
});

console.log('User2', user2);
