import React from "react";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import AuthButton from "./AuthButton";

const NavBar = () => {
  const cookieStore = cookies();
  const canInitSupabaseClient = () => {
    try {
      createClient(cookieStore);
      return true;
    } catch (e) {
      return false;
    }
  };

  const isSupabaseConnected = canInitSupabaseClient();
  return (
    <nav className="w-full flex border-b border-b-foreground/10 h-16">
      <div className="w-full max-w-4xl flex gap-4 p-3 text-sm">
        {isSupabaseConnected && <AuthButton />}
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Save
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Share
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Settings
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Download
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Create New Editor
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
