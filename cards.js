const courses = [
    new Card("environmental-toxicology",
        "envtox.jpg",
        "In a series of live online presentations and discussions, students will learn the fundamentals of environmental toxicology and become well-informed and primed for discussions in the public sphere. There will be recommended readings, additional recommended videos, recommended books.",
        "Environmental Toxicology",
        "1458452",
        "338a6ijjfhef404"),
]

function Card(id, img, desc, title, playlistId, selPlaylist) {
    this.id = id;
    this.img = img;
    this.desc = desc;
    this.title = title;
    this.playlistId = playlistId;
    this.selPlaylist = selPlaylist;
}