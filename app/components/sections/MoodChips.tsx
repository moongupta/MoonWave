"use client";
import { useState } from "react";
import { Car, CloudRain, Dumbbell, Heart, Leaf, Moon, PartyPopper, Target } from "lucide-react";
const moods = [{ title: "Relax", icon: Leaf }, { title: "Focus", icon: Target }, { title: "Workout", icon: Dumbbell }, { title: "Commute", icon: Car }, { title: "Party", icon: PartyPopper }, { title: "Sad", icon: CloudRain }, { title: "Romance", icon: Heart }, { title: "Sleep", icon: Moon }];
export default function MoodChips() { const [active, setActive] = useState("Relax"); return <section className="mood-row" aria-label="Music moods">{moods.map(({ title, icon: Icon }) => <button key={title} onClick={() => setActive(title)} className={`mood-chip ${active === title ? "mood-chip-active" : ""}`}><Icon size={16} />{title}</button>)}<button className="mood-chip">More <span>⌄</span></button></section>; }
