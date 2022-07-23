const input =document.getElementById('button'); 

function addingEventListener() {
    alert('I was clicked!');
}
input.addEventListener('click', addingEventListener)

/////////call Back Function//////////
// input.addEventListener('click', function(){
//     alert('I was clicked!');
// })

