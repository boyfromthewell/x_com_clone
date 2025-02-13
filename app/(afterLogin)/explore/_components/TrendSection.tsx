"use client";

import { useQuery } from "@tanstack/react-query";
import { HashTag } from "@/model/hashtag";
import { getTrends } from "@/app/(afterLogin)/_lib/getTrends";
import Trend from "../../_components/Trend";

export default function TrendSection() {
  const { data } = useQuery<HashTag[]>({
    queryKey: ["trends"],
    queryFn: getTrends,
  });
  return data?.map((trend, idx) => (
    <Trend trend={trend} key={`${trend.title}${idx}`} />
  ));
}
