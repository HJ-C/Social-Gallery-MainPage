const body=document.querySelector('body')
const sidebar=document.getElementById('nav')
const toggle=body.querySelector('.toggle')
const searchBtn=body.querySelector('.search-box')


toggle.addEventListener('click',()=>{
    sidebar.classList.toggle('close')
})
searchBtn.addEventListener('click',()=>{
    sidebar.classList.remove('close')
})


