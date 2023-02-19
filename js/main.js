// document.getElementsByClassName('main-title')[0].style.color = 'green';
document.getElementById('main-action').onclick = () => {
    document.getElementById('cars').scrollIntoView({ behavior: "smooth" })
};
const buttons = document.querySelectorAll('.car-button');
for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = () => {
        document.getElementById('price').scrollIntoView({ behavior: "smooth" })
    }
}
//валидация формы
document.getElementById('price-action').onclick = () => {
if(document.getElementById('name').value==='') {
  
    alert('заполните поле имя')
}else if(document.getElementById('phone').value==='') {
  
    alert('заполните поле телефон')}
    else if(document.getElementById('car').value==='') {
  
        alert('заполните поле автомобиль')}
        else{
            alert('Спасибо за заявку!Мы свяжемся с вами в ближайшее время')
        }
};
// главном экране фон передвигается при скроллинге страницы (картинка с автомобилем смещается вправо при скроллинге вниз)
// последнем экране сайта автомобиль изменяет свою позицию при перемещении курсора мыши в разные стороны.
document.addEventListener("DOMContentLoaded", ()=> {
    const layer = document.querySelector('.price-img');
document.addEventListener('mousemove', (event) => {
        layer.style.transform = 'translate3d(' + ((event.clientX * 0.2) / 8) + 'px,' + ((event.clientY * 0.2) / 8) + 'px,0px)';
});

    const elem = document.querySelector(".main");
document.addEventListener('scroll', () => {
        elem.style.backgroundPositionX = '0' + (0.4 * window.pageYOffset) + 'px';
})
});