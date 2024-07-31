//  async function imrul(){
//     return 122624
//  };

//  const result = imrul();
//  console.log(result)

const a = 10;
const b = 20;

console.log('sabbas  bangladesh');

const sum = a + b;
 
const test = async() => {
    const response = await fetch("https://openapi.programming-hero.com/api/news/category/01");

    console.log(response)
}

test()

console.log(sum)