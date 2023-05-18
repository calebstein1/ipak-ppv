const cardArea = document.getElementById("artlist");
function Card(id, img, desc, title) {
    this.id = id;
    this.img = img;
    this.desc = desc;
    this.title = title;
}

const courses = [
    new Card("environmental-toxicology",
        "envtox.jpg",
        "In a series of live online presentations and discussions, students will learn the fundamentals of environmental toxicology and become well-informed and primed for discussions in the public sphere. There will be recommended readings, additional recommended videos, recommended books.",
        "Environmental Toxicology"),
]

courses.forEach(course => {
    cardArea.innerHTML += `
        <div id="${course.id}">
            <a href="courses/${course.id}.html">
                <img class="course-image" src="images/${course.img}" alt="course image">
                <span class="course-desc">${course.desc}</span>
                <p>${course.title}</p>
            </a>
        </div>
    `
});