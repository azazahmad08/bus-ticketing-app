function successful(){
    const resultPage = document.getElementById('success-page');
    resultPage.classList.remove('hidden');
    const mainPage = document.getElementById('main-container-page-hero');
    mainPage.classList.add('hidden')
    const continueButton = document.querySelector("#success-page .btn");
    continueButton.addEventListener("click", function() {
        
        window.location.reload();
    });
}

function successfulTwo(){
    const resultPage = document.getElementById('success-page');
    resultPage.classList.add('hidden');
    const mainPage = document.getElementById('main-container-page-hero');
    mainPage.classList.remove('hidden')
    mainPage.innerHTML = "";
}
    