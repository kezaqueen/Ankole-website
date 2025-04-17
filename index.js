function check(numbers){
    return numbers.map((item)=>{
        if(item>0){
            return "positive"
        }
        else if(item<0){
            return "negative"
        }
        else{
            return "zero"
        }
    })
}
console.log(check([0,1,-1]))
function records(steps){
   return steps.map(eachstep => 
    eachstep*2)
} 
console.log(records([1,3,4,5,6]))
function multiples4(numbers){
    let multiples= []
    numbers.map(num=>{
        if(num%4 ===0){
            multiples.push(num)
        }
      
    })
    return multiples
}
console.log(multiples4([2,4,16,7,8]))

function courseDup(arr){
    let duplicate =[]
    arr.map((num , index )=>{
        if(arr.indexOf(num) !== index){
            duplicate.push(num)
        }
    })
    return duplicate
}

console.log(courseDup(["english", "english","maths","ent"]))
 
function check(introduction){
    let b=[]
    introduction.map(introdu=>{
        if(introdu.startsWith("intro")){
            b.push(introdu)
        }
    })
    return b
}
console.log(check(["introfuction","intro","fun"]))