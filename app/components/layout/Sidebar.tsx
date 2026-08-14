"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Compass, Download, Heart, House, Library, ListMusic, Plus, Radio, Sparkles } from "lucide-react";

const items = [
  { name: "Home", icon: House, href: "/" },
  { name: "Explore", icon: Compass, href: "/explore" },
  { name: "Library", icon: Library, href: "/library" },
  { name: "Create", icon: Plus, href: "/playlists" },
];

const playlists = ["Late Night Drive", "Focus Flow", "Gym Energy", "Chill Vibes"];

export default function Sidebar({ activePage }: { activePage?: string }) {
  const pathname = usePathname();

  return (
    <aside className="sidebar hidden h-screen w-[248px] shrink-0 flex-col px-4 py-7 lg:flex">
      <Link href="/" className="mb-9 flex items-center gap-2.5 px-4">
        <span className="grid h-7 w-7 place-items-center rounded-md bg-[#ff1744] shadow-[0_0_20px_rgba(255,23,68,.28)]"><Sparkles size={15} fill="white" /></span>
        <span className="text-xl font-semibold tracking-[-0.06em]">YouTube Music <b className="ml-1 text-xs font-medium tracking-normal text-[#ff1744]">2030</b></span>
      </Link>

      <nav className="space-y-1 border-b border-white/[0.08] pb-6">
        {items.map(({ name, icon: Icon, href }) => {
          const active = activePage ? activePage === name : pathname === href || (href !== "/" && pathname.startsWith(href));
          return <Link key={name} href={href} className={`sidebar-link ${active ? "sidebar-link-active" : ""}`}>
            <Icon size={20} strokeWidth={1.8} /><span>{name}</span>
          </Link>;
        })}
      </nav>

      <div className="border-b border-white/[0.08] py-6">
        <div className="sidebar-heading">Your Music <span>⌄</span></div>
        <button className="sidebar-link"><Heart size={19} /><span>Liked Songs</span></button>
        <button className="sidebar-link"><Radio size={19} /><span>Episodes for Later</span></button>
        <button className="sidebar-link"><Download size={19} /><span>Downloads</span></button>
      </div>

      <div className="min-h-0 flex-1 py-6">
        <div className="sidebar-heading">Playlists <Plus size={17} /></div>
        <div className="space-y-1">
          {playlists.map((playlist, index) => (
            <Link href="/playlists" key={playlist} className="playlist-link">
              <span className={`playlist-art playlist-art-${index}`}><ListMusic size={14} /></span>
              <span><b>{playlist}</b><small>{[42, 67, 58, 31][index]} songs</small></span>
            </Link>
          ))}
        </div>
      </div>
      <button className="sidebar-link mt-auto text-sm"><span>⌄</span><span>Show more</span></button>
    </aside>
  );
}
