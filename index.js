// change the values of `balance`, `checkBalance`, and `isActive` to test your code
const balance = 325.0;
const checkBalance = false;
const isActive = true;

// your code goes here

if (checkBalance === true) {
  console.log("👍👍");
}
if (isActive === true) {
  console.log(`your balance is ${balance}`);
} else if (isActive === false) {
  console.log("your account is not active");
} else if ((balance = 0)) {
  console.log("your account is empty");
} else if (balance < 0) {
  console.log("your balance is negative plz contact the bank");
} else {
  console.log("have a nice day");
}
