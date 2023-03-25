import { useEffect, useState } from 'react'
import randomsCharacter from '../../../components/random_character/random'

export default function gladitor() {
  const [opponent, setOpponent] = useState()

  const handleClick = async () => {
    const a = await randomsCharacter(14)
    setOpponent(a)
  }

  if (opponent) {
    console.log(opponent)
    console.log(JSON.stringify(opponent))
  }

  return (
    <div>
      <button onClick={handleClick}>Generate a Gladiator</button>
      {opponent ? (
        <div>
          <div>
            {opponent.name}
            {`\n`}
          </div>
          <div>
            Health: {opponent.health} {`\n`}
          </div>
          <div>
            Con: {opponent.con} {`\n`}
          </div>
          <div>
            Str: {opponent.str} {`\n`}
          </div>
          <div>
            Cha: {opponent.cha} {`\n`}
          </div>
          <div>
            Wis: {opponent.wis} {`\n`}
          </div>
          <div>
            Int: {opponent.int} {`\n`}
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  )
}
