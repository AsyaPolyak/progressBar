const progressbar = document.querySelector(".progress");

const changeProgress = (progress) => {
    progressbar.style.width = `${progress}%`;
};

setTimeout(() => changeProgress(20, 1000));
setTimeout(() => changeProgress(40), 2000);
setTimeout(() => changeProgress(80), 4600);
setTimeout(() => changeProgress(90), 6266);
setTimeout(() => changeProgress(100), 8000);
