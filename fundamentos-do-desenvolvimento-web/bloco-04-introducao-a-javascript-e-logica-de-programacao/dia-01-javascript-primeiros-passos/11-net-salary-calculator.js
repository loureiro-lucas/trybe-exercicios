let grossSalary = 3000;
let inss=null;
let ir=null;

if (grossSalary <= 1556.94) {
  inss = 0.08 * grossSalary;
} else if (grossSalary <= 2594.92) {
  inss = 0.09 * grossSalary;
} else if (grossSalary <= 5189.82) {
  inss = 0.11 * grossSalary;
} else {
  inss = 570.88;
};

let inssDeductedSalary = grossSalary - inss;

if (inssDeductedSalary <= 1903.98) {
  ir = 0;
} else if (inssDeductedSalary <= 2826.65) {
  ir = (0.075 * inssDeductedSalary) - 142.8;
} else if (inssDeductedSalary <= 3751.05) {
  ir = (0.15 * inssDeductedSalary) - 354.8;
} else if (inssDeductedSalary <= 4664.68) {
  ir = (0.225 * inssDeductedSalary) - 636.13;
} else {
  ir = (0.275 * inssDeductedSalary) - 869.36;
};

let netSalary = inssDeductedSalary - ir;

console.log(netSalary);
