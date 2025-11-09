
let loadLesson = () => {
    fetch("https://openapi.programming-hero.com/api/levels/all")
        .then(res => res.json())
        .then(data => displayLesson(data.data))
}

let loadLessonWord = (id) => {
    let url = `https://openapi.programming-hero.com/api/level/${id}`

    fetch(url)
        .then(res => res.json())
        .then(data => displayLoadLessonWord(data.data))
}

let displayLoadLessonWord = (lessonWords) => {

    let cartContainer = document.getElementById("cart-container")
    cartContainer.innerHTML = "";

    for (let lessonWord of lessonWords) {

        let div = document.createElement("div");
        div.innerHTML = `
        <div class="bg-white py-10 px-5 md:px-15 rounded-lg shadow-sm">
                    <h1 class="text-center text-3xl font-bold">${lessonWord.word}</h1>
                    <h3 class="text-center text-2xl font-semibold mt-5">Meaning / Pronounciation</h3>
                    <h2 class="text-center text-3xl font-semibold mt-5">"${lessonWord.meaning} / ${lessonWord.pronunciation}"</h2>

                    <div class="flex justify-between items-center mt-7">
                        <div
                            class="h-13 w-13 bg-[#1a91ff1a] flex justify-center items-center rounded-lg cursor-pointer hover:bg-[#70b6f81a] hover:transition duration-300">
                            <i class="fa-solid fa-circle-info"></i>
                        </div>
                        <div
                            class="h-13 w-13 bg-[#1a91ff1a] flex justify-center items-center rounded-lg cursor-pointer hover:bg-[#70b6f81a] hover:transition duration-300">
                            <i class="fa-solid fa-volume-high"></i>
                        </div>
                    </div>
                </div>
        `

        cartContainer.append(div);
    }
}

let displayLesson = (lessons) => {

    let lessonsContainer = document.getElementById("lesson-container");
    lessonsContainer.innerHTML = "";

    for (let lesson of lessons) {

        let div = document.createElement("div")

        div.innerHTML = `
    
    <button onclick="loadLessonWord(${lesson.level_no})" class="btn btn-outline btn-primary"><i class="fa-solid fa-book-open"></i>Lesson - ${lesson.level_no}</button>

    `
        lessonsContainer.append(div)
    }
}
loadLesson();