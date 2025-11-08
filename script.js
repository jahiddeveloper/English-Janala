
let loadLesson = () => {
    fetch("https://openapi.programming-hero.com/api/levels/all")
        .then(res => res.json())
        .then(data => displayLesson(data.data))
}

let displayLesson = (lessons) => {

    let lessonsContainer = document.getElementById("lesson-container");
    lessonsContainer.innerHTML = "";

    for (let lesson of lessons) {

        let div = document.createElement("div")

        div.innerHTML = `
    
    <button class="btn btn-outline btn-primary"><i class="fa-solid fa-book-open"></i>Lesson - ${lesson.level_no}</button>

    `
        lessonsContainer.append(div)
    }
}
loadLesson();