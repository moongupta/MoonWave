"use client";
import Image from "next/image";
import { Play } from "lucide-react";
import { songs } from "@/app/data/songs";
import type { Song } from "@/app/types/song";
export default function ListenAgain({ onSelectSong }: { onSelectSong: (song: Song) => void }) { return <section><h2 className="section-title">Listen again <span>›</span></h2><div className="listen-row">{songs.concat(songs).slice(0, 6).map((song, index) => <button key={`${song.id}-${index}`} onClick={() => onSelectSong(song)} className="listen-card"><Image src={song.image} alt={song.title} width={66} height={66} /><span><b>{song.title}</b><small>{song.artist}</small></span><i><Play size={13} fill="currentColor" /></i></button>)}</div></section>; }
