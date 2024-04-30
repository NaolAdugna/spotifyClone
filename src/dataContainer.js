//ICON IMPORTED
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faHouse,
  faMagnifyingGlass,
  faBook,
  faPlusSquare,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
library.add(fab, faHouse, faMagnifyingGlass, faBook, faPlusSquare, faHeart);

const SideBar = [
  {
    id: 1,
    icon: ["fab", "spotify"],
    title: "Spotify",
    url: "/",
  },
  {
    id: 2,
    icon: "house",
    title: "Home",
    url: "home",
  },
  {
    id: 3,
    icon: "magnifying-glass",
    title: "Search",
    url: "search",
  },
  {
    id: 4,
    icon: "book",
    title: "Your Library",
    url: "library",
  },
  {
    id: 5,
    icon: "plus-square",
    title: "Create Playlist",
    url: "playlist",
  },
  {
    id: 6,
    icon: "heart",
    title: "Like Songs",
    url: "likesong",
  },
];

export default { SideBar };
