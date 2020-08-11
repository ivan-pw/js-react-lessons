let num = 50;

if (num < 49) {
    console.log("no")
} else if (num > 100) {
    console.log("mnogo");
} else {
    console.log("verno")
}

num == 50 ? console.log("verno") : console.log("no");

switch (num) {
    case num < 49:
        console.log('verno');
        break;
    case num > 100:
        console.log('mnogo');
        break;
    case num > 80:
        console.log('mnogo');
        break;
    case 50:
        console.log('ok');
        break;
    default:
        console.log('def');
        break;
}
/*
while (num < 55) {
    console.log(num);
    num++;
}
*/

do {
    console.log(num)
    num++;
}
while (num < 55)

console.log(num)


for (let i = 1; i < 8; i++) {
    if (i == 6)
        continue;
    console.log(i);
}