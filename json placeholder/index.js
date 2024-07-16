function loadData3(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayData3(data))
};

function displayData3(users){
    const ul = document.getElementById('user-list');
    for(const user of users){
        const liName = user.name;
        // console.log(user.name);
        const li = document.createElement('li');
        li.innerText = liName;
        ul.append(li)
    }
    
}


