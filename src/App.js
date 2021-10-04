import React from "react";
import "./App.css";
import firebase from "./firebase/firebaseConfig";
import "@firebase/storage";
import playIcon from "./images/playIcon.png";
import pauseIcon from "./images/pauseIcon.webp";
import downloadIcon from "./images/download.png";
import dp1 from "./images/gurpreetji.png";
import dp2 from "./images/dp2.jpg";
import dp3 from "./images/dp3.jpg";
import dp4 from "./images/dp3.jpg";

import dp5 from "./images/dp4.jpg";
import dp6 from "./images/dp5.jpg";
import dp7 from "./images/dp6.jpg";
import pothiImage from "./images/gutka.png";

import gurpreetSinghPlaylist from "./images/playListGurpreetSingh.jpg";
import playlistManpreet from "./images/playlistManpreet.jpeg";
import Playlist from "./screens/playlist";
import joginder from "./images/joginder.jpeg";

import khanda from "./images/khanda.jpg";

import menu from "./images/menu.png";

import "./styles/musicScreen.css";
import { getGurbani, UpdateGurbani } from "./MusicListData/musicListData.js";
import { StylesMedia } from "./styles/styles";

import AudioPlayer from "./audioPlayer/src/index";
import {hocComponent} from './commonComponents/hoc'


let intenetConnected = true;

let url =
  "https://firebasestorage.googleapis.com/v0/b/my-website-fee43.appspot.com/o/GurubaniMusic%2FBhajMannMereEkoNaam.mp3?alt=media&token=49f1ddbd-0357-4664-aa98-a0173c641a58";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.refss = React.createRef();

    this.wrapperRef = React.createRef();
    this.state = {
      selectedRagiAllGurbani:
        getGurbani().GurubaniMusic[0]["GurupreetSinghRinku"],
      onToggleTrackPlayPause: false,
      currentIndex: 0,
      progress: 0,
      CurrentRagiName: "GurupreetSinghRinku",
      itemNo: 0,
      isPlaying: false,
      onPageLoad: true,
      displayPlaylist: true,
      play: false,
      realData: {},
      gurubaniList: [],
      url: "https://firebasestorage.googleapis.com/v0/b/my-website-fee43.appspot.com/o/GurubaniMusic%2FBhajMannMereEkoNaam.mp3?alt=media&token=49f1ddbd-0357-4664-aa98-a0173c641a58",
    };
  }

  OnToggleAudioPlayPause = (itemNo, url, ragiName, name, indx) => {};

