/* about.addEventListener('click',(e)=>{
    const id = e.target.dataset.id;

    if(id){
        btns.forEach((btn)=>{
            btn.classList.remove('active');
            e.target.classList.add('active')
        })

        

        contents.forEach((content)=>{
            content.classList.remove('active');
        })

        const ele = document.getElementById(id);
        ele.classList.add('active')
    }
}) */

/* const btns = document.querySelectorAll(".tab-btn");
const contents = document.querySelectorAll(".content");
const about = document.querySelector(".about");

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const id = e.currentTarget.dataset.id;

    contents.forEach((content) => {
      if (id === content.id) {
        content.classList.add("active");
      } else {
        content.classList.remove("active");
      }
    });
  });
}); */

const btns = document.querySelectorAll(".tab-btn");
const contents = document.querySelectorAll('.content')



btns.forEach((btn) => {
  btn.addEventListener('click',(e)=>{
     const id = e.currentTarget.dataset.id;

     contents.forEach((content)=>{
      const contentId = content.getAttribute('id');
       if(id === contentId){
        content.classList.add('active')
       }
       else{
        content.classList.remove('active')
       }
     })
  })
});
