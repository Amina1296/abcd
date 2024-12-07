console.log($('#div1'));

function submitJS(){
   const div1= document.getElementById('div1');
   div1.innerText= 'greetings';
   div1.setAttribute('style','border:2px solid red')
}
function submitJquery(){
    const div1 = $('#div1');
    div1.text('bye');
    div1.css('border', '2px dotter blue');
    div1.attr('style', 'border: 2px dotted blue');
}

const colorJs = document.querySelectorAll('.color');
const colorsJquery= $('.color');
console.log(colorJs);
console.log(colorsJquery);

//colorJs.addEventlistener('click', () =>{
  //  colorJs.style.color = "red"
//})

colorJs.forEach((ene)=>{
    ene.addEventListener('click',function(){
        this.style.color ="red"
    }) 
});

colorsJquery.on('click', function (){
    console.log($(this));
    $(this).css('background-color', 'skyblue')
})