fast = () => {
  
}


  onclickPlayPauseBtn = async (
    itemNo,
    url,
    ragiName,
    name,
    indx,
    onToggleTrackPlayPause
  ) => {
    console.log(name, "name");
    let childElement = document.getElementById(name).children[0].children;
    // let childElement = child.children;

    if (childElement[1].src.includes("playIcon")) {
      this.setState({
        isPlaying: true,
        onPageLoad: false,
        currentIndex: indx,
        onToggleTrackPlayPause:
          this.state.currentIndex == indx ? true : onToggleTrackPlayPause,
      });

      let data = getGurbani();
      await data.GurubaniMusic.map((item, ind) => {
        if (item.visible == true) {
          return item[item["RagiName"]].map((eachGurubani, index) => {
            console.log(item.itemNo + " item.itemNo " + itemNo + " itemNo");
            console.log(
              eachGurubani.GurubaniNo +
                " eachGurubani.GurubaniNo " +
                indx +
                " indx"
            );

            if (item.itemNo == itemNo && eachGurubani.GurubaniNo == indx) {
              eachGurubani.iconToDisplay = "pause";
            } else {
              eachGurubani.iconToDisplay = "play";
            }
          });
        }
      });

      // data.GurubaniMusic[itemNo][ragiName][indx].iconToDisplay = 'pause';

      await this.RenderPlayList(data);

      // await this.setState(
      //   {
      //     currentRagi : '',
      //     url: url,
      //   },
      //   () => {
      //     document.getElementById("my-audio").load();
      //     document.getElementById("my-audio").play();
      //   }
      // );

      // realData.GurubaniMusic[itemNo][ragiName][i].iconToDisplay = 'pause';
    } else {
      this.setState({
        isPlaying: false,
        onPageLoad: false,
        currentIndex: indx,
        // progress: onToggleTrackPlayPause == false ? 0 :prog,
        onToggleTrackPlayPause: true,
      });
      let data = getGurbani();
      data.GurubaniMusic[itemNo][ragiName][indx].iconToDisplay = "play";

      // await this.state.realData.GurubaniMusic.map((item, ind) => {
      //   if (item.visible == true) {
      //     return item[item["RagiName"]].map((eachGurubani, index) => {
      //       console.log(item.itemNo + " itemNo.itemNo");
      //       console.log(itemNo + " itemNo");

      //       console.log(eachGurubani.GurubaniNo + "  eachGurubani.GurubaniNo");
      //       console.log(i + " i");

      //       if (item.itemNo == itemNo && eachGurubani.GurubaniNo == i) {
      //         eachGurubani.iconToDisplay = "play";
      //       } else {
      //         // eachGurubani.iconToDisplay = 'pause';
      //       }
      //     });
      //   }
      // });

      await this.RenderPlayList(data);
    }

    // var newURL =
    //   'https://firebasestorage.googleapis.com/v0/b/my-website-fee43.appspot.com/o/GurubaniMusic%2Fmool.mp3?alt=media&token=ef11570a-42d4-405c-967d-fd7ba4b9c939';
  };

  onMouseEnter = (name) => {
    let ele = document.getElementById(name);
    ele.style.backgroundColor = "white";
  };

  onMouseLeave = (name) => {
    let ele = document.getElementById(name);
    ele.style.backgroundColor = "#e8edf2";
  };
  RenderPlayList = async (dataMap) => {
    await this.setState({
      gurubaniList: [],
    });
    var i = -1;
    await dataMap["GurubaniMusic"].map((item, index) => {
      if (item.visible == true) {
        return item[item["RagiName"]].map((eachGurubani, indx) => {
          i = i + 1;
          this.addEachGurbani(
            item.itemNo,
            eachGurubani.name,
            eachGurubani.url,
            i,
            item.RagiName,
            eachGurubani.iconToDisplay,
            eachGurubani.totalTime,
            indx
          );
        });
      }
    });
  };

  initialLoadPlaylist = () => {
    // let ref = firebase.database().ref('/');
    // ref.once('value', (snapshot) => {

    // localStorage.setItem("realData",JSON.stringify(DATA));

    this.setState(
      {
        onPageLoad: true,
        realData: getGurbani(),
      },
      () => {
        let gurbani = getGurbani();
        this.RenderPlayList(gurbani);
      }
    );
    // const state = snapshot.val()['GurubaniMusic'];

    // console.log(JSON.stringify(state));
    // console.log(Object.keys(state));
    // });
  };

  async componentDidMount() {
    await this.initialLoadPlaylist();
    // await this.checkInternet();

    // document.addEventListener('click', this.handleClickOutside);
  }

  OnclickEachPlaylist = async (RagiName, itemNo) => {
    const { CurrentRagiName } = this.state;
    // if(RagiName != CurrentRagiName ) {

    await UpdateGurbani(RagiName);
    let newdatas = await getGurbani();
    this.RenderPlayList(newdatas);

    this.setState({
      displayPlaylist: false,
      itemNo: itemNo,
      CurrentRagiName: RagiName,
      currentIndex: 0,
      isPlaying: false,
      onToggleTrackPlayPause: false,
      selectedRagiAllGurbani: newdatas.GurubaniMusic[itemNo][RagiName],
    });

    // }
  };

  onClickMenu = async () => {
    let newdatas = await getGurbani();
    console.log(newdatas, "newdatas");
    this.RenderPlayList(newdatas);

    this.setState({
      displayPlaylist: true,
    });
  };

  handleClickOutside = async (e) => {
    e.stopPropagation();
    if (e.target === e.currentTarget) {
      this.setState({
        displayPlaylist: false,
      });
    }

    // }
  };


  addEachGurbani = async (
    itemNo,
    name,
    url,
    i,
    ragiName,
    iconToDisplay,
    totalTime,
    indx
  ) => {
    let array = [dp1, dp2, dp3, dp4, dp5, dp6, dp7];
    // let tempData = this.state.realData;
    let view = await (
      <div
        onMouseEnter={() => this.onMouseEnter(name)}
        onMouseLeave={() => this.onMouseLeave(name)}
        style={{
          cursor: "pointer",
          // marginBottom: 1,
          padding: 10,
          backgroundColor: "#e8edf2",
          borderBottomColor: "blue",
          borderColor: "grey",
          borderWidth: 0,
          borderBottomWidth: 1,
          borderStyle: "solid",
          justifyContent: "space-between",
          alignItems: "center",
          display: "flex",
          flexDirection: "row",
        }}
        id={name}
        onClick={(addEventListener) =>
          this.onclickPlayPauseBtn(
            itemNo,
            url,
            ragiName,
            name,
            indx,

            false
          )
        }
        key={name}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p
            style={{
              margin: 0,
              width: 10,

              marginRight: 10,
              textAlign: "center",
            }}
          >
            {i + 1}
          </p>
          <img
            style={
              window.innerWidth >= 768
                ? { marginRight: 50 }
                : { marginRight: 10 }
            }
            className="playIcon"
            src={iconToDisplay == "play" ? playIcon : pauseIcon}
          ></img>

          <img
            style={{ marginRight: 10, borderRadius: 20 }}
            className="playIcon"
            src={i < 7 ? array[i] : dp1}
          ></img>

          <p
            style={{
              margin: 0,
              alignSelf: "center",
              fontSize: 12,
              width: window.innerWidth <= 768 ? 110 : 200,
              textAlign: "left",
            }}
          >
            {name}
          </p>
        </div>
        {window.innerWidth >= 768 && (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <p
              style={{
                margin: 0,
                fontSize: 10,
                textAlign: "center",
              }}
            >
              {ragiName}
            </p>

            {/* <img className="playIcon" src={downloadIcon}></img> */}
          </div>
        )}
        <div
          style={{
            paddingRight: 5,
            paddingLeft: 5,
            display: "flex",
            flexDirection: "row",
            width: 30,
            justifyContent: "flex-start",
          }}
        >
          <p
            style={{
              margin: 0,
              fontSize: 10,
              textAlign: "left",
            }}
          >
            {totalTime}
          </p>
        </div>
      </div>
    );

    await this.setState({
      gurubaniList: [...this.state.gurubaniList, view],
    });
  };
  onclickDownloadBtn = () => {
  
    var url =
      "https://firebasestorage.googleapis.com/v0/b/my-website-fee43.appspot.com/o/GurubaniMusic%2FBhajMannMereEkoNaam.mp3?alt=media&token=49f1ddbd-0357-4664-aa98-a0173c641a58";
    fetch(url, {
      mode: "no-cors",
      header: {
        "Access-Control-Allow-Origin": "*",
      },
    }).then((response) => console.log(response));
  };


  render() {
    // style={[styles.chatcontainer, styles[resChatcontainer]]
    const mainDiv = `mainDiv_${this.props.measure}`;
    return (
      <div
        style={styles.main}
      >
        {this.state.displayPlaylist == true && window.innerWidth <= 768 && (
          <div onClick={this.handleClickOutside} className="modal">
            <div onClick={this.handleClickInside} className="modalContent">
              <Playlist OnclickEachPlaylist={this.OnclickEachPlaylist} />
            </div>
          </div>
        )}

        <div
          style={styles.HeaderDiv}
        >
          <div
            style={styles.headerDivChild}
          >
            <img
              style={styles.imageKhanda}
              // className='playIcon'
              src={khanda}
            ></img>
            <h3>MP3 Gurbani {window.innerWidth}</h3>
          </div>
          <img
            onClick={this.onClickMenu}
            style={styles.menuImage}
            // className='playIcon'
            src={menu}
          ></img>
        </div>

        <div
          style={
            window.innerWidth >= 768
              ? styles.listSubheadingWeb 
              : styles.listSubheadingMobile
          }
        >
          <div
            style={styles.listSubheadingChildDiv}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <p
                style={{
                  fontWeight: "bold",
                  textAlign: "center",
                  margin: 0,

                  alignSelf: "left",
                }}
              >
                {"#"}
              </p>

              <p
                style={{
                  fontWeight: "bold",
                  textAlign: "center",
                  margin: 0,
                  width: 200,
                  alignSelf: "left",
                }}
              >
                {"Title"}
              </p>
            </div>
            <p
              style={{
                margin: 0,
                // textAlign: "left",

                fontWeight: "bold",
              }}
            >
              {"Time"}
            </p>
          </div>
        </div>
        <div
          style={styles.gurbaniListandPlayListMainDiv}
        >
          <div
            style={styles.gurbaniListMainDiv}
          >
            {this.state.gurubaniList}
          </div>


          <div
            style={styles.PlaylistMainDiv}
          >
            {window.innerWidth > 900 && (
              <div
                style={styles.PlaylistMainDivChild}
              >
            
                <div
                  style={styles.PlaylistInnerBoxDiv}
                >
                  <p>Playlist</p>
                </div>
                <div
                  onClick={() => this.OnclickEachPlaylist("ChamanjeetSingh", 1)}
                  className="box"
                >
                  <label>ChamanjeetSingh</label>
                  <label style={{fontSize:10, fontWeight:350}}>
              (100 Gurbani)
            </label>
                  <img
                    style={styles.playlistImage}
                    // className='playIcon'
                    src={pothiImage}
                  ></img>
                </div>
                <div
                  onClick={() =>
                    this.OnclickEachPlaylist("GurupreetSinghRinku", 0)
                  }
                  className="box"
                >
                  <label>Gurpreet Singh</label>
                  <label style={{fontSize:10, fontWeight:350}}>
              (100 Gurbani)
            </label>
                  <img
                     style={styles.playlistImage}
                    // className='playIcon'
                    src={gurpreetSinghPlaylist}
                  ></img>
                </div>
                <div
                  onClick={() => this.OnclickEachPlaylist("ManpreetSingh", 2)}
                  className="box"
                >
                  <label>Manpreet Singh</label>
                  <label style={{fontSize:10, fontWeight:350}}>
              (100 Gurbani)
            </label>
                  
                  <img
                      style={styles.playlistImage}
                    // className='playIcon'
                    src={playlistManpreet}
                  ></img>
                </div>
                <div
                  onClick={() => this.OnclickEachPlaylist("Nitname", 3)}
                  className="box"
                >
                  <label>Nitname</label>
                  <label style={{fontSize:10, fontWeight:350}}>
              (100 Gurbani)
            </label>
                  <img
                      style={styles.playlistImage}
                    // className='playIcon'
                    src={pothiImage}
                  ></img>
                </div>
              </div>
            )}

            {window.innerWidth >= 768 ? (
              <div
                style={styles.AudioMainDivWeb}
              >
                <AudioPlayer
                  onToggleTrackPlayPause={this.state.onToggleTrackPlayPause}
                  renderPlayList={this.RenderPlayList}
                  currentIndex={this.state.currentIndex}
                  OnToggleAudioPlayPause={this.onclickPlayPauseBtn}
                  CurrentRagiName={this.state.CurrentRagiName}
                  itemNo={this.state.itemNo}
                  onPageLoad={this.state.onPageLoad}
                  isPlaying={this.state.isPlaying}
                  ref={this.refss}
                  songs={
                    getGurbani().GurubaniMusic[this.state.itemNo][
                      this.state.CurrentRagiName
                    ]
                  }
                />
              </div>
            ) : (
              <div
                style={styles.AudioMainDivMobile}
              >
           
                <AudioPlayer
                  onToggleTrackPlayPause={this.state.onToggleTrackPlayPause}
                  renderPlayList={this.RenderPlayList}
                  currentIndex={this.state.currentIndex}
                  OnToggleAudioPlayPause={this.onclickPlayPauseBtn}
                  CurrentRagiName={this.state.CurrentRagiName}
                  itemNo={this.state.itemNo}
                  onPageLoad={this.state.onPageLoad}
                  isPlaying={this.state.isPlaying}
                  ref={this.refss}
                  songs={this.state.selectedRagiAllGurbani}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  main: StylesMedia('main'),
  
 
  HeaderDiv: {
    width: "100%",
    height: 60,
    justifyContent: "space-between",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    backgroundColor: "white",
  },

  headerDivChild:{
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  imageKhanda : {
    marginRight: 10,
    marginLeft: 10,
    borderRadius: 20,
    height: 30,
    width: 30,
  },
  menuImage : { marginRight: 10, height: 40, width: 35 },

  gurbaniListandPlayListMainDiv : {
    display: "flex",
    flexDirection: window.innerWidth > 950 ? "row" : "column",
    width: "100%",
    height: "100%",
    alignItems: "flex-start",
    justifyContent: "space-around",
    position: "relative",
  },
  gurbaniListMainDiv :{
    overflowY: "none",
    alignSelf: "left",
    width: window.innerWidth >= 950 ? "54%" : "100%",
    paddingBottom: 140,
    // maxHeight: 540,
  },
  PlaylistMainDiv: {
    width:  window.innerWidth >= 950 ? "40%" : "100%",
    position: "sticky",
  },
  PlaylistMainDivChild : {
    flexWrap: "wrap",
    display: "flex",
    width: "100%",
    height: "100%",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "white",
    padding: 10,
  },
  PlaylistInnerBoxDiv :{
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  playlistImage : {
    borderRadius: 20,
    height: 70,
    width: 70,
  },
  AudioMainDivWeb:{
    marginTop: 10,
    alignSelf: "center",
    display: "flex",
    justifyContent: "center",
  },
  AudioMainDivMobile : {
    width: "96%",
    position: "fixed",
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },

  listSubheadingWeb : { alignSelf: "left", width: "54%", marginLeft: 18 },
  listSubheadingMobile :{ alignSelf: "left", width: "100%" },
  listSubheadingChildDiv : {
    overflow: "hidden",
    marginBottom: 0,
    padding: 10,
    backgroundColor: "#e8edf2",
    borderColor: "white",
    borderWidth: 1,
    borderStyle: "solid",
    justifyContent: "space-between",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
  },

};
export default hocComponent(App);
