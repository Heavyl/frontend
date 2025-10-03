import GameList from "@/components/games/GameList";
import Title from "@/components/ui/Titles/Title";
import Sidebar from "@/components/layout/Sidebar/Sidebar";

export default function Profile() {
  

  return (
    <div className="flex">
        <Sidebar></Sidebar>
        <div className="content">
            <Title heading="h1" className="text-center">Profile</Title> 
            <GameList/>
        </div>
    </div>
  );
}