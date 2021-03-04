
console.log('A.1 _________________________________');

function calTip(bill){
    const billAmount = Number(bill);

    if (billAmount >= 50 && billAmount <= 300){
        return billAmount * .15;
    } else{
        return billAmount * .20;
    }

}

(calTip(100));
console.log(`tip for 100 is $${calTip(100)}`);

var billsData = new Array (125, 555, 44)
var tipsTotal = new Array(calTip(billsData[0]), calTip(billsData[1]), calTip(billsData[2]))
var totalBT = new Array(billsData[0] + tipsTotal[0], billsData[1] + tipsTotal[1],  billsData[2] + tipsTotal[2])

console.log(`Bill only $${billsData[0]}: Bill + Tip =  $${totalBT[0]}`);
console.log(`Bill only $${billsData[1]}: Bill + Tip = $${totalBT[1]}`);
console.log(`Bill only $${billsData[2]}: Bill + Tip = $${totalBT[2]}`);


// extra
document.getElementById("tip1").innerHTML = `$${calTip(100)} tip`;
document.getElementById("tip2").innerHTML = `Bill only $${billsData[0]}: Bill + Tip =  $${totalBT[0]}`;
document.getElementById("tip3").innerHTML = `Bill only $${billsData[1]}: Bill + Tip = $${totalBT[1]}`;
document.getElementById("tip4").innerHTML = `Bill only $${billsData[2]}: Bill + Tip = $${totalBT[2]}`;




console.log('A.2 _________________________________');


const john = {
    firstName: 'John',
    lastName: 'Willams',
    major: 'CS',
    birthYear: 1996,
    job: 'student',
    friends: ['Mike ', ' Jack', ' Peter'],
    calAge: function () {
        this.age = 2021 - this.birthYear;
        return this.age
    },
   
    getSummary: function () {
        document.getElementById("getSummary").innerHTML =  `${this.firstName} ${this.lastName} is a ${this.calAge()} year old ${this.job} at QC, mayoring in ${this.major}. He has been working in multiple projects with his friends ${this.friends}. He ${this.hasDriverLicence ? `does`: `doesn't`} have a drivers licence yet.`;
        return `${this.firstName} ${this.lastName} is a ${this.calAge()} year old ${this.job} at QC, mayoring in ${this.major}. He has been working in multiple projects with his friends ${this.friends}. He ${this.hasDriverLicence ? `does`: `doesn't`} have a drivers licence yet.`;
        }
    }

console.log(john.getSummary());




console.log('A.3 _________________________________');


const johnsInfo = {
    firstName: 'John',
    lastName: 'Willams',
    mass: 78,
    height: 1.69,
    getSummary: function () {
        return `${this.firstName} ${this.lastName} total BMI is ${bmiFormula} `;
        }
}

bmiFormula = (johnsInfo.mass / (johnsInfo.height ** 2)).toFixed(2)
jhonBmi = bmiFormula
document.getElementById("jhonBmi").innerHTML = `John Smith's BMI is ${jhonBmi}`
console.log(johnsInfo.getSummary());


const lucasInfo = {
    firstName: 'Lucas',
    lastName: 'Miller',
    mass: 92,
    height: 1.95,
    getSummary: function () {
        return `${this.firstName} ${this.lastName} total BMI is ${bmiFormula} `;
        }
}

bmiFormula = (lucasInfo.mass / (lucasInfo.height ** 2)).toFixed(2)
lucasBmi = bmiFormula
document.getElementById("lucasBmi").innerHTML = `Lucas Miller's BMI is ${lucasBmi}`
console.log(lucasInfo.getSummary());


if (lucasBmi < jhonBmi){
        console.log(`${johnsInfo.firstName} has a Higher BMI than ${lucasInfo.firstName}`);
        document.getElementById("higher").innerHTML = `${johnsInfo.firstName} has a Higher BMI than ${lucasInfo.firstName}`
} else {
        console.log(`${lucasInfo.firstName} has a Higher BMI than ${johnsInfo.firstName}`);
        document.getElementById("lower").innerHTML = `${lucasInfo.firstName} has a Higher BMI than ${johnsInfo.firstName}`
}


console.log('A.4 _________________________________');


let totalBillAmount = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
let totalTips = [];
let totalBillTip = [];

for (let i = 0; i < totalBillAmount.length; i ++){
    let tip = calTip(totalBillAmount[i])
    totalTips.push(` $${tip}`);
    let addition = tip + totalBillAmount[i];
    totalBillTip.push(` $${addition}`)
}

console.log(totalTips);
console.log(totalBillTip);

document.getElementById("billAmount").innerHTML = ` ${totalBillAmount}`
document.getElementById("tipPercentage").innerHTML = `${totalTips}`
document.getElementById("totalAmount").innerHTML = `${totalBillTip}`

// 1
document.getElementById("bill1").innerHTML = `$${totalBillAmount[0]}`
document.getElementById("tipA").innerHTML = `${totalTips[0]}`
document.getElementById("btip1").innerHTML = `${totalBillTip[0]}`
// 2
document.getElementById("bill2").innerHTML = `$${totalBillAmount[1]}`
document.getElementById("tipB").innerHTML = `${totalTips[1]}`
document.getElementById("btip2").innerHTML = `${totalBillTip[1]}`
// 3
document.getElementById("bill3").innerHTML = `$${totalBillAmount[2]}`
document.getElementById("tipC").innerHTML = `${totalTips[2]}`
document.getElementById("btip3").innerHTML = `${totalBillTip[2]}`
// 4
document.getElementById("bill4").innerHTML = `$${totalBillAmount[3]}`
document.getElementById("tipD").innerHTML = `${totalTips[3]}`
document.getElementById("btip4").innerHTML = `${totalBillTip[3]}`
// 5
document.getElementById("bill5").innerHTML = `$${totalBillAmount[4]}`
document.getElementById("tipE").innerHTML = `${totalTips[4]}`
document.getElementById("btip5").innerHTML = `${totalBillTip[4]}`
// 6
document.getElementById("bill6").innerHTML = `$${totalBillAmount[5]}`
document.getElementById("tipF").innerHTML = `${totalTips[5]}`
document.getElementById("btip6").innerHTML = `${totalBillTip[5]}`
// 7
document.getElementById("bill7").innerHTML = `$${totalBillAmount[6]}`
document.getElementById("tipG").innerHTML = `${totalTips[6]}`
document.getElementById("btip7").innerHTML = `${totalBillTip[6]}`
// 8
document.getElementById("bill8").innerHTML = `$${totalBillAmount[7]}`
document.getElementById("tipH").innerHTML = `${totalTips[7]}`
document.getElementById("btip8").innerHTML = `${totalBillTip[7]}`
// 9
document.getElementById("bill9").innerHTML = `$${totalBillAmount[8]}`
document.getElementById("tipI").innerHTML = `${totalTips[8]}`
document.getElementById("btip9").innerHTML = `${totalBillTip[8]}`
// 10
document.getElementById("bill10").innerHTML = `$${totalBillAmount[9]}`
document.getElementById("tipJ").innerHTML = `${totalTips[9]}`
document.getElementById("btip10").innerHTML = `${totalBillTip[9]}`
