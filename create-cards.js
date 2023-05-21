const contentArea = document.querySelector(".content-area");
const cardArea = document.getElementById("artlist");
const videoContainer = document.createElement("div");
const svp = document.createElement("div");
videoContainer.setAttribute("class", "video-container");
svp.setAttribute("id", "svp");

function setAttributes(el, attr) {
    for (let key in attr) el.setAttribute(key, attr[key]);
}

function Card(id, img, desc, title, playlistId, selPlaylist) {
    this.id = id;
    this.img = img;
    this.desc = desc;
    this.title = title;
    this.playlistId = playlistId;
    this.selPlaylist = selPlaylist;
}

const courses = [
    new Card("environmental-toxicology",
        "envtox.jpg",
        "In a series of live online presentations and discussions, students will learn the fundamentals of environmental toxicology and become well-informed and primed for discussions in the public sphere. There will be recommended readings, additional recommended videos, recommended books.",
        "Environmental Toxicology",
        "1458452",
        "338a6ijjfhef404"),
]

courses.reverse().forEach(course => {
    const cont = document.createElement("div");
    const link = document.createElement("button");
    const img = document.createElement("img");
    const desc = document.createElement("span");
    const title = document.createElement("p");

    cont.setAttribute("id", `${course.id}`);
    setAttributes(link, {"data-playlistId": `${course.playlistId}`, "data-selPlaylist": `${course.selPlaylist}`});
    setAttributes(img, {"class": "course-image", "src": `images/${course.img}`, "alt": "course image",});
    desc.setAttribute("class", "course-desc");

    desc.innerText = `${course.desc}`;
    title.innerText = `${course.title}`;

    link.appendChild(img);
    link.appendChild(desc);
    link.appendChild(title);
    cont.appendChild(link);
    cardArea.appendChild(cont);
});

document.querySelectorAll("button").forEach(card => card.addEventListener("click", () => {
    const courseTitle = card.querySelector("p").textContent;
    const playlistId = card.getAttribute("data-playlistId");
    const selPlaylist = card.getAttribute("data-selPlaylist");
    document.title = courseTitle;
    document.querySelector(".header-logo a").textContent = courseTitle;
    document.getElementById("search").remove();
    cardArea.remove();
    videoContainer.appendChild(svp);
    contentArea.appendChild(videoContainer);
    ( (playlistId, selPlaylist) => {
        var vapp = new VappController({use_div: "svp",
            player_width: "720",
            player_height: "800"},
            {clip_id: "0",
            player_id: "4GE35AGFE12D4C4",
            playlist_id: `${playlistId}`,
            transparent: "1",
            uk: "9b4ce2ecd438876dd016a03f20313a72",
            live_id: "",
            sel_playlist: `${selPlaylist}`,
            sel_multiplaylist: "",
            use_html5: "true",
            layout: "default",
            theme: "light",
            is_responsive: "1",
            is_inversed: "",
            is_vertical: "",
            one_thumb_per_row: "1",
            thumbs_size: "medium",
            disable_hash: "",
            widget_height_behavior: "0",
            hide_playlist: "",
            hide_live_chat: "1",
            hide_description: "",
            playlist_position: "",
            chat_position: "",
            description_position: "",
            show_auto_play_next: "1",
            auto_play_next: "1",
            floating_player: "none"})
    })(playlistId, selPlaylist);
}));
