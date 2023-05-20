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

courses.reverse().forEach(course => {
    const cont = document.createElement("div");
    const link = document.createElement("a");
    const img = document.createElement("img");
    const desc = document.createElement("span");
    const title = document.createElement("p");

    cont.setAttribute("id", `${course.id}`);
    link.setAttribute("href", `courses/${course.id}.html`);
    ( (el, attr) => {
        for (let key in attr) el.setAttribute(key, attr[key]);
    })(img, {"class": "course-image", "src": `images/${course.img}`, "alt": "course image",});
    desc.setAttribute("class", "course-desc");

    desc.innerText = `${course.desc}`;
    title.innerText = `${course.title}`;

    link.appendChild(img);
    link.appendChild(desc);
    link.appendChild(title);
    cont.appendChild(link);
    cardArea.appendChild(cont);
});