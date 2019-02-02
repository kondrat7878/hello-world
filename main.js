console.log('Hello Branch');
console.log("Hi");
let companies = [
    {name:"Compamy One" , category: "Finance" ,start: 1981 , end: 2004},
    {name:"Company Two", category:"Retail", start:1992, end:2008},
    {name:"Company Three", category:"Auto", start:1999, end:2007},
    {name:"Company Four",catecory:"Technology",start:2009, end:2014},
    {name:"Company Five", category:"Finance", start:1987, end:2010},
    {name:"Company Six", catecory:"Auto",start:1986, end:1996},
    {name:"Company Seven",catecory:"Auto",start:1986, end:1996},
    {name:"Company Eight", catecory:"Technology", start:2011, end:2016},
    {name:"Company Nine", catecory:"Retail", start:1981, end:1989}
];
const ages = [33 ,12 ,20 , 16 , 5 , 54 , 21 , 44 , 61 , 13 , 15 , 45  ,25 ,64 , 32];


//forEach 

console.log('forEach function');

for(let i = 0; i < companies.length; i++){
    console.log(companies[i]);
}


//filter array
console.log('filter arr');


let canDrink = [];
for(let i = 0; i< ages.length; i ++){
    if(ages[i] >= 21){
        canDrink.push(ages[i]);
    }
}
console.log(canDrink);



let canDrink_filter =ages.filter(age => {
    if(age >= 21){
        return true;
    }
})
console.log(canDrink_filter);

let canDrink_filter_arrow = ages.filter(age => age >= 21);
console.log(canDrink_filter_arrow);

//filter {}
console.log('filter arr');

let retailCompanies = companies.filter(company => {
    if(company.catecory === "Retail"){
        return true;
    }
});
console.log(retailCompanies);

let AutoCompanies = companies.filter(company => {
    if(company.category === 'Auto'){
        return 1;
    }
});
console.log(AutoCompanies);

let FinanceCompany = companies.filter(company => company.category === "Finance");
console.log(FinanceCompany);

//filter start work to 1990

let eigthiesCompanies = companies.filter(company => (company.start >= 1980 && company.start < 1990));
console.log(eigthiesCompanies);

//filter work more 10 ears

let lastedTenYears = companies.filter(company => (company.end - company.start >= 10));
console.log(lastedTenYears);

//map company name:
console.log('map company name:');

let companyName = companies.map(function(company){
    return company.name;
});
console.log(`company Name is: ${companyName}`);

let TestMap =companies.map(company => {
    return `company name: ${company.name} start work: ${company.start} end of work: ${company.end}`;
});
console.log(TestMap);

let TestMap_1 = companies.map(company => `${company.name} [${company.start} - ${company.end}]`);
console.log(TestMap_1);

// use two function map []

let ageMap = ages
    .map(age => Math.sqrt(age))
    .map(age => age * 2);
console.log(ageMap);

//sort []

//sort start
console.log('sort arr start');
let sortedCompanis = companies.sort(function(c1 ,c2){
    if(c1.start > c2.start){
        return 1;
    }else{
        return -1;
    }
});
console.log(sortedCompanis);

let sortedCompanis_1 = companies.sort((a , b) => (a.start > b.start ? 1 : -1));
console.log(sortedCompanis_1);
//sort end
console.log('sort arr end');
let sortedCompanis_2 = companies.sort((a , b) => (a.end > b.end ? 1: -1));
console.log(sortedCompanis_2);

//sort ages up
console.log('sort ages up');
let sortAges = ages.sort((a , b) => a - b );
console.log(sortAges);

//sort ages doun
console.log('sort ages doun');
let sortAges_1 = ages.sort((a , b) => b - a);
console.log(sortAges_1);


//reduce 

console.log('reduce arr');
let ageSum = 0;
for(let i = 0; i < ages.length; i++){
    ageSum += ages[i];
}
console.log(ageSum);

let ageSum_1 = ages.reduce(function(acc , age){
    return acc + age;
}, 0);
console.log(ageSum_1);

let ageSum_2 = ages.reduce((acc , age) => acc + age , 0);
console.log(ageSum_2);

//reduce obj

console.log('reduce obj: total years');

let totalYears = companies.reduce(function(acc , value){
    return acc + (value.end - value.start);
}, 0);
console.log(totalYears);

let totalYears_1 = companies.reduce((acc , value) => acc +(value.end - value.start), 0);
console.log(totalYears_1);

//combined metods :map ,filter , sort , reduce
console.log('Combined metods : map, filter , sort ,reduce');

let combined = ages
    .map(age => age * 2)
    .filter(age => age >= 40)
    .sort((a ,b ) => a - b)
    .reduce((acc , value) => acc + value , 0);
console.log(combined);    