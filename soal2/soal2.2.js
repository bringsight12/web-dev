const data = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
};

const newData = {
  ...data,
  name: "Muhammad Ikhsan Khaerudin",
  email: "mhmmdikhsaanz@gmail.com",
  hobby: "games",
};

console.log(newData);

const {
  address: { street, city },
} = data;

console.log(street);
console.log(city);
