"use client";

import React from "react";
import CenteredLayout from "../components/CenterContext";
import PlayfulButton from "../components/PlayfulButton";

export default function Page2() {
  return (
    <CenteredLayout>
      <h1>Kelly</h1>
      <p>Will You Go Out With Me?</p>

      {/* Playful button placed here next to the "Prev" button */}
      <PlayfulButton />
    </CenteredLayout>
  );
}