(function(){
    const titleQuestions = [...document.querySelectorAll('.questionsTitle')]
    console.log(titleQuestions);

    titleQuestions.forEach(question =>{
        question.addEventListener('click', ()=>{
            let height = 0;
            let answer = question.nextElementSibling;
            let addPadding = question.parentElement.parentElement;

            addPadding.classList.toggle('questionsPaddingAdd') 
            question.children[0].classList.toggle('questionsArrowRotate');

            if(answer.clientHeight === 0){
                height = answer.scrollHeight;
            }
            answer.style.height = `${height}px`; 
        })    
    })
}())