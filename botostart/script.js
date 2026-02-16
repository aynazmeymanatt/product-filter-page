// const data = {
// {
//     identity : {
//     name : "aynaz" ;
//     lastName : "meymanat";
//     age : 20 ;
//     skills : "somethinge"
//     }
// }

// }


const generateRandom = (min , max) => {
 const finalNumber =Math.trunc(Math.random() * (max - min )) + min + 1;
 return finalNumber;
}

console.log(generateRandom(5 , 9));
