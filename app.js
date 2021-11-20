window.addEventListener("load",function(){
     const slider = document.querySelector(".slider");
     const sliderMain = document.querySelector(".slider-main");
     const sliderItems = document.querySelectorAll(".slider-item");
     const nextBtn = document.querySelector(".slider-next");
     const prevBtn = document.querySelector(".slider-prev");
     const dotItem = document.querySelectorAll(".slider-dot-item");
     const sliderItemWdith = sliderItems[0].offsetWidth;
     const slidesLength = sliderItems.length;
    let postionX = 0;
    let index =0;

     nextBtn.addEventListener("click",function(){
        handleChangeSlide(1);
     });
     prevBtn.addEventListener("click",function(){
        handleChangeSlide(-1);
    });

    [...dotItem].forEach(item => item.addEventListener("click",function(e){
        [...dotItem].forEach(el => el.classList.remove("active"));
        e.target.classList.add("active");
        const slideIndex = parseInt(e.target.dataset.index);
        index = slideIndex;
        postionX = -1* index * sliderItemWdith
        sliderMain.style = `transform: translateX(${postionX}px)`;
    }))


    function handleChangeSlide(direction){
        if (direction == 1){
            if(index >= slidesLength -1 ) {
                index =slidesLength -1 ;
                return;
            }
            postionX = postionX - sliderItemWdith;
            sliderMain.style = `transform: translateX(${postionX}px)`;
            index++;
        } else if(direction == -1){
            if(index <= 0 ) {
                index = 0 ;
                return;
            }
            postionX = postionX + sliderItemWdith;
            sliderMain.style = `transform: translateX(${postionX}px)`;
            index--;
           
        }
        [...dotItem].forEach(el => el.classList.remove("active"));
        dotItem[index].classList.add("active");
    }


});


        let price =  Math.floor(Math.random()*100000000);
         console.log(price);

         const money = document.getElementsByClassName("money");
         console.log(money);
         
                                        