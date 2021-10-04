import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import loaderImage from '../../images/loaderImage.gif'
import "./AudioPlayer.css";
import "./index.css";

let AUDIO;
let prog = 0;
let isInternetConnected = true;
class AudioPlayer extends React.Component {
  static propTypes = {
    songs: PropTypes.array.isRequired,
    autoplay: PropTypes.bool,
    onTimeUpdate: PropTypes.func,
    onEnded: PropTypes.func,
    onError: PropTypes.func,
    onPlay: PropTypes.func,
    onPause: PropTypes.func,
    onPrevious: PropTypes.func,
    onNext: PropTypes.func,
  };

  static defaultProps = {
    onTimeUpdate: () => {},
    onEnded: () => {},
    onError: () => {},
    onPlay: () => {},
    onPause: () => {},
    onPrevious: () => {},
    onNext: () => {},
  };

  constructor(props) {
    super(props);
    this.state = {
      active: props.songs[0],
      songs: props.songs,
      progress: 0,
      random: false,
      playing: false,
      repeat: false,
      mute: false,
      current: this.props.currentIndex,
    };
  }

  componentDidMount() {
    AUDIO = document.getElementById("audio");
    AUDIO.src = this.state.active.url;

    AUDIO.addEventListener("timeupdate", (e) => {
      this.updateProgress();

      // props.onTimeUpdate(e);
    });
    AUDIO.addEventListener("ended", (e) => {
      this.next();

      // if (this.state.songs.length > 1 || this.state.repeat) {
      //   this.next();
      // } else {
      //   this.setState({ playing: false });
      // }

      // props.onEnded(e);
    });

    AUDIO.addEventListener("error", async (e) => {
      var ifConnected = window.navigator.onLine;
      if (window.navigator.onLine) {
        this.next();
      } else {
      }
      // props.onError(e);
    });
    this.checkInternet();
  }

  componentWillReceiveProps(nextProps) {
    const { songs, onToggleTrackPlayPause } = this.props;
    const total = songs.length;
    const active = songs[this.props.currentIndex];

    console.log(this.props.currentIndex, "this.props.currentIndex");

    // prog = Math.round(this.props.progress * 1000) / 1000;
    this.setState(
      {
        current: this.props.currentIndex,
        active: songs[this.props.currentIndex],
        progress: onToggleTrackPlayPause == false ? 0 : this.state.progress,
      },
      () => {
        if (this.props.onToggleTrackPlayPause == false) {
          AUDIO.src = songs[this.props.currentIndex].url;
        }
        // this.props.onToggleTrackPlayPause == true  ? null : ();
        if (this.props.onPageLoad == false && this.props.isPlaying == true) {
          this.play();
        } else {
          this.pause();
        }
      }
    );

    // this.props.onPrevious();
  }


  checkInternet = () => {
    setInterval(() => {
      if (navigator.onLine) {
        
      if(isInternetConnected == false && this.state.playing == true) {
        AUDIO.load();
        AUDIO.play();
        isInternetConnected = true;
      }else{
        isInternetConnected = true;

      }
        


      
      } else {
        isInternetConnected = false;
      }

      this.setState({});
    }, 3000);

    //  clearInterval();
  };

  shuffle = (arr) => arr.sort(() => Math.random() - 0.5);

  updateProgress = () => {
    const { active, isPlaying } = this.state;
    const { duration, currentTime } = AUDIO;

    const progress = (currentTime * 100) / duration;

    console.log(progress);
    if (isNaN(progress) == false) {
      this.setState({
        progress: progress,
      });
    }
  };

  getDuration = () => {
    return document.getElementById("audio").duration;
  };

  setProgress = (e) => {
    console.log("setProgress", AUDIO.duration);

    try {
      const target =
        e.target.nodeName === "SPAN" ? e.target.parentNode : e.target;
      const width = target.clientWidth;
      const rect = target.getBoundingClientRect();
      const offsetX = e.clientX - rect.left;

      const duration = AUDIO.duration;
      const currentTime = (duration * offsetX) / width;
      if (isNaN(currentTime) == false) {
        const progress = (currentTime * 100) / duration;
        AUDIO.currentTime = currentTime;

        this.setState({
          progress: Math.round(progress * 1000) / 1000,
        });

        this.play();
      } else {
        alert(duration);
      }
    } catch (e) {
      alert("e" + e + "audio" + AUDIO.currentTime);
    }
  };

  play = () => {
    this.setState({
      playing: true,
    });

    // AUDIO.play();

    AUDIO.play().catch((error) => {
      // console.log(error);
      //  when an exception is played, the exception flow is followed
    });
    // this.props.onPlay();
  };

  pause = () => {
    this.setState({
      playing: false,
    });

    AUDIO.pause();

    this.props.onPause();
  };

