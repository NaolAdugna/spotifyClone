//PACKAGES
import React from "react";
import "./RootLayout.css";
import SplitPane from "react-split-pane";

import "@fortawesome/fontawesome-svg-core/styles.css";

//ICONS
import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import {
  faHouse,
  faMagnifyingGlass,
  faPlusSquare,
  faRectangleList,
  faHeartCircleCheck,
  faGlobe,
  faAngleRight,
  faAngleLeft,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, NavLink } from "react-router-dom";

export default function RootLayout() {
  const [sidebar, setSideBar] = React.useState(300);

  const handleResize = (size) => {
    setSideBar(size);
  };

  return (
    <SplitPane
      split="vertical"
      minSize={163}
      maxSize={513}
      defaultSize={320}
      onChange={handleResize}
    >
      <div className="firstPane">
        <NavLink to="/" className="sideBarHead">
          <FontAwesomeIcon icon={faSpotify} className="headIcon" />
          <h1
            title="Spotify"
            style={{ fontSize: sidebar <= 200 ? "22px" : "40px" }}
          >
            Spotify
          </h1>
        </NavLink>
        <NavLink
          to=""
          className="sideBarHome"
          style={{ paddingBottom: sidebar <= 240 ? "24px" : "" }}
        >
          <FontAwesomeIcon icon={faHouse} className="sideBarIcons" />
          <h3>Home</h3>
        </NavLink>
        <NavLink
          to="search"
          className="sideBarSearch"
          style={{ paddingBottom: sidebar <= 240 ? "24px" : "" }}
        >
          <FontAwesomeIcon icon={faMagnifyingGlass} className="sideBarIcons" />
          <h3>Search</h3>
        </NavLink>
        <NavLink
          to="library"
          className="sideBarLibrary"
          style={{ paddingBottom: sidebar <= 240 ? "24px" : "" }}
        >
          <FontAwesomeIcon icon={faRectangleList} className="sideBarIcons" />
          <h3>Your Library</h3>
        </NavLink>
        <NavLink
          to="playlist"
          className="sideBarPlaylist"
          style={{ paddingBottom: sidebar <= 240 ? "24px" : "" }}
        >
          <FontAwesomeIcon icon={faPlusSquare} className="sideBarIcons" />
          <h3>Create Playlist</h3>
        </NavLink>
        <NavLink
          to="likesong"
          className="sideBarLikedsong"
          style={{ paddingBottom: sidebar <= 240 ? "24px" : "" }}
        >
          <FontAwesomeIcon icon={faHeartCircleCheck} className="sideBarIcons" />
          <h3>Liked Song</h3>
        </NavLink>

        <div
          className="sideBarFooter"
          style={{ marginTop: sidebar <= 240 ? "40px" : "" }}
        >
          <Link
            to=""
            style={{
              marginTop: sidebar <= 240 ? "0rem" : "",
              marginBottom: sidebar < 240 ? "1rem" : "",
            }}
          >
            Legal
          </Link>
          <Link
            to=""
            style={{
              marginTop: sidebar <= 240 ? "0rem" : "",
              marginBottom: sidebar < 240 ? "1rem" : "",
            }}
          >
            Privacy Center
          </Link>
          <Link
            to=""
            style={{
              marginTop: sidebar <= 240 ? "0rem" : "",
              marginBottom: sidebar < 240 ? "1rem" : "",
            }}
          >
            Privacy Policy
          </Link>
          <Link
            to=""
            style={{
              marginTop: sidebar <= 240 ? "0rem" : "",
              marginBottom: sidebar < 240 ? "1rem" : "",
            }}
          >
            Cookies
          </Link>
          <Link
            to=""
            style={{
              marginTop: sidebar <= 240 ? "0rem" : "",
              marginBottom: sidebar < 240 ? "1rem" : "",
            }}
          >
            About Ads
          </Link>
          <Link
            to=""
            style={{
              marginTop: sidebar <= 240 ? "0rem" : "",
              marginBottom: sidebar < 240 ? "1rem" : "",
            }}
          >
            Accessibilty
          </Link>
          <Link
            to=""
            style={{
              marginTop: sidebar <= 240 ? "0rem" : "",
              marginBottom: sidebar < 240 ? "1rem" : "",
            }}
          >
            Cookies
          </Link>
        </div>

        <button>
          {" "}
          <FontAwesomeIcon icon={faGlobe} className="sideBarGlobe" /> English
        </button>
      </div>
      <div className="secondPane">
        <nav className="navBar">
          <div className="navBarAngle">
            <FontAwesomeIcon
              icon={faAngleLeft}
              className="fa-thin navBarIcon"
            />
            <FontAwesomeIcon icon={faAngleRight} className="navBarIcon" />
          </div>
          <div className="navBarLink">
            <NavLink to="">Premium</NavLink>
            <NavLink to="">Support</NavLink>
            <NavLink to="">Download</NavLink>
            <pre>|</pre>
            <NavLink to="">Sign up</NavLink>
            <button>Log in</button>
          </div>
          <div className="navBarMedia">
            <FontAwesomeIcon
              icon={faSpotify}
              className="navBarMediaIcon"
              id="navBarMediaLogo"
            />
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="navBarMediaIcon"
            />
            <button>Open App</button>
            <FontAwesomeIcon icon={faBars} className="navBarMediaIcon" />
          </div>
        </nav>
      </div>
    </SplitPane>
  );
}
