import randomcClass from '../../json/emoji.json'
import cultures from '../../json/cultures.json'
import dragonborn from '../../json/raceName/dragonborn.json'
import dwarf from '../../json/raceName/dwarf.json'
import elf from '../../json/raceName/elf.json'
import gnome from '../../json/raceName/gnome.json'
import halfelf from '../../json/raceName/halfelf.json'
import halforc from '../../json/raceName/halforc.json'
import human from '../../json/raceName/human.json'
import orc from '../../json/raceName/orc.json'
import tiefling from '../../json/raceName/tiefling.json'
import races from '../../json/races.json'

const choseName = (raceIdx, sex) => {
  switch (raceIdx) {
    case 0:
      return sex === 'female'
        ? dragonborn.dragonborn.female[Math.floor(Math.random() * 200)]
        : dragonborn.dragonborn.male[Math.floor(Math.random() * 200)]
    case 1:
      return sex === 'female'
        ? dwarf.dwarf.female[Math.floor(Math.random() * 200)]
        : dwarf.dwarf.male[Math.floor(Math.random() * 200)]
    case 2:
      return sex === 'female'
        ? elf.elf.female[Math.floor(Math.random() * 200)]
        : elf.elf.male[Math.floor(Math.random() * 200)]
    case 3:
      return sex === 'female'
        ? gnome.gnome.female[Math.floor(Math.random() * 200)]
        : gnome.gnome.male[Math.floor(Math.random() * 200)]
    case 4:
      return sex === 'female'
        ? halfelf.half_elf.female[Math.floor(Math.random() * 200)]
        : halfelf.half_elf.male[Math.floor(Math.random() * 200)]
    case 5:
      return sex === 'female'
        ? halforc.half_orc.female[Math.floor(Math.random() * 200)]
        : halforc.half_orc.male[Math.floor(Math.random() * 200)]
    case 6:
      return sex === 'female'
        ? human.human.female[Math.floor(Math.random() * 200)]
        : human.human.male[Math.floor(Math.random() * 200)]
    case 7:
      return sex === 'female'
        ? orc.orc.female[Math.floor(Math.random() * 200)]
        : orc.orc.male[Math.floor(Math.random() * 200)]
    case 8:
      return sex === 'female'
        ? tiefling.tiefling.female[Math.floor(Math.random() * 200)]
        : tiefling.tiefling.male[Math.floor(Math.random() * 200)]
    default:
      break
  }
}

export default async function randomsCharacter(level) {
  const chosenClass =
    randomcClass.emoji[Math.floor(Math.random() * randomcClass.emoji.length)]
  const chosenCulture =
    cultures.cultures[Math.floor(Math.random() * cultures.cultures.length)].name
  const { hit_die, icon } = chosenClass
  const charClass = chosenClass.meaning
  const charisma = Math.floor(Math.random() * 5) + 1
  const strength = Math.floor(Math.random() * 5) + 1
  const constitution = Math.floor(Math.random() * 5) + 1
  const intelligence = Math.floor(Math.random() * 5) + 1
  const wisdom = Math.floor(Math.random() * 5) + 1
  const sex =
    Math.floor(Math.random() * (1 - 0 + 1) + 0) === 0 ? 'female' : 'male'

  const raceIdx = Math.floor(Math.random() * 9)
  const race = races.races[Math.floor(Math.random() * 10)]
  const name = choseName(raceIdx, sex)
  //   const raceRes = await fetch('https://api.open5e.com/races/')

  //   const raceJson = await raceRes.json()

  //   const race = raceJson.results[Math.floor(Math.random() * 9)].name

  try {
    // const res = await fetch(
    //   `https://muna.ironarachne.com/${race}/?count=1&nameType=${sex}`
    // )
    // const json = await res.json()
    // const name = json.names[0]

    //   console.log(Math.floor(Math.random() * (11 - -10) + -10))
    let hp = 0
    for (let i = 0; i < level; ++i) {
      hp += Math.floor(Math.random() * hit_die) + 1 + constitution
    }

    // console.log(
    //   `${name} The ${sex} ${race} ${charClass} from ${chosenCulture} ${icon}`
    // )
    console.log(
      `Junior The ${sex} ${race} ${charClass} from ${chosenCulture} ${icon}`
    )

    const character = {
      //   name: `${name} The ${sex} ${race} ${charClass} from ${chosenCulture} ${icon}`,
      name: `${name} The ${sex} ${race} ${charClass} from ${chosenCulture} ${icon}`,
      health: hp,
      con: constitution,
      cha: charisma,
      str: strength,
      wis: wisdom,
      int: intelligence,
    }

    return character
  } catch (e) {
    console.error(e)
  }
}
