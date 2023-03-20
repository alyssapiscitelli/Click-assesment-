document.getElementById("foo");
const body =document.querySelector('body');
document.getElementById('foo').addEventListener('click',function responseToClick(){
    const pTag=document.createElement('h3');
    pTag.textContent ='foo';
    body.appendChild(pTag);
})

document.getElementById('bar');
const body2 =document.querySelector('body');
document.getElementById('bar').addEventListener('click',function responseToClick() {
    const pTag=document.createElement('h3');
    pTag.textContent='bar'
    body2.appendChild(pTag);

})

document.getElementById('Foobar');
const body3 =document.querySelector('body');
document.getElementById('Foobar').addEventListener('click',responseToClick)

function responseToClick(){
    const pTag=document.createElement('h2');
    pTag.textContent='Foobar'
    body3.appendChild(pTag);
}













