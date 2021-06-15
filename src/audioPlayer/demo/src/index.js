import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AudioPlayer from '../../src';

const songs = [
  {
    url: 'https://firebasestorage.googleapis.com/v0/b/my-website-fee43.appspot.com/o/GurubaniMusic%2FBhajMannMereEkoNaam.mp3?alt=media&token=49f1ddbd-0357-4664-aa98-a0173c641a58',
    cover:
      'http://www.nossoarmario.com/blog/wp-content/uploads/2015/01/redfoo.jpg',
    artist: {
      name: 'Gurpreet Singh',
      song: 'Mool Mantar',
    },
  },
  {
    url: 'https://firebasestorage.googleapis.com/v0/b/my-website-fee43.appspot.com/o/GurubaniMusic%2FBhajMannMereEkoNaam.mp3?alt=media&token=49f1ddbd-0357-4664-aa98-a0173c641a58',
    cover:
      'http://www.cmchatlive.com/scenic/wp-content/uploads/2015/05/hugo-99-problems-country-that.jpg',
    artist: {
      name: 'Hugo',
      song: '99 Problems',
    },
  },
  {
    url: 'https://firebasestorage.googleapis.com/v0/b/my-website-fee43.appspot.com/o/GurubaniMusic%2FBhajMannMereEkoNaam.mp3?alt=media&token=49f1ddbd-0357-4664-aa98-a0173c641a58',
    cover:
      'http://myuvn.com/wp-content/uploads/2015/07/justin-timberlake-pusher-love-girl.jpg',
    artist: {
      name: 'Justin Timberlake',
      song: 'Summer Love',
    },
  },
  {
    url: 'https://firebasestorage.googleapis.com/v0/b/my-website-fee43.appspot.com/o/GurubaniMusic%2FBhajMannMereEkoNaam.mp3?alt=media&token=49f1ddbd-0357-4664-aa98-a0173c641a58',
    cover:
      'http://www.tenhomaisdiscosqueamigos.com/wp-content/uploads/2015/06/daft-punk.jpg',
    artist: {
      name: 'Daft Punk',
      song: 'Get Lucky',
    },
  },
  {
    url: 'https://firebasestorage.googleapis.com/v0/b/my-website-fee43.appspot.com/o/GurubaniMusic%2FBhajMannMereEkoNaam.mp3?alt=media&token=49f1ddbd-0357-4664-aa98-a0173c641a58',
    artist: {
      name: 'Michael Buble',
      song: 'Feeling Good',
    },
  },
  {
    url: 'https://firebasestorage.googleapis.com/v0/b/my-website-fee43.appspot.com/o/GurubaniMusic%2FBhajMannMereEkoNaam.mp3?alt=media&token=49f1ddbd-0357-4664-aa98-a0173c641a58',

    cover:
      'http://www.clickgratis.com.br/fotos-imagens/the-weekend/aHR0cDovL3d3dy5iaWxsYm9hcmQuY29tL2ZpbGVzL3N0eWxlcy9wcm9tb182NTAvcHVibGljL21lZGlhL3RoZS13ZWVrZW5kLXRoZS1oaWxscy12aWRlby1iaWxsYm9hcmQtNjUwLmpwZw==.jpg',
    artist: {
      name: 'The Weekend',
      song: "Can't Fell My Face",
    },
  },
  {
    url: 'https://firebasestorage.googleapis.com/v0/b/my-website-fee43.appspot.com/o/GurubaniMusic%2FBhajMannMereEkoNaam.mp3?alt=media&token=49f1ddbd-0357-4664-aa98-a0173c641a58',

    cover: 'http://imagens.ailhadometal.com/2015/03/Metallica3.png',
    artist: {
      name: 'Metallica',
      song: 'Fuel',
    },
  },
];

export default class CustomAudioPlayer extends React.Component {

  constructor(props){
    super(props);

  }

  render() {
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
  
      {/* <h1>CLAudioPlayer</h1>
      <h2>
        <a href="https://github.com/cezarlz/react-cl-audio-player">
          View project on GitHub
        </a>
      </h2> */}
      {/* <h1 style={{marginBottom: 20}}>d</h1> */}
      {/* <AudioPlayer songs={songs} /> */}
  
      {/* <div class="footer">Copyright &copy; 2018 Cezar Luiz.</div> */}
    </div>
    );
  }

}

// ReactDOM.render(

//   // document.querySelector('#demo')
// );
