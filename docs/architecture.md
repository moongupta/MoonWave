# MoonWave Architecture

## Core

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion

## Providers

AudioProvider
ThemeProvider
LibraryProvider
PlaylistProvider

## Rendering Pipeline

Audio

↓

AnalyserNode

↓

WaveRenderer

↓

CanvasWave

↓

Waveform

↓

Bottom Player

## Folder Structure

app/
components/
context/
hooks/
services/
types/
utils/

## Future

Lyrics Engine
Queue Drawer
Equalizer
Search
Playlists