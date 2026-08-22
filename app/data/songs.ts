import type { Song } from "../types/song";
import { lyrics as becaliveLyrics } from "../components/player/lyrics/lyrics";


export const songs: Song[] = [

{
  id: "becalive",

  title: "BECALIVE",
  artist: "Moon Gupta",
  album: "BECALIVE",

  image: "/covers/becalive.jpg",
  audio: "/songs/becalive.mp3",

  duration: 353,
  durationLabel: "5:53",

  year: 2026,
  genre: "Cinematic Pop",

  streams: "24M+",
  plays: 24000000,

  explicit: false,
  featured: true,
  liked: false,
  downloaded: false,


  // FULL 140 LINE BECALIVE LYRICS
  lyrics: becaliveLyrics,


  theme:{
  primary:"#7C3AED",
  secondary:"#2563EB",
  accent:"#FFFFFF",

  mood:"rebirth",

  energy:"high",

  atmosphere:"cinematic hope",

  visualStyle:"dream",
}

},


{
  id: "love-me-harder",

  title: "Love Me Harder",
  artist: "Ariana Grande & The Weeknd",
  album: "My Everything",

  image: "/covers/neon.jpg",
  audio: "/songs/love-me-harder.mp3",

  duration: 236,
  durationLabel: "3:56",

  year: 2014,
  genre: "Pop",

  streams: "2.1B",
  plays: 2100000000,

  explicit: false,
  featured: true,
  liked: false,
  downloaded: false,


  lyrics: [
    {
      time: 0,
      text: "Tell me something I need to know..."
    },
    {
      time: 5,
      text: "Then take my breath and never let it go..."
    },
    {
      time: 10,
      text: "If you just let me invade your space..."
    },
  ],


  theme: {
    primary: "#C1121F",
    secondary: "#FF4D6D",
    accent: "#FFFFFF",
  },

},


{
  id: "no-tears-left-to-cry",

  title: "no tears left to cry",
  artist: "Ariana Grande",
  album: "Sweetener",

  image: "/covers/infinity.jpg",
  audio: "/songs/no-tears-left-to-cry.mp3",

  duration: 205,
  durationLabel: "3:25",

  year: 2018,
  genre: "Pop",

  streams: "1.5B",
  plays: 1500000000,

  explicit: false,
  featured: true,
  liked: false,
  downloaded: false,


  lyrics: [
    {
      time:0,
      text:"Right now I'm in a state of mind..."
    },
    {
      time:5,
      text:"I just wanna be in like all the time..."
    },
    {
      time:10,
      text:"Ain't got no tears left to cry..."
    },
  ],


  theme:{
    primary:"#00C896",
    secondary:"#00E5FF",
    accent:"#FFFFFF",
  },

},


{
  id:"becalive-live",

  title:"BECALIVE (Live)",
  artist:"Moon Gupta",
  album:"BECALIVE Live",

  image:"/covers/becalive.jpg",
  audio:"/songs/becalive.mp3",

  duration:353,
  durationLabel:"5:53",

  year:2026,
  genre:"Live Performance",

  streams:"8M+",
  plays:8000000,

  explicit:false,
  featured:false,
  liked:false,
  downloaded:false,


  lyrics:[
    {
      time:0,
      text:"The crowd sings together..."
    },
    {
      time:5,
      text:"Every soul becomes alive..."
    },
    {
      time:10,
      text:"One voice. One world."
    },
  ],


  theme:{
    primary:"#F97316",
    secondary:"#FB923C",
    accent:"#FFFFFF",
  },

},


{
  id:"take-my-breath",

  title:"Take My Breath",
  artist:"The Weeknd",
  album:"Dawn FM",

  image:"/covers/awaken.jpg",
  audio:"/songs/take-my-breath.mp3",

  duration:340,
  durationLabel:"5:40",

  year:2021,
  genre:"Synthwave",

  streams:"1.2B",
  plays:1200000000,

  explicit:false,
  featured:true,
  liked:false,
  downloaded:false,


  lyrics:[
    {
      time:0,
      text:"Take my breath away..."
    },
    {
      time:5,
      text:"Closer every second..."
    },
    {
      time:10,
      text:"Lost inside the rhythm..."
    },
  ],


  theme:{
    primary:"#FF0054",
    secondary:"#FF5400",
    accent:"#FFFFFF",
  },

},


{
  id:"the-lady-in-my-life",

  title:"The Lady in My Life",
  artist:"Michael Jackson",
  album:"Thriller",

  image:"/covers/dream-state.jpg",
  audio:"/songs/the-lady-in-my-life.mp3",

  duration:299,
  durationLabel:"4:59",

  year:1982,
  genre:"R&B",

  streams:"420M",
  plays:420000000,

  explicit:false,
  featured:true,
  liked:false,
  downloaded:false,


  lyrics:[
    {
      time:0,
      text:"Let me keep you warm..."
    },
    {
      time:5,
      text:"You're the lady in my life..."
    },
    {
      time:10,
      text:"Forever and always..."
    },
  ],


  theme:{
    primary:"#4B0082",
    secondary:"#7B2CBF",
    accent:"#FFFFFF",
  },

},

];