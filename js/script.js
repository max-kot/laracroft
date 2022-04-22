const menu = document.querySelector('.menu');
const menuList = document.querySelector('.menu__list');
// create button and span element
const menuBtn = document.createElement('button');
const menuBtnElement = document.createElement('span');

menuBtn.setAttribute('role', 'button');
menuBtn.classList.add('burger__btn')
menuBtnElement.classList.add('burger__span');
menuBtn.append(menuBtnElement);
menu.append(menuBtn);

menuBtn.addEventListener('click', function () {
	menuList.classList.toggle('active');
	menuBtn.classList.toggle('active-btn');
})

