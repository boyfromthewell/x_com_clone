import { useSession } from "next-auth/react";
import { useCallback, useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";

let socket: Socket | null;

export default function useSocket(): [Socket | null, () => void] {
  const { data: session } = useSession();

  const disconnect = useCallback(() => {
    socket?.disconnect();
    socket = null;
  }, []);

  useEffect(() => {
    if (!socket) {
      const socketRes = io(`${process.env.NEXT_PUBLIC_BASE_URL}/messages`, {
        transports: ["websocket"],
      });

      socketRes.on("connect_err", (err) => {
        console.error(err);
      });
      socket = socketRes;
    }
  }, []);

  useEffect(() => {
    if (socket?.connected && session?.user?.email) {
      socket?.emit("login", { id: session.user.email });
    }
  }, [session]);

  return [socket, disconnect];
}
