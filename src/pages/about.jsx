import BackButton from "@/components/base/BackButton"
import Image from "next/image"

const About = () => {
	return (
		<main className="flex min-h-screen flex-col items-center justify-center">
			<h1 className="pb-4">O nas</h1>
			<Image src="/images/about/trust-tru-katsande-CSkyEOU8yw4-unsplash.jpg" alt="Happy family" height={400} width={600} />
			<section className="py-16 px-4">
				<h2 className="pb-16">Zebraliśmy się tutaj po to, aby...</h2>
				<h1 className="text-center text-primary">...wspólnie przeżyć przygodę!</h1>
			</section>

			<article className="p-4 grid gap-y-2">
				<Image className="py-8" src="/images/about/edo-rezkia-Cy15NF0TIzU-unsplash.jpg" alt="Happy family" height={400} width={600} />
				<section className="grid gap-y-2">
					<p>
						<span className="text-primary">Kochane małżeństwa!</span> Macie ochotę na duchową przygodę, która wciągnie Was po uszy?
					</p>
					<p>Będzie radośnie, będzie z przytupem i na pewno zabawnie!</p>
					<p>U nas nie zabraknie rozmów i mega okazji do rozwiązywania własnych problemów z pomocą Bożej łaski płynącej z Sakramentu Małżeństwa.</p>
				</section>
				<Image className="py-8" src="/images/about/jed-villejo-4SByp8kIoOE-unsplash.jpg" alt="Happy family" height={400} width={600} />
				<section className="grid gap-y-2">
					<p>
						Poznajcie nas - Domowy Kościół w Austrii przy Polskiej Misji Katolickiej Księży Zmartwychwstańców w Wiedniu – miejsce, gdzie Wasz dom staje się
						„małym Kościołem” i sercem wspaniałej wspólnoty!
					</p>
					<p>
						Spotykamy się raz w miesiącu, tworząc tzw kręgi, czyli grupy małżeńskie, żeby być bliżej Boga i siebie nawzajem. Każde spotkanie jest jak wielka
						duchowa impreza, uczestniczy w nich też nasz ulubiony kapłan – duchowy doradca.
					</p>
				</section>
				<Image className="py-8" src="/images/about/paz-arando-qZIM5rutBZM-unsplash.jpg" alt="Happy family" height={400} width={600} />
				<section className="grid gap-y-2">
					<p>
						Dwa razy w roku wskakujemy w rekolekcyjne buty i ruszamy na weekendowe wypady, prowadzone przez kapłana i mega inspirującą parę małżeńską z Polski.
					</p>
					<p>A gdy robi się cieplej, włączamy tryb piknikowy i robimy fajne wycieczki na świeżym powietrzu.</p>
					<p>Domowy Kościół w Austrii to część wielkiej rodziny Ruchu Światło-Życie, który zaczynał w Polsce i dzięki emigrantom teraz podbija świat.</p>
					<p>
						Dołącz do nas i przeżyj niesamowitą przygodę, poznaj prawdziwego Ojca, Jego Syna, i Ducha, który także jest święty. Zobacz, jak wiele radości może
						przynieść wspólna wiara i zabawa!
					</p>
				</section>
			</article>
			<BackButton />
		</main>
	)
}

export default About
