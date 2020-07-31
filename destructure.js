const person = { name: 'Jack William', age: 17, job: 'facebooker', gfName: 'Ema Watson', address: 'Kochu Khet', phone: '01717112211', friends: ['Tom hancks', 'tom cruise', 'Tom yarn'] }

const { address, phone, gfName, salary } = person;
// const gfName = person.gfName;
// const phone = person.phone;

// console.log(gfName, phone, salary, address);
// console.log(gfName, phone, salary, address);


const friends = ['Sakib Khan', 'Arman Khan', 'Aamir Khan', 'Salman Khan', 'sharukh khan'];
const [chotoFriend, ...olderF] = friends;
console.log(olderF)