  toggle = () => {
    const { repeat, current, songs, active, playing, progress } = this.state;
    const { itemNo, CurrentRagiName, currentIndex } = this.props;
    console.clear();
    // prog =  prog;
    var progs = this.state.progress;
    console.log("toogle", progs);
    this.props.OnToggleAudioPlayPause(
      itemNo,
      active.url,
      CurrentRagiName,
      active.name,
      currentIndex,
      true
    );
    // playing ? this.pause() : this.play();
  };
  getRandomInt = () => {
    let max = this.state.songs.length;
    return Math.floor(Math.random() * max);
  };
  next = () => {
    const { repeat, current, random } = this.state;
    const { itemNo, CurrentRagiName, currentIndex, songs } = this.props;

    const total = songs.length;
    const newSongToPlay = repeat
      ? current
      : random
      ? this.getRandomInt()
      : current < total - 1
      ? current + 1
      : 0;
    const active = songs[newSongToPlay];

    this.setState(
      {
        current: newSongToPlay,
        active: active,
        progress: 0,
      },
      () => {
        console.log(active.name + " active " + newSongToPlay + "current");
        AUDIO.src = active.url;
        this.play();
        if (repeat == false) {
          this.props.OnToggleAudioPlayPause(
            itemNo,
            active.url,
            CurrentRagiName,
            active.name,
            newSongToPlay,
            true
          );
        }
      }
    );

    // this.props.onNext();
  };

  previous = () => {
    const { itemNo, CurrentRagiName, currentIndex, songs } = this.props;

    const { repeat, current, random } = this.state;
    const total = songs.length;
    const newSongToPlay = repeat
      ? current
      : random
      ? this.getRandomInt()
      : current > 0
      ? current - 1
      : total - 1;
    // const newSongToPlay = current > 0 ? current - 1 : total - 1;
    const active = songs[newSongToPlay];

    this.setState(
      {
        current: newSongToPlay,
        active: active,
        progress: 0,
      },
      () => {
        AUDIO.src = active.url;
        this.play();
        if (repeat == false) {
          this.props.OnToggleAudioPlayPause(
            itemNo,
            active.url,
            CurrentRagiName,
            active.name,
            newSongToPlay,
            true
          );
        }
      }
    );

    // AUDIO.src = active.url;
    // this.play();
    // this.props.onPrevious();
  };

  randomize = () => {
    const { random, songs, repeat } = this.state;
    // const shuffled = this.shuffle(songs.slice());

    this.setState({
      random: !random,
    });
  };

  repeat = () =>
    this.setState({
      repeat: !this.state.repeat,
    });

  toggleMute = () => {
    const { mute } = this.state;

    this.setState({
      mute: !mute,
    });

    AUDIO.volume = !!mute;
  };

  render() {
    const {
      active: currentSong,
      active,
      progress,
      playing,
      mute,
      random,
      repeat,
    } = this.state;

    // const {progress} = this.props;

    // const coverClass = classnames({
    //   'player-cover': true,
    //   'no-height': !!active.cover === false,
    // });

    const playPauseClass = classnames({
      fa: true,
      "fa-play": !playing,
      "fa-pause": playing,
    });

    const volumeClass = classnames({
      fa: true,
      "fa-volume-up": !mute,
      "fa-volume-off": mute,
    });

    const randomClass = classnames({
      "player-btn small random": true,
      active: random,
    });

    const repeatClass = classnames({
      "player-btn small repeat": true,
      active: repeat,
    });

    return (
      <div className="container">
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:100,400,700"
          rel="stylesheet"
          type="text/css"
        />
        <div className="player-container">
          {/* <div
          className={coverClass}
          style={{
            backgroundImage: `url(${currentSong.cover || ''})`,
          }}
        ></div> */}

          <div
            style={{
              padding: 20,
              paddingTop: 0,
              justifyContent: "center",
              alignContent: "center",
              alignSelf: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <h2 className="artist-name">{currentSong.name}</h2>
            <h3 className="artist-song-name">{currentSong.name}</h3>
          </div>

          <div
            className="player-progress-container"
            onClick={(e) => this.setProgress(e)}
          >
            <span
              className="player-progress-value"
              style={{ width: progress + "%" }}
            ></span>
          </div>

          <div className="player-options">
            <div className="player-buttons player-controls">
              <button
                onClick={this.previous}
                className="player-btn medium"
                title="Previous Song"
              >
                <i className="fa fa-backward"></i>
              </button>
              {isInternetConnected ? (
                <button
                  onClick={this.toggle}
                  className="player-btn big"
                  title="Play/Pause"
                >
                  <i className={playPauseClass}></i>
                </button>
              ) : (
                <div><img className="loaderImage" src = {loaderImage} /></div>
              )}
              <button
                onClick={this.next}
                className="player-btn medium"
                title="Next Song"
              >
                <i className="fa fa-forward"></i>
              </button>
            </div>

            <div className="player-buttons">
              <button
                className="player-btn small volume"
                onClick={this.toggleMute}
                title="Mute/Unmute"
              >
                <i className={volumeClass}></i>
              </button>
              <button
                className={repeatClass}
                onClick={this.repeat}
                title="Repeat"
              >
                <i className="fa fa-repeat"></i>
              </button>
              <button
                className={randomClass}
                onClick={this.randomize}
                title="Shuffle"
              >
                <i className="fa fa-random"></i>
              </button>
              <audio preload="metadata" id="audio"></audio>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    );
  }
}





export default AudioPlayer;
