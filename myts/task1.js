var n = 15;
var i;
for (i = 2; i < n; i++) {
    if (n % i == 0) {
        console.log("Number not prime");
        break;
    }
}
if (n == i)
    console.log("Number prime");
