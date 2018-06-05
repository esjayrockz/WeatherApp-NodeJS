console.log('Starting app');
setTimeout(() => {
  console.log('Time over');
}, 4000);

setTimeout(() => {
  console.log('Time over again');
}, 3000);

setTimeout(() => {
  console.log('Third timeout works');
}, 0);
let i = 0;
while(i<4000000000)
{
  i++;
}
console.log(i);
console.log('Finishing up');
