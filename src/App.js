import React from 'react';
import './App.css';
import ReactAudioPlayer from 'react-audio-player';
import firebase from './firebase/firebaseConfig';
import '@firebase/storage';
import playIcon from './images/playIcon.png';
import pauseIcon from './images/pauseIcon.webp';
import CustomAudioPlayer from './audioPlayer/demo/src/index';
import downloadIcon from './images/download.png';
import dp1 from './images/gurpreetji.png';
import dp2 from './images/dp2.jpg';
import dp3 from './images/dp3.jpg';
import dp4 from './images/dp3.jpg';

import dp5 from './images/dp4.jpg';
import dp6 from './images/dp5.jpg';
import dp7 from './images/dp6.jpg';
import khanda from './images/khanda.jpg';
import menu from './images/menu.png';





import './styles/musicScreen.css';

let intenetConnected = true;

let url =
  'https://firebasestorage.googleapis.com/v0/b/my-website-fee43.appspot.com/o/GurubaniMusic%2FBhajMannMereEkoNaam.mp3?alt=media&token=49f1ddbd-0357-4664-aa98-a0173c641a58';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      play: false,
      realData: {},
      gurubaniList: [],
      url: 'https://firebasestorage.googleapis.com/v0/b/my-website-fee43.appspot.com/o/GurubaniMusic%2FBhajMannMereEkoNaam.mp3?alt=media&token=49f1ddbd-0357-4664-aa98-a0173c641a58',
    };
  }

  onclickPlayPauseBtn = async (e, itemNo, url, i, ragiName, name) => {

    let childElement = (document.getElementById(name).children)[0].children;
    // let childElement = child.children;
    console.log(childElement, 'childElement');

    if (childElement[1].src.includes('playIcon')) {
      await this.state.realData.GurubaniMusic.map((item, ind) => {
        if (item.visible == true) {
          return item[item['RagiName']].map((eachGurubani, index) => {
            console.log(item.itemNo + ' itemNo.itemNo');
            console.log(itemNo + ' itemNo');

            console.log(eachGurubani.GurubaniNo + '  eachGurubani.GurubaniNo');
            console.log(i + ' i');

            if (item.itemNo == itemNo && eachGurubani.GurubaniNo == i) {
              eachGurubani.iconToDisplay = 'pause';
            } else {
              eachGurubani.iconToDisplay = 'play';
            }
          });
        }
      });
      await this.RenderPlayList(this.state.realData);
      await this.setState(
        {
          url: url,
        },
        () => {
          document.getElementById('my-audio').load();
          document.getElementById('my-audio').play();
        }
      );

      // realData.GurubaniMusic[itemNo][ragiName][i].iconToDisplay = 'pause';

      console.log(this.state.realData);
    } else {
      await this.state.realData.GurubaniMusic.map((item, ind) => {
        if (item.visible == true) {
          return item[item['RagiName']].map((eachGurubani, index) => {
            console.log(item.itemNo + ' itemNo.itemNo');
            console.log(itemNo + ' itemNo');

            console.log(eachGurubani.GurubaniNo + '  eachGurubani.GurubaniNo');
            console.log(i + ' i');

            if (item.itemNo == itemNo && eachGurubani.GurubaniNo == i) {
              eachGurubani.iconToDisplay = 'play';
            } else {
              // eachGurubani.iconToDisplay = 'pause';
            }
          });
        }
      });
      await this.RenderPlayList(this.state.realData);
      await this.setState(
        {
          url: url,
        },
        () => {
          // document.getElementById('my-audio').setAttribute('src', url);

          document.getElementById('my-audio').load();
          document.getElementById('my-audio').pause();
        }
      );
    }

    // var newURL =
    //   'https://firebasestorage.googleapis.com/v0/b/my-website-fee43.appspot.com/o/GurubaniMusic%2Fmool.mp3?alt=media&token=ef11570a-42d4-405c-967d-fd7ba4b9c939';
  };

  onMouseEnter = (name) => {
    let ele = document.getElementById(name);
    ele.style.backgroundColor = 'white';
  };

  onMouseLeave = (name) => {
    let ele = document.getElementById(name);
    ele.style.backgroundColor = '#e8edf2';
  };
  RenderPlayList = async (dataMap) => {
    await this.setState({
      gurubaniList: [],
    });
    var i = -1;
    await dataMap['GurubaniMusic'].map((item, index) => {
      if (item.visible == true) {
        return item[item['RagiName']].map((eachGurubani, inx) => {
          i = i+1;
          this.addEachGurbani(
            item.itemNo,
            eachGurubani.name,
            eachGurubani.url,
            i,
            item.RagiName,
            eachGurubani.iconToDisplay,
            eachGurubani.totalTime
          );
        });
      }
      console.log(this.state.gurubaniList);
    });
  };

  initialLoadPlaylist = () => {
    // let ref = firebase.database().ref('/');
    // ref.once('value', (snapshot) => {
    const data = {
      GurubaniMusic: [
        {
          itemNo: 0,
          visible: true,
          RagiName: 'GurupreetSinghRinku',
          GurupreetSinghRinku: [
            {
              totalTime: '10:12',
              GurubaniNo: 0,
              iconToDisplay: 'play',
              playing: false,
              name: 'Mool Mantar',
              url: 'https://firebasestorage.googleapis.com/v0/b/my-website-fee43.appspot.com/o/GurubaniMusic%2Fmool.mp3?alt=media&token=ef11570a-42d4-405c-967d-fd7ba4b9c939',
            },
            
            {
              totalTime: '01:10:12',
              GurubaniNo: 1,
              iconToDisplay: 'play',
              playing: false,
              name: 'Maan Mere Eko Naam dihaye',
              url: 'https://firebasestorage.googleapis.com/v0/b/my-website-fee43.appspot.com/o/GurubaniMusic%2FBhajMannMereEkoNaam.mp3?alt=media&token=49f1ddbd-0357-4664-aa98-a0173c641a58',
            },
            {
              totalTime: '16:12',
              GurubaniNo: 2,
              iconToDisplay: 'play',
              playing: false,
              name: 'nanak nam chardika',
              url: 'https://firebasestorage.googleapis.com/v0/b/my-website-fee43.appspot.com/o/GurubaniMusic%2FBhajMannMereEkoNaam.mp3?alt=media&token=49f1ddbd-0357-4664-aa98-a0173c641a58',
            },
            {
              totalTime: '50:12',
              GurubaniNo: 3,
              iconToDisplay: 'play',
              playing: false,
              name: 'Gur Gobind nam mile to jive',
              url: 'https://firebasestorage.googleapis.com/v0/b/my-website-fee43.appspot.com/o/GurubaniMusic%2FBhajMannMereEkoNaam.mp3?alt=media&token=49f1ddbd-0357-4664-aa98-a0173c641a58',
            },
            {
              totalTime: '49:12',
              GurubaniNo: 4,
              iconToDisplay: 'play',
              playing: false,
              name: 'Baba nanak mile to jive',
              url: 'https://firebasestorage.googleapis.com/v0/b/my-website-fee43.appspot.com/o/GurubaniMusic%2FBhajMannMereEkoNaam.mp3?alt=media&token=49f1ddbd-0357-4664-aa98-a0173c641a58',
            },
            {
              totalTime: '10:12',
              GurubaniNo: 5,
              iconToDisplay: 'play',
              playing: false,
              name: 'Mool Mantar 1',
              url: 'https://firebasestorage.googleapis.com/v0/b/my-website-fee43.appspot.com/o/GurubaniMusic%2Fmool.mp3?alt=media&token=ef11570a-42d4-405c-967d-fd7ba4b9c939',
            },
            
            {
              totalTime: '01:10:12',
              GurubaniNo: 6,
              iconToDisplay: 'play',
              playing: false,
              name: 'Maan Mere Eko Naam dihaye 1',
              url: 'https://firebasestorage.googleapis.com/v0/b/my-website-fee43.appspot.com/o/GurubaniMusic%2FBhajMannMereEkoNaam.mp3?alt=media&token=49f1ddbd-0357-4664-aa98-a0173c641a58',
            },
            {
              totalTime: '16:12',
              GurubaniNo: 7,
              iconToDisplay: 'play',
              playing: false,
              name: 'nanak nam chardika 1',
              url: 'https://firebasestorage.googleapis.com/v0/b/my-website-fee43.appspot.com/o/GurubaniMusic%2FBhajMannMereEkoNaam.mp3?alt=media&token=49f1ddbd-0357-4664-aa98-a0173c641a58',
            },
            {
              totalTime: '50:12',
              GurubaniNo: 8,
              iconToDisplay: 'play',
              playing: false,
              name: 'Gur Gobind nam mile to jive1',
              url: 'https://firebasestorage.googleapis.com/v0/b/my-website-fee43.appspot.com/o/GurubaniMusic%2FBhajMannMereEkoNaam.mp3?alt=media&token=49f1ddbd-0357-4664-aa98-a0173c641a58',
            },
            {
              totalTime: '49:12',
              GurubaniNo: 9,
              iconToDisplay: 'play',
              playing: false,
              name: 'Baba nanak mile to jive 1',
              url: 'https://firebasestorage.googleapis.com/v0/b/my-website-fee43.appspot.com/o/GurubaniMusic%2FBhajMannMereEkoNaam.mp3?alt=media&token=49f1ddbd-0357-4664-aa98-a0173c641a58',
            },
            
          ],
        },
        {
          itemNo: 1,
          visible: true,
          RagiName: 'ChamanjeetSingh',

          ChamanjeetSingh: [
            {
              totalTime: '19:12',

              GurubaniNo: 0,
              iconToDisplay: 'play',
              playing: false,
              name: 'Ek onkar',

              url: 'https://firebasestorage.googleapis.com/v0/b/my-website-fee43.appspot.com/o/GurubaniMusic%2Fmool.mp3?alt=media&token=ef11570a-42d4-405c-967d-fd7ba4b9c939',
            },
          ],
        },
      ],
    };
    this.setState(
      {
        realData: data,
      },
      () => {
        this.RenderPlayList(data);
      }
    );
    // const state = snapshot.val()['GurubaniMusic'];

    // console.log(JSON.stringify(state));
    // console.log(Object.keys(state));
    // });
  };

  async componentDidMount() {

    await this.initialLoadPlaylist();
   await this.checkInternet();




  }
  checkInternet = () => {
  
setInterval(function(){ 
  var ifConnected = window.navigator.onLine;
    if (ifConnected) {
      intenetConnected = ifConnected;
      document.getElementById("checkOnline").innerHTML = "Online";
      document.getElementById("checkOnline").style.color = "green";
    } else {
      intenetConnected = ifConnected;

      document.getElementById("checkOnline").innerHTML = "Offline";
      document.getElementById("checkOnline").style.color = "red";
    }
 }, 3000);

//  clearInterval();
  }
  addEachGurbani = async (itemNo, name, url, i, ragiName, iconToDisplay,totalTime) => {
    let array = [dp1,dp2,dp3,dp4,dp5,dp6,dp7]
    // let tempData = this.state.realData;
    let view = await (
      <div
        onMouseEnter={() => this.onMouseEnter(name)}
        onMouseLeave={() => this.onMouseLeave(name)}
        style={{
          cursor:'pointer',
          // marginBottom: 1,
          padding:10,
          backgroundColor: '#e8edf2',
          borderBottomColor: 'blue',
          borderColor : 'grey',
          borderWidth: 0,
          borderBottomWidth: 1,
          borderStyle: 'solid',
          justifyContent: 'space-between',
          alignItems: 'center',
          display: 'flex', flexDirection: 'row',
          
          
        }}
        id={name}
        onClick={(addEventListener) =>
          this.onclickPlayPauseBtn(
            addEventListener,
            itemNo,
            url,
            i,
            ragiName,
            name
          )
        }
        key={name}
      >


<div style={{display: 'flex', flexDirection:'row',justifyContent:'center',alignItems:'center'}}>

  
<p style={{
  margin:0,
width:10,

marginRight: 10,           textAlign: 'center'}}>{i+1}</p>
        <img
        style={{marginRight: 50,}}
          className='playIcon'
          src={iconToDisplay == 'play' ? playIcon : pauseIcon}
        ></img>

<img
        style={{marginRight: 10, borderRadius: 20}}

          className='playIcon'
          src={i <7 ?array[i] : dp1}
        ></img>
       

        <p style={{
          width: 200,
          margin:0,
          alignSelf:'center',
          fontSize: 12,

           textAlign: 'left'}}>{name}</p>
            </div>

            <div style={{display: 'flex', flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
           <p style={{
                
                  margin:0,
                  fontSize: 10,
           textAlign: 'center'}}>{ragiName}</p>
           
           <img
          className='playIcon'
          src={downloadIcon}
        ></img>
           </div>
           <div style={{display: 'flex', flexDirection:'row', width:50}}>
           <p style={{
                  margin:0,
                  fontSize: 10,
           textAlign: 'center'}}>{totalTime}</p>
           
           {/* <img
          className='playIcon'
          src={downloadIcon}
        ></img> */}
           </div>
          
        </div>
    );

    await this.setState({
      gurubaniList: [...this.state.gurubaniList, view],
    });
  };
  onclickDownloadBtn = () => {

   var  url ='https://firebasestorage.googleapis.com/v0/b/my-website-fee43.appspot.com/o/GurubaniMusic%2FBhajMannMereEkoNaam.mp3?alt=media&token=49f1ddbd-0357-4664-aa98-a0173c641a58';
   fetch(url,
   { mode: 'no-cors',
    header: {
      'Access-Control-Allow-Origin':'*',
    }}
    )
   .then( response => console.log(response))
   
  }

  render() {
    return (
      intenetConnected == true &&
      this.state.gurubaniList.length != 0 ? (
        <div
          style={{
            justifyContent: 'center',alignItems: 'center',
            // backgroundColor: 'skyBlue',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <div>
            <button onClick={()=> this.onclickDownloadBtn()}>
Download
            </button>
          </div>
      <div style={{display:'none'}}>
            <p  id="checkOnline"></p>
      </div>

          <div style={{width: '103%',height:60,
           justifyContent:'space-between', alignItems:'center',
          display:'flex',flexDirection:'row',backgroundColor:'white'}}>
            <div style={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>

         
            <img
        style={{marginRight: 10, marginLeft: 10, borderRadius: 20,height:30,width:30}}

          // className='playIcon'
          src={khanda}
        ></img>
            <h3>
              MP3 Gurbani
            </h3>
            </div>
            {/* <img
        style={{marginRight: 10,height:40,width:35}}

          // className='playIcon'
          src={menu}
        ></img> */}
          <select style={{backgroundColor:'#3fb7f5', width: 200, height:30}} name="cars" id="cars">
          <option disabled selected value="volvo">Select Gurbani</option>
    <option value="volvo">Gurpreet Singh Rinku</option>
    <option value="saab">Chamanjeet Singh</option>
    <option value="opel">Paramdeep Singh</option>
  </select>
          </div>
     
          
          {/* <ReactAudioPlayer
          style={{ color: 'red' }}
          src='https://firebasestorage.googleapis.com/v0/b/my-website-fee43.appspot.com/o/GurubaniMusic%2FBhajMannMereEkoNaam.mp3?alt=media&token=49f1ddbd-0357-4664-aa98-a0173c641a58'
          autoPlay
          controls
        /> */}
   
          
        <div style ={{alignSelf : 'center', width: '60%'}}>


        <div

style={{
 
  marginBottom: 0,
  padding:10,
  backgroundColor: '#e8edf2',
  borderColor: 'white',
  borderWidth: 1,
  borderStyle: 'solid',
  justifyContent: 'space-between',
  alignItems: 'center',
  display: 'flex', flexDirection: 'row',
  
  
}}

>




<div style={{display:'flex',flexDirection:'row'}}>

<p style={{
      fontWeight: 'bold',
      textAlign: 'center',
  margin:0,
 
  alignSelf: 'left',
  }}>{'#'}</p>
 
    <p style={{
      fontWeight: 'bold',
      textAlign: 'center',
  margin:0,
  width: 200,
  alignSelf: 'left',
  }}>{'Title'}</p>
  </div>
    <p style={{
  margin:0,
  textAlign: 'left',

  fontWeight: 'bold',
  }}>{'Time'}</p>

 

  
</div>

        </div>
  <div style ={{alignSelf : 'center', width: '60%', height: 400}}>{this.state.gurubaniList}</div>
          {!intenetConnected && <p>INTERNET OFF</p>}
          {/* <div style={{ bottom: 0, position: 'fixed', width: '100%', backgroundColor: 'white' }}>
            <audio
              id='my-audio'
              style={{backgroundColor:'blue'}}
              controls
            >
              <source src={this.state.url} />
            </audio>
          </div> */}
          <div style={{ bottom: 0, position: 'fixed', width: '100%', backgroundColor: 'white' }}>
            <CustomAudioPlayer/>
          </div>

        </div>
      ) : <div>
            <p  id="checkOnline"></p>
      </div>
    );
  }
}

export default App;
