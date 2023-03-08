

const box1 =document.querySelector('.box1')
const box2 =document.querySelector('.box2')
const box3 =document.querySelector('.box3')
const start=document.querySelector('.start')

start.addEventListener('click', () => {
   const list =[
      "Nai",
      "Tôm",
      "Cua",
      "Bầu",
      "Cá",
      "Gà",
   ]
   const rand_1=Math.random()*list.length
   const rand_2=Math.random()*list.length
   const rand_3=Math.random()*list.length
   
   const index_1= Math.floor(rand_1)
   const index_2= Math.floor(rand_2)
   const index_3= Math.floor(rand_3)
   box1.innerHTML= list[index_1]
   box2.innerHTML=list[index_2]
   box3.innerHTML=list[index_3]
})