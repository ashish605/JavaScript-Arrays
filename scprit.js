let a = [1, 2, 3, 4, 5]
// console.log(a)
// console.log(a.length)
// for (const i of a) {
//     console.log(i)

// }

// a[1]="ashish"
// console.log(a)

// console.log(a.join(" and "))

// console.log(a.pop())
// console.log(a.shift())

// console.log(a.push(90))
// console.log(a)
// console.log(a.unshift(34))
// console.log(a)

// delete a[2]
// console.log(a)


// let c=[1,2,3,4,5]
// let q=[1,2,34,4,34,2]

// console.log(a.concat(c,q))
// a.sort()
// console.log(a.sort())
// console.log(a.concat(c,q))
// num.splice(2,2,33,44)
// console.log(num)

// console.log(num.slice(3))
// console.log(num.slice(1,5))
// console.log(num.reverse())


// for(let i=0;i<=num.length;i++)
//     {
//         console.log(i)
//     }


// num.forEach((value,index,num) => {
//     console.log(value,">",index,num)

// });

// let o = {
//     a: 1,
//     b: 2,
//     c: 3

// }
 
// for (const key in o) {
//     if (o.hasOwnProperty.call(o, key)) {
//         const element = o[key];
//         console.log(key,element)
        
//     }
// }


// for (const i of num) {

//     console.log(i)
    
// }

//make a new arraay from existing one which contain its square value
const num = [1, 2, 3, 4, 5, 6]

//  const new_num=[]
// for (let index = 0; index < num.length; index++) {
//     const element = num[index];
//     new_num.push(index**2)

    
// }
// console.log(new_num)

//it can be either done by map funcation

// let num_new=num.map((e)=>{
//     return e**2
// }
// )

// console.log(num_new)

// const greaterthanseven=(e)=>{

//     if(e>7){
//         return true
//     }
//     return false

// }

// // console.log(num_new.filter(greaterthanseven))
// console.log(num_new.filter(e>7))


function addtion(b)
{
    let sum=1;
       for(let n=0;n<=b.length-1;n++)
        {
            sum=sum*b[n]
        } 
       console.log(sum)
}


const b=[1,2,3,4,5]
addtion(b)


