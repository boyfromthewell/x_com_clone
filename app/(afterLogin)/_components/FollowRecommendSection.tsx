"use client";
import { useQuery } from "@tanstack/react-query";
import { User } from "@/model/user";
import FollowRecommend from "./FollowRecommend";
import { getFollowRecommends } from "../_lib/getFollowRecommends";

export default function FollowRecommendSection() {
  const { data } = useQuery<User[]>({
    queryKey: ["users", "followRecommends"],
    queryFn: getFollowRecommends,
  });

  return data?.map((user) => <FollowRecommend user={user} key={user.id} />);
}
