const yourFullName = () => "Juan David Omen";
const fullName = yourFullName();
console.log(fullName);


const isBolean = (bolean) => console.log(bolean);
isBolean(true);

const infiniteResults = (...infints) => infints.forEach(element => console.log(element));
infiniteResults(1,2,3,4,5,6);
