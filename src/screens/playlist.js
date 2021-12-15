import React from "react";
import "../App.css";
// import ReactAudioPlayer from "react-audio-player";
// import firebase from "./firebase/firebaseConfig";
// import "@firebase/storage";
// import playIcon from "./images/playIcon.png";
// import pauseIcon from "./images/pauseIcon.webp";
// import downloadIcon from "./images/download.png";
// import dp1 from "./images/gurpreetji.png";
// import dp2 from "./images/dp2.jpg";
// import dp3 from "./images/dp3.jpg";
// import dp4 from "./images/dp3.jpg";

// import dp5 from "./images/dp4.jpg";
// import dp6 from "./images/dp5.jpg";
// import dp7 from "./images/dp6.jpg";
import pothiImage from "../images/gutka.png";

import gurpreetSinghPlaylist from "../images/playListGurpreetSingh.jpg";
import playlistManpreet from "../images/playlistManpreet.jpeg";
import joginder from "../images/joginder.jpeg";

// import khanda from "./images/khanda.jpg";

// import menu from "./images/menu.png";

import "../styles/musicScreen.css";

let intenetConnected = true;

let url =
  "https://firebasestorage.googleapis.com/v0/b/my-website-fee43.appspot.com/o/GurubaniMusic%2FBhajMannMereEkoNaam.mp3?alt=media&token=49f1ddbd-0357-4664-aa98-a0173c641a58";

export default class PlaylistMobile extends React.Component {
  constructor(props) {
    super(props);
    this.wrapperRef = React.createRef();

    this.state = {
      play: false,
      realData: {},
      gurubaniList: [],
      url: "https://firebasestorage.googleapis.com/v0/b/my-website-fee43.appspot.com/o/GurubaniMusic%2FBhajMannMereEkoNaam.mp3?alt=media&token=49f1ddbd-0357-4664-aa98-a0173c641a58",
    };
  }
  render() {
    return (
      <div style={{ width: "100%", height: "100%", backgroundColor: "white" }}>
        <div
          style={{
            flexWrap: "wrap",
            display: "flex",
            width: "100%",
            height: "100%",
            justifyContent: "space-around",
            alignItems: "center",
            //   backgroundColor:'white',
            paddingBottom: 20,
          }}
        >
          <div
            style={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <p>Playlist</p>
          </div>

          <div
            onClick={() => this.props.OnclickEachPlaylist("ChamanjeetSingh", 1)}
            className="box"
          >
            <label>Nitname</label>
            <label style={{ fontSize: 10, fontWeight: 350 }}>
              (100 Gurbani)
            </label>

            <img
              style={{
                borderRadius: 20,
                height: 70,
                width: 70,
              }}
              // className='playIcon'
              src={pothiImage}
            ></img>
          </div>
          <div
            onClick={() =>
              this.props.OnclickEachPlaylist("GurupreetSinghRinku", 0)
            }
            className="box"
          >
            <label>Gurpreet Singh</label>
            <label style={{ fontSize: 10, fontWeight: 350 }}>
              (211 Gurbani)
            </label>
            <img
              style={{
                borderRadius: 20,
                height: 70,
                width: 70,
              }}
              // className='playIcon'
              src={gurpreetSinghPlaylist}
            ></img>
          </div>
          <div
            onClick={() => this.props.OnclickEachPlaylist("ChamanjeetSingh", 1)}
            className="box"
          >
            <label>Manpreet Singh</label>
            <label style={{ fontSize: 10, fontWeight: 350 }}>
              (122 Gurbani)
            </label>
            <img
              style={{
                borderRadius: 20,
                height: 70,
                width: 70,
              }}
              // className='playIcon'
              src={playlistManpreet}
            ></img>
          </div>
          <div
            onClick={() => this.props.OnclickEachPlaylist("ChamanjeetSingh", 1)}
            className="box"
          >
            <label>Joginder Singh</label>

            <label style={{ fontSize: 10, fontWeight: 350 }}>
              (22 Gurbani)
            </label>
            <img
              style={{
                borderRadius: 20,
                height: 70,
                width: 70,
              }}
              // className='playIcon'
              src={joginder}
            ></img>
          </div>
        </div>
      </div>
    );
  }
}


// {false && window.innerWidth > 900 && (
//   <div style={styles.PlaylistMainDivChild}>
//     <div style={styles.PlaylistInnerBoxDiv}>
//       <p>Playlist</p>
//     </div>
//     <div
//       onClick={() => this.OnclickEachPlaylist("ChamanjeetSingh", 1)}
//       className="box"
//     >
//       <label>ChamanjeetSingh</label>
//       <label style={{ fontSize: 10, fontWeight: 350 }}>
//         (100 Gurbani)
//       </label>
//       <img
//         style={styles.playlistImage}
//         // className='playIcon'
//         src={pothiImage}
//       ></img>
//     </div>
//     <div
//       onClick={() =>
//         this.OnclickEachPlaylist("GurupreetSinghRinku", 0)
//       }
//       className="box"
//     >
//       <label>Gurpreet Singh</label>
//       <label style={{ fontSize: 10, fontWeight: 350 }}>
//         (100 Gurbani)
//       </label>
//       <img
//         style={styles.playlistImage}
//         // className='playIcon'
//         src={gurpreetSinghPlaylist}
//       ></img>
//     </div>
//     <div
//       onClick={() => this.OnclickEachPlaylist("ManpreetSingh", 2)}
//       className="box"
//     >
//       <label>Manpreet Singh</label>
//       <label style={{ fontSize: 10, fontWeight: 350 }}>
//         (100 Gurbani)
//       </label>

//       <img
//         style={styles.playlistImage}
//         // className='playIcon'
//         src={playlistManpreet}
//       ></img>
//     </div>
//     <div
//       onClick={() => this.OnclickEachPlaylist("Nitname", 3)}
//       className="box"
//     >
//       <label>Nitname</label>
//       <label style={{ fontSize: 10, fontWeight: 350 }}>
//         (100 Gurbani)
//       </label>
//       <img
//         style={styles.playlistImage}
//         // className='playIcon'
//         src={pothiImage}
//       ></img>
//     </div>
//   </div>
// )}
