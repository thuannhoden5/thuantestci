let sum = Number(prompt('Nhap tong so phan tu cua day, chan tu 4 - 20'));
let number = Number(prompt('Nhap so can tim so doi dien cua no'))
let oppositeNumber;
console.log(typeof(sum))



function findOpposite(sum, number) {
    if (number < (sum / 2)) {
        oppositeNumber = sum / 2 + number;
        alert(oppositeNumber)
    } else if (number > (sum / 2)) {
        oppositeNumber = sum / 2 - (sum - number)
        alert(oppositeNumber)
    } else {
        oppositeNumber = sum / 2
        alert(oppositeNumber)
    }
}
findOpposite(sum, number)