const user = {id : 1, name : 'Gorib Aamir', job : 'actor'};
// JavaScript Object Notation (JSON);

const stringfied = JSON.stringify(user);
//console.log(user);
//console.log(stringfied);


/**
 * Output:
 * 
 * { id: 1, name: 'Gorib Aamir', job: 'actor' }
 * {"id":1,"name":"Gorib Aamir","job":"actor"}
 * 
 */

const shop = {
    owner : 'alia',
    address : {
        street : 'vuter goli',
        city : 'barisal',
        country : 'bangladesh'
    },
    prpduct : ['laptop', 'mic', 'monitor', 'keyboard'],
    revenue : 350000,
    isOpen : true,
    isNew : false
}

//console.log(shop);
const shopJson = JSON.stringify(shop);
console.log(shopJson);
const shopObj = JSON.parse(shopJson);
console.log(shopObj)