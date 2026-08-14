"use client";
import Image from "next/image";
import { Play } from "lucide-react";
import { songs } from "@/app/data/songs";
import type { Song } from "@/app/types/song";
export default function NowPlaying(props: { song: Song; isPlaying: boolean }) { void props; return <section><div className="section-heading"><h2 className="section-title">New releases <span>›</span></h2><button>View all</button></div><div className="release-row">{songs.map(song => <article key={song.id} className="release-card"><Image src={song.image} alt={song.title} fill className="object-cover" /><div><span>New release</span><h3>{song.title}</h3><p>{song.artist}</p><button aria-label={`Play ${song.title}`}><Play size={16} fill="currentColor" /></button></div></article>)}</div></section>; }
