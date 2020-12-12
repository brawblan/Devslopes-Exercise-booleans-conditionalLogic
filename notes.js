// JavaScript Comparison Operators

// == equal to
// != not equal to
// > greater than
// > less than
// >= greater than or equal to
// <= less than or equal to

var currentAccountBalance = 74.98;
var purchase = 74.99;
var freeLavaLampVoucher = true;

if (purchase <= currentAccountBalance) {
  console.log('Lava lamps for days...');
} else if (freeLavaLampVoucher) {
  console.log('Free stuff rocks!!');
} else {
  console.log('You broke bruv...');
}

// // // // // // // // // // // // // // // //
// JavaScript Logical Operators

// && and
// || or
// ! not

var skater1 = 9.5;
var skater2 = 9;
var skater3 = 9;
var isJackedUpOnCaffeine = true;

if (skater2 < skater3 && skater2 <= skater1 && skater1 < 100) {
  console.log('Move skater2 into next round');
} else if (skater3 < skater2 || skater3 === skater2 && skater2 < skater1 && !isJackedUpOnCaffeine) {
  console.log('skater3 is steppin up their game!');
} else if (skater3 > 5 && isJackedUpOnCaffeine) {
  console.log('skater3 takes home the Gold!');
} else {
  console.log('idek man....');
}

console.log();