import BaseButton from "@/components/base/BaseButton"
import Layout from "@/components/Layout"

const impressum = () => {
	return (
		<Layout>
			<article className="max-w-[1024px] pt-16 px-4 mx-auto">
				<h1>Impressum</h1>
				<div className="py-8">
					<div>
						<p>
							<strong>Odpowiedzialny za stronę internetową:</strong>
						</p>
						<p>Bsc Ing. Dariusz Legizynski</p>
					</div>
					<div className="pt-2">
						<p>
							<strong>Adres:</strong>
						</p>
						<p>Rebengasse 40/2/2,</p>
						<p>2700 Wiener Neustadt</p>
					</div>
					<p className="pt-2">
						<strong>E-Mail:</strong> d.legizynski@gmail.com
					</p>
				</div>

				<p>
					<strong>Cel strony:</strong> Ta strona internetowa jest prywatną inicjatywą grupy religijnej, której członkowie modlą się wspólnie w Austrii. Strona
					nie jest związana z żadną zarejestrowaną organizacją, a treści na niej zamieszczone mają charakter wyłącznie informacyjny i duchowy. Strona nie
					prowadzi działalności komercyjnej.
				</p>

				<p className="py-8">
					<strong>Prawa autorskie:</strong> Wszystkie treści zamieszczone na tej stronie internetowej (teksty, obrazy, filmy) są chronione prawami autorskimi.
					Kopiowanie, rozpowszechnianie lub wykorzystywanie tych treści bez wyraźnej zgody właściciela strony jest zabronione.
				</p>

				<p>
					<strong>Ochrona danych osobowych:</strong> Strona może zbierać dane osobowe użytkowników, takie jak pliki cookie, w celu optymalizacji doświadczeń
					użytkownika. Wszystkie dane osobowe są przetwarzane zgodnie z obowiązującymi przepisami o ochronie danych osobowych (RODO). Więcej informacji można
					znaleźć w naszej Polityce Prywatności.
				</p>

				<p className="py-8">
					<strong>Wyłączenie odpowiedzialności:</strong>Zawartość tej strony internetowej została stworzona z należytą starannością, jednak właściciel nie
					ponosi odpowiedzialności za dokładność, kompletność ani aktualność zamieszczonych informacji. Strona zawiera linki do innych stron internetowych, za
					których zawartość właściciel tej strony nie ponosi odpowiedzialności.
				</p>
			</article>
			<div className="py-6 flex flex-col items-center">
				<BaseButton type="back" />
			</div>
		</Layout>
	)
}

export default impressum
