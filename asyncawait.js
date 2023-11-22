// console.log('asyncawait practice');

console.log('Person1: Show ticket')
console.log('Person2: Show ticket')

const preMovie = async () => {

  const promiseWifeBringsTicket = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('ticket');
    }, 3000);
  })

  const getPopcorn = new Promise((resolve, reject) => {
    resolve('got popcorn');
  })


  const getColdDrinks = new Promise((resolve, reject) => {
    resolve('got ColdDrinks')
  })

  let ticket = await promiseWifeBringsTicket;

  console.log(`wife: i had bought the ${ticket}`);
  console.log('husband:Okay,we can go');
  console.log('wife:no im hungry i need some popcorn');

  let popcorn = await getPopcorn;

  console.log(`husband:i had bought ${popcorn}`);
  console.log('husband:anything else needed');
  console.log('wife:yes some cold drinks');

  let coldDrinks = await getColdDrinks;

  console.log(`husband: i had bought ${coldDrinks}`)
  console.log('wife:okay let us go for the movie');

  return ticket;
}

preMovie().then((t) => {
  console.log(`person3: Show ${t}`);
})

console.log('Person4: Show ticket')
console.log('Person5: Show ticket')