// toggle-part-start
function get_id(id){
      const i_d = document.getElementById(id); 
      return i_d;  
}

function get_selector(id){
    const i_d = document.querySelector(id); 
    return i_d;  
}
const drak = get_id('dark-toggle');
const body = get_selector('body')
const nav = get_selector('nav');
const sidebar = get_selector('aside');
const light = get_id('light-toggle');

// addEvenlistener part




light.addEventListener('click' , function(){
    body.style.background ='black';
    nav.style.background = 'black';
    nav.style.color = 'black';
    sidebar.style.background = 'black';
    sidebar.style.color = 'white';
    light.style.background ='black'
    light.style.color ='white';
    drak.style.background = 'white';
    drak.style.color = 'black';
})

drak.addEventListener('click' , function(){
    body.style.background ='whitesmoke';
    nav.style.background = ' rgb(238, 237, 237)';
    sidebar.style.background   = 'rgb(252, 249, 249)';
    sidebar.style.color = 'black';
    drak.style.background = 'black';
    light.style.background = 'white';
    drak.style.color = 'white';
    light.style.color = 'black';

})
// toggle-part-end

