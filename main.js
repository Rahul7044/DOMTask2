// var items = document.getElementsByClassName('list-group-item');
// items[2].style.backgroundColor='green';

// for(var i = 0; i < items.length; i++){
//     items[i].style.fontWeight='bold';
// }
//var news = document.getElementsByClassName('new');
//news.style.fontWeight='bold';

var li = document.getElementsByTagName('li');
console.log(li[2]);

li[1].textContent='Rahul';
li[4].textContent='kumar';
//li[4].style.fontWeight='bold';
li[4].style.backgroundColor='red';
console.log(li[4]);



for(var i = 0; i<li.length; i++){
    li[i].style.fontWeight='bold';
}