"use client";

import {
  use,
  useState,
} from "react";

import { usePlayer } from "@/app/context/AudioProvider";
import { usePlaylists } from "@/app/context/PlaylistProvider";

import { songs } from "@/app/data/songs";

import AddSongsModal from "../AddSongsModal";


interface Props {

  params: Promise<{
    id: string;
  }>;

}



export default function PlaylistPage({
  params,
}: Props) {


  const { id } = use(params);



  const [
    open,
    setOpen,
  ] = useState(false);



  const {
    playSong,
    playPlaylist,
  } = usePlayer();



  const {
    playlists,
    addSongToPlaylist,
  } = usePlaylists();




  const playlist =
    playlists.find(
      (p) =>
        p.id === id
    );




  const playlistSongs =
    playlist
      ? songs.filter(
          (song) =>
            playlist.songs.includes(
              song.id
            )
        )
      : [];




  return (

    <main
      className="
        min-h-screen
        bg-black
        text-white
      "
    >


      {/* Header */}


      <div
        className="
          flex
          items-end
          gap-10
          bg-gradient-to-b
          from-red-700
          via-red-900
          to-black
          px-12
          py-16
        "
      >


        <img

          src="/covers/becalive.jpg"

          alt="Playlist Cover"

          className="
            h-72
            w-72
            rounded-3xl
            object-cover
            shadow-2xl
          "

        />



        <div>


          <p
            className="
              text-sm
              font-bold
              uppercase
              tracking-[0.3em]
              text-red-300
            "
          >
            Playlist
          </p>



          <h1
            className="
              mt-3
              text-7xl
              font-black
            "
          >
            {playlist?.title ?? "Playlist"}
          </h1>



          <p
            className="
              mt-5
              text-xl
              text-zinc-300
            "
          >
            Created by{" "}

            <span
              className="
                font-bold
                text-white
              "
            >
              {playlist?.creator ?? "Moon Gupta"}
            </span>

          </p>



          <p
            className="
              mt-2
              text-zinc-400
            "
          >
            {playlistSongs.length} Songs
            {" • "}
            Playlist ID: {id}

          </p>




          <div
            className="
              mt-8
              flex
              gap-4
            "
          >


            <button

              onClick={() => {

                if (!playlistSongs.length)
                  return;

                playPlaylist(
                  playlistSongs
                );

              }}

              className="
                rounded-full
                bg-red-500
                px-8
                py-4
                font-bold
                transition
                hover:scale-105
                hover:bg-red-600
              "

            >
              ▶ Play
            </button>




            <button

              onClick={() =>
                setOpen(true)
              }

              className="
                rounded-full
                border
                border-white/20
                px-8
                py-4
                font-bold
                transition
                hover:bg-white/10
              "

            >
              + Add Songs
            </button>



            <button

              className="
                rounded-full
                border
                border-white/20
                px-8
                py-4
                font-bold
                transition
                hover:bg-white/10
              "

            >
              ♡ Favorite
            </button>



          </div>


        </div>


      </div>





      {/* Songs */}


      <div
        className="
          px-12
          py-10
        "
      >


        <h2
          className="
            mb-6
            text-3xl
            font-black
          "
        >
          Songs
        </h2>



        <div
          className="
            overflow-hidden
            rounded-3xl
            border
            border-white/10
          "
        >


          <table
            className="
              w-full
            "
          >


            <tbody>


              {playlistSongs.map(
                (song,index)=>(


                  <tr

                    key={
                      song.id
                    }


                    onClick={() =>
                      playSong(song)
                    }


                    className="
                      cursor-pointer
                      border-t
                      border-white/10
                      transition
                      hover:bg-white/5
                    "

                  >


                    <td
                      className="
                        px-6
                        py-5
                        text-zinc-500
                      "
                    >
                      {index + 1}
                    </td>



                    <td
                      className="
                        px-6
                        py-5
                      "
                    >

                      <div
                        className="
                          flex
                          items-center
                          gap-4
                        "
                      >

                        <img

                          src={song.image}

                          alt={song.title}

                          className="
                            h-14
                            w-14
                            rounded-xl
                            object-cover
                          "

                        />


                        <div>

                          <p
                            className="
                              font-semibold
                            "
                          >
                            {song.title}
                          </p>


                          <p
                            className="
                              text-sm
                              text-zinc-500
                            "
                          >
                            {song.artist}
                          </p>


                        </div>


                      </div>


                    </td>



                    <td
                      className="
                        px-6
                        py-5
                        text-zinc-400
                      "
                    >
                      {song.album}
                    </td>



                    <td
                      className="
                        px-6
                        py-5
                        text-right
                        text-zinc-400
                      "
                    >
                      {song.durationLabel}
                    </td>



                  </tr>


                )
              )}


            </tbody>


          </table>


        </div>


      </div>





      <AddSongsModal

        open={open}

        onClose={() =>
          setOpen(false)
        }


        onSelect={(song)=>{

          if (!playlist)
            return;


          addSongToPlaylist(
            playlist.id,
            song
          );

        }}

      />



    </main>

  );

}