
import Image from "next/image";
import { io } from "socket.io-client";
import CharacterList from '@/app/components/characters/CharacterList'

export default function Home() {

  return (
	<div>
		<h2>Character list :</h2>
			<CharacterList />
	</div>
  )
}

