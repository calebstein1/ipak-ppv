const courses = [
    new Card("environmental-toxicology",
        "envtox.jpg",
        "In a series of live online presentations and discussions, students will learn the fundamentals of environmental toxicology and become well-informed and primed for discussions in the public sphere. There will be recommended readings, additional recommended videos, recommended books.",
        "Environmental Toxicology",
        "1458452",
        "338a6ijjfhef404"),

    new Card("vaccine-course",
        "vaccine-course.svg",
        "Students will learn via readings of primary literature facts about the history of the impact of vaccines on human health. This course will provide a solid basis of facts and realities of vaccines. Students will be able to use this knowledge in public discourse on vaccines in their personal lives and in interactions with others in the public square.",
        "Vaccine Course",
        "1495799",
        "6404faegiaj4888"),
]

function Card(id, img, desc, title, playlistId, selPlaylist) {
    this.id = id;
    this.img = img;
    this.desc = desc;
    this.title = title;
    this.playlistId = playlistId;
    this.selPlaylist = selPlaylist;
}