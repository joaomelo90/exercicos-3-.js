const list = [
    { name: "Rodolfo", vip: true },
    { name: "Maria", vip: false },
    { name: "Joâo", vip: true },
    { name: "Bruno", vip: true },
    { name: "Carla", vip: false },
    { name: "Ana", vip: true },
    { name: "Julio", vip: false },
]
const newList = list.map(client => {
    const newList = {
        nome: client.name,
        vip: client.vip,
        sector: client.vip ? 'Black' : 'Green'
    }
    return newList
}
)

//console.log(newList)


const students = [
    { name: "Rodolfo", testGrade: 7 },
    { name: "Maria", testGrade: 5 },
    { name: "Joâo", testGrade: 8 },
    { name: "Bruno", testGrade: 9 },
    { name: "Carla", testGrade: 3 },
    { name: "Ana", testGrade: 2 },
    { name: "Julio", testGrade: 10 },
]

const test = students.map( student =>{
let aprovad
if( student.testGrade >= 5){
    aprovad = 'Aprovado'}
    else{
        aprovad = 'Reprovado'
    }

    const students = {
        name: student.name,
        result: aprovad
    }
return students
}

)
//console.log(test)

//filter

const listOne= [20,3,234,12,17,541,6,87,275,1000]  //apenas os numeros pares e divisiveis por 5

const exercicio= listOne.filter( number => { //para descobrir se o numero e par e so dividir por 2 o que sobrar e impar
    return number % 2 === 0 && number % 5 === 0 ;//if (number % 2 !== 0) return false
})                                               //if(number % 5  !== 0) returne false
//console.log(exercicio)//20,1000                // retun true


const companies = [// novo arrey empresas fundadas depois de 1975 e que tenha mais de 2 milhoes de dolares de mercado
    { name:'Samsung', marketValue: 50, ceo: 'Kim Hyun Suk', foundedon: 1938},
    { name:'Microsoft', marketValue: 415, ceo: 'Satya Nadella', foundedon: 1975},
    { name:'Intel', marketValue: 117, ceo: 'Brian Krzanich', foundedon: 1968},
    { name:'Facebook', marketValue: 383, ceo: 'Nark Zuckerberg', foundedon: 2004},
    { name:'Spotify', marketValue: 30, ceo: 'Daniel EK', foundedon: 2006},
    { name:'Aplle', marketValue: 845, ceo: 'Tim Cook', foundedon: 1976},
]

const newCompanies= companies.filter( companie =>{
    return companie.foundedon >= 1975 && companie.marketValue >= 200
})

//console.log(newCompanies)

const sum = companies.reduce((acc, current) => {
    return  acc + current.marketValue
},0)

//console.log(sum)


//adicionar 10 % do valor meryvelue , filtar apenas as empresas fundadas antes do ano 2000, somar o valor de mercado 

const acrecimo = companies => {
    companies.marketValue = companies.marketValue + companies.marketValue / 10
    return companies
}
const filtro = companies => companies.foundedon < 2000
const soma = (acc,current) => acc +  current.marketValue

const result = companies.map(acrecimo).filter(filtro).reduce(soma,0)


console.log(result)