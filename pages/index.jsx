import data from '../countries/kingdoms.json'
export default function Home() {

  const kingdoms = data.countries

  return (
		<div>
			<div>
				<h1>Welcome to DnD</h1>
				<div>
					{kingdoms.map((country) => {
						return (
							<p key={country.id}>
								{`${country?.ruler?.ranking ? country.ruler.ranking : ""} ${
									country?.ruler?.name ? country.ruler.name : ""
								} of ${country.name}
                ${
									country.enemies?.length > 0
										? `is warring with ${country.enemies.map((enemies) => {
												return enemies;
										  })} ${"\u2694"}`
										: ""
								} 
                ${
									country.allies?.length > 0
										? `and is allied with ${country.allies.map((allies) => {
												return allies;
										  })}`
										: ""
								}
                ${"\u1F91D"}\n`}
							</p>
						);
					})}
				</div>
			</div>
		</div>
	);
}