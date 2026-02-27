let distance = 1500
if ((distance >= 0) && (distance < 101)) {
    console.log("Pay 5 USD")
}
else if ((distance >= 101) && (distance < 501)) {
    console.log("Pay 10 USD")
}
else if ((distance >= 501) && (distance < 1001 )) {
    console.log("Pay 20 USD")
}
else {
    console.log("Pay 40 USD")
}
