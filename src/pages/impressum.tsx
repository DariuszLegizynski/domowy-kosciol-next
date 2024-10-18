import Layout from "@/components/Layout"

const impressum = () => {
	return (
		<Layout>
			<article className="max-w-[1024px]">
				<h1>Impressum</h1>
				<p>Odpowiedzialny za stronę internetową: Bsc Ing. Dariusz Legizynski</p>
				<p>Adres: Rebengasse 40/2/2, 2700 Wiener Neustadt</p>
				<p>E-Mail: d.legizynski@gmail.com</p>

				<p>
					Cel strony: Ta strona internetowa jest prywatną inicjatywą grupy religijnej, której członkowie modlą się wspólnie w Austrii. Strona nie jest związana
					z żadną zarejestrowaną organizacją, a treści na niej zamieszczone mają charakter wyłącznie informacyjny i duchowy. Strona nie prowadzi działalności
					komercyjnej.
				</p>

				<p>
					Prawa autorskie: Wszystkie treści zamieszczone na tej stronie internetowej (teksty, obrazy, filmy) są chronione prawami autorskimi. Kopiowanie,
					rozpowszechnianie lub wykorzystywanie tych treści bez wyraźnej zgody właściciela strony jest zabronione.
				</p>

				<p>
					Ochrona danych osobowych: Strona może zbierać dane osobowe użytkowników, takie jak pliki cookie, w celu optymalizacji doświadczeń użytkownika.
					Wszystkie dane osobowe są przetwarzane zgodnie z obowiązującymi przepisami o ochronie danych osobowych (RODO). Więcej informacji można znaleźć w
					naszej Polityce Prywatności.
				</p>

				<p>
					Wyłączenie odpowiedzialności: Zawartość tej strony internetowej została stworzona z należytą starannością, jednak właściciel nie ponosi
					odpowiedzialności za dokładność, kompletność ani aktualność zamieszczonych informacji. Strona zawiera linki do innych stron internetowych, za których
					zawartość właściciel tej strony nie ponosi odpowiedzialności.
				</p>
			</article>
		</Layout>
	)
}

export default impressum
