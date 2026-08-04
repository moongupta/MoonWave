"use client";

import BackgroundGlow from "../effects/BackgroundGlow";
import BottomPlayer from "../player/BottomPlayer";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";
interface Props {
    children: React.ReactNode;
    activePage?: string;
}

export default function MainLayout({
    children,
    activePage = "Home",
}: Props) {
    return (
        <div className="flex h-screen bg-[#070707] text-white overflow-hidden">
            <BackgroundGlow />

            <Sidebar activePage={activePage} />

            <div className="flex flex-1 flex-col">

                <div className="flex flex-1 flex-col">

                    <TopBar />

                    <main className="flex-1 overflow-y-auto">
                        {children}
                    </main>

                </div>



            </div>

        </div>
    );
}