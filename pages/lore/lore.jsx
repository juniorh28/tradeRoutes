import cultures from '../../json/cultures.json'
import factions from '../../json/factions.json'
import style from '../../css/list.module.css'
import Link from 'next/link'
const Lore = () => {
  const allCulturess = cultures.cultures
  const allFactions = factions.factions
  return (
    <div className={style.container}>
      <ul className={style.list_container}>
        Cultures
        {allCulturess.map((culture, idx) => {
          return (
            <li className={style.diplo_li} key={culture.id}>
              <Link
                href={{
                  pathname: `cultures/${culture.name}`,
                  query: {
                    pdfLink: culture.pdfLink,
                  },
                }}
              >
                {culture.name}
              </Link>
            </li>
          )
        })}
      </ul>
      <ul>Wars</ul>
      <ul>
        Faction
        {allFactions.map((faction, idx) => {
          return (
            <li key={faction.id}>
              <Link
                href={{
                  pathname: `factions/${faction.name}`,
                  query: {
                    pdfLink: faction.pdfLink,
                  },
                }}
              >
                {faction.name}
              </Link>
            </li>
          )
        })}
      </ul>

      <ul>Royal Hosues</ul>
    </div>
  )
}

export default Lore
