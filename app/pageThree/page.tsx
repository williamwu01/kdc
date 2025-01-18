"use client";

import React from "react";
import CenteredLayout from "../components/CenterContext";
import PlayfulButton from "../components/PlayfulButton";
import Image from "next/image";

export default function Page2() {
  return (
    <CenteredLayout>
      <h1 className="text-white">Kelly</h1>
      <p className="text-white">Will You Go Out With Me? ☺️</p>

      {/* Playful button placed here next to the "Prev" button */}
      <PlayfulButton />
			<Image
				src="/loveyou.webp"
				alt="Dancing Animation"
				width={200}
				height={200}
				unoptimized
			/>
    </CenteredLayout>
  );
}