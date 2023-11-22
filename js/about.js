const foodName = document.querySelector('.foodName');
const foodAd = document.querySelector('.foodAd');
const time = document.querySelector('.time');
const comment = document.querySelector('.comment');
const menu1 = document.querySelector('.menu1');
const menu2 = document.querySelector('.menu2');
const menu3 = document.querySelector('.menu3');
const imgs = document.querySelector('.imgs');

temp = location.href.split("?");
data = temp[1].split(",");
value = data[0];
console.log(value);
const foodId = Number(value);
// 해당 데이터 가져오기 콜백함수가 숫자라서 Number 써줘야하는듯?
const targetData = restaurant.find((data) => data.id === foodId);
console.log(targetData);

foodName.innerText = targetData.name;
foodAd.innerText = targetData.addres;
comment.innerText = targetData.comment;
time.innerText = targetData.time;
menu1.innerText = targetData.menu1;
menu2.innerText = targetData.menu2;
menu3.innerText = targetData.menu3;
imgs.src = "../imges/" + targetData.img;


