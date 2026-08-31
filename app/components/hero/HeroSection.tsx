"use client";

import Image from "next/image";
import { Play, Shuffle } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      className="
        relative
        overflow-hidden
        rounded-[32px]
        border
        border-white/10
        bg-gradient-to-r
        from-[#14101f]
        via-[#241533]
        to-[#3a1c33]

        px-5
        py-8

        sm:px-8
        sm:py-10

        lg:px-12
        lg:py-16
      "
    >

      {/* Background glow */}

      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_80%_30%,rgba(255,80,120,.25),transparent_35%)]
        "
      />


      {/* Mobile Artwork */}

      <div
        className="
          relative
          z-10
          flex
          justify-center

          lg:hidden
        "
      >

        <div
          className="
            relative
            h-[210px]
            w-[210px]
            overflow-hidden
            rounded-[28px]
            border
            border-white/10
            shadow-2xl
          "
        >

          <Image
            src="/covers/becalive.jpg"
            alt="BECALIVE"
            fill
            priority
            className="
              object-cover
            "
          />

        </div>

      </div>



      {/* Main Layout */}

      <div
        className="
          relative
          z-10

          mt-8

          flex
          flex-col
          gap-10


          lg:mt-0
          lg:flex-row
          lg:items-center
          lg:justify-between
        "
      >


        {/* Left Content */}


        <div
          className="
            max-w-xl
          "
        >

          <p
            className="
              text-xs
              font-bold
              uppercase
              tracking-[0.35em]
              text-red-400
            "
          >
            Made For You
          </p>



          <h1
            className="
              mt-4

              text-5xl
              font-black
              leading-[0.9]
              tracking-tight
              text-white


              sm:text-6xl


              lg:text-7xl
            "
          >

            Your Evening
            <br />

            Soundtrack

          </h1>



          <p
            className="
              mt-5
              text-sm
              leading-6
              text-zinc-300


              sm:text-lg
              sm:leading-8
            "
          >

            Based on your recent listening,
            we curated something you'll love.

          </p>



          <div
            className="
              mt-8
              flex
              gap-3
            "
          >


            <button
              className="
                flex
                items-center
                gap-2

                rounded-full

                bg-red-500

                px-6
                py-3

                text-sm
                font-bold
                text-white

                transition

                hover:scale-105
              "
            >

              <Play
                size={17}
                fill="white"
              />

              Play Mix

            </button>



            <button
              className="
                flex
                items-center
                gap-2

                rounded-full

                border
                border-white/20

                bg-white/5

                px-6
                py-3

                text-sm
                font-bold
                text-white

                backdrop-blur-xl
              "
            >

              <Shuffle size={17}/>

              Shuffle

            </button>


          </div>


        </div>




        {/* Desktop Artwork */}


        <div
          className="
            relative
            hidden

            lg:block

            h-[380px]
            w-[380px]

            xl:h-[430px]
            xl:w-[430px]
          "
        >

          <Image
            src="/covers/becalive.jpg"
            alt="BECALIVE"
            fill
            priority
            className="
              rounded-[36px]
              object-cover

              shadow-[0_40px_100px_rgba(0,0,0,.5)]
            "
          />


        </div>



      </div>


    </section>
  );
}