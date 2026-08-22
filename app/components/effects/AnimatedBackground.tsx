"use client";

import { motion } from "framer-motion";

import MusicParticles from "./MusicParticles";

import { usePlayer } from "@/app/context/AudioProvider";

import { getAtmosphere } from "@/app/lib/atmosphere";


export default function AnimatedBackground() {

  const {
    currentSong,
  } = usePlayer();



  if (!currentSong) {
    return null;
  }



  const {
    primary,
    secondary,
    accent,
    visualStyle,
  } = currentSong.theme;



  const atmosphere =
    getAtmosphere(currentSong);



  const movement =
    18 * atmosphere.glow;



  return (

    <>

      <div
        className="
          fixed
          inset-0
          -z-10
          overflow-hidden
          bg-[#030303]
        "
      >


        {/* =================================
            PRIMARY AURORA
        ================================= */}

        <motion.div

          animate={{

            x:[
              -movement,
              movement,
              -movement,
            ],

            y:[
              10,
              -10,
              10,
            ],

            scale:[
              1,
              1.12,
              1,
            ],

          }}


          transition={{

            duration:
              atmosphere.speed,

            repeat:
              Infinity,

            ease:
              "easeInOut",

          }}


          className="
            aurora
            aurora-1
          "


          style={{
            background: primary,
          }}

        />




        {/* =================================
            SECONDARY AURORA
        ================================= */}

        <motion.div


          animate={{

            x:[
              movement,
              -movement,
              movement,
            ],


            scale:[
              1.05,
              0.95,
              1.05,
            ],


            opacity:[
              0.5,
              atmosphere.glow,
              0.5,
            ],

          }}



          transition={{

            duration:
              atmosphere.speed + 2,

            repeat:
              Infinity,

            ease:
              "easeInOut",

          }}



          className="
            aurora
            aurora-2
          "


          style={{
            background: secondary,
          }}

        />





        {/* =================================
            ACCENT LIGHT SWEEP
        ================================= */}


        <motion.div


          animate={{

            opacity:[

              0.2,

              0.5 *
              atmosphere.glow,

              0.2,

            ],


            y:[

              "-20%",

              "20%",

              "-20%",

            ],


          }}



          transition={{


            duration:
              atmosphere.cinematic
                ? 7
                : 10,


            repeat:
              Infinity,


            ease:
              "easeInOut",

          }}



          className="
            light-sweep
          "



          style={{

            background:
              `linear-gradient(
                to bottom,
                transparent,
                ${accent},
                transparent
              )`,

          }}


        />





        {/* =================================
            MUSIC PARTICLES
        ================================= */}


        <MusicParticles

          color={accent}

        />






        {/* =================================
            CINEMA LAYERS
        ================================= */}



        <div
          className="
            noise-layer
          "
        />



        <div
          className="
            overlay-layer
          "
        />



        <div
          className="
            vignette-layer
          "
        />



      </div>

    </>

  );

}