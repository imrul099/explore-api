function loadData2(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayUser(data))
};


function displayUser(dat){
    console.log(dat);
}