import BackButton from "@/components/base/BackButton"
import Image from "next/image"

import Layout from "../components/Layout"

const About = () => {
	return (
		<Layout>
			<main className="flex min-h-screen flex-col items-center justify-center">
				<section className="about-background-image py-4 px-4 mt-12">
					<h1 className="text-start text-primary pt-2 pl-8">O nas,</h1>
					<h1 className="text-center text-white pb-2">czyli kim właściwie jesteśmy?</h1>
				</section>

				<article className="mt-16 px-4 pb-4 grid gap-y-2">
					<section>
						<Image className="py-8" src="/images/about/picture-1.jpg" alt="Happy family" height={400} width={600} />
						<div className="grid gap-y-2">
							<h2 className="text-primary text-[3rem] leading-10 pb-2">Kochane małżeństwa!</h2>
							<p>Macie ochotę na duchową przygodę, która wciągnie Was po uszy?</p>
							<p>Będzie radośnie, będzie z przytupem i na pewno zabawnie!</p>
							<p>U nas nie zabraknie rozmów i mega okazji do rozwiązywania własnych problemów z pomocą Bożej łaski płynącej z Sakramentu Małżeństwa.</p>
						</div>
					</section>

					<section>
						<Image className="py-8" src="/images/about/jed-villejo-4SByp8kIoOE-unsplash.jpg" alt="Happy family" height={400} width={600} />
						<div className="grid gap-y-2">
							<p>
								Poznajcie nas - Domowy Kościół w Austrii przy Polskiej Misji Katolickiej Księży Zmartwychwstańców w Wiedniu – miejsce, gdzie Wasz dom staje się
								„małym Kościołem” i sercem wspaniałej wspólnoty!
							</p>
							<p>
								Spotykamy się raz w miesiącu, tworząc tzw kręgi, czyli grupy małżeńskie, żeby być bliżej Boga i siebie nawzajem. Każde spotkanie jest jak wielka
								duchowa impreza, uczestniczy w nich też nasz ulubiony kapłan – duchowy doradca.
							</p>
						</div>
					</section>

					<section>
						<Image className="py-8" src="/images/about/paz-arando-qZIM5rutBZM-unsplash.jpg" alt="Happy family" height={400} width={600} />
						<div className="grid gap-y-2">
							<p>
								Dwa razy w roku wskakujemy w rekolekcyjne buty i ruszamy na weekendowe wypady, prowadzone przez kapłana i mega inspirującą parę małżeńską z
								Polski.
							</p>
							<p>A gdy robi się cieplej, włączamy tryb piknikowy i robimy fajne wycieczki na świeżym powietrzu.</p>
							<p>Domowy Kościół w Austrii to część wielkiej rodziny Ruchu Światło-Życie, który zaczynał w Polsce i dzięki emigrantom teraz podbija świat.</p>
							<p>
								Dołącz do nas i przeżyj niesamowitą przygodę, poznaj prawdziwego Ojca, Jego Syna, i Ducha, który także jest święty. Zobacz, jak wiele radości
								może przynieść wspólna wiara i zabawa!
							</p>
						</div>
					</section>
				</article>
				<BackButton />
			</main>
		</Layout>
	)
}

export default About
