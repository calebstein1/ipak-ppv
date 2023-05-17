function Card(id, img, desc, title) {
    this.id = id;
    this.img = img;
    this.desc = desc;
    this.title = title;
}
function createCard(id, img, desc, title) {
    document.getElementById("artlist").innerHTML += `
        <div id="${id}">
            <a href="courses/${id}.html">
                <img class="course-image" src="images/${img}" alt="course image">
                <span class="course-desc">${desc}</span>
                <p>${title}</p>
            </a>
        </div>
    `
}

const courses = [
    new Card("environmental-toxicology",
        "envtox.jpg",
        "In a series of live online presentations and discussions, students will learn the fundamentals of environmental toxicology and become well-informed and primed for discussions in the public sphere. There will be recommended readings, additional recommended videos, recommended books.",
        "Environmental Toxicology"),
]

courses.forEach(course => createCard(course.id, course.img, course.desc, course.title));