"use client";
import { useContext } from "react";
import { TabContext } from "./TabProvider";
import PostRecommends from "./PostRecommends";
import PostFollowing from "./PostFollowing";

export default function TabDecider() {
  const { tab } = useContext(TabContext);
  if (tab === "rec") {
    return <PostRecommends />;
  }
  return <PostFollowing />;
}
