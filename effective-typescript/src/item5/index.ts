namespace Item5 {
let ageInYears: number;
ageInYears = '12' as any;  // OK
ageInYears += 1;  // OK; at runtime, ageInYears is now "121". This is bad!!!
console.log(ageInYears);
}