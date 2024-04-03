import { useRouter } from "next/router"

// Layout
import Layout from "@/components/layout"

const Contact = () => {
	const router = useRouter()

	return (
		<Layout>
			<main className="min-h-screen grid grid-rows-[1fr_auto] px-8">
				<article className="grid justify-between mt-16 sm:grid-cols-2">
					<section className="grid grid-cols-1 pt-8 sm:order-2">
						<div className="h2">Skontaktuj się z nami:</div>
						<div className="my-8">
							<div className="h3">Joanna i Michał Kucharkowie</div>
							<div className="flex items-center">
								<p>tel./fax:</p>
								<strong className="pl-2">+43 699 11100283</strong>
							</div>
							<div className="flex items-center">
								<p>e-mail:</p>
								<strong className="pl-2">jmkucharko@gmail.com</strong>
							</div>
						</div>
						<div>
							<div className="h2">Gdzie można nas znaleźć?</div>
							<div className="my-8">
								<div className="h3">Polska Misja Katolicka</div>
								<p>Rennweg 5a</p>
								<p>1030 Wien</p>
								<p>ks Szczepan Matuła</p>
								<p>01/7123158</p>
								<a
									className="p flex items-center pt-8"
									href="https://maps.app.goo.gl/MdC4i2TpQr2CWDsi6"
									target="_blank"
								>
									&rarr; Zobacz na mapie
								</a>
							</div>
						</div>
					</section>
					<section className="grid grid-cols-1 mt-8 justify-items-center sm:order-1">
						<p className="h3">Napisz do nas:</p>
						<form className="py-2">
							<div className="flex flex-col items-center mb-2 max-w-full">
								<input
									className="m-3 p-2 w-full bg-gold placeholder-primary"
									type="text"
									placeholder="Imię (wymagane)"
									required
								/>
							</div>
							<div className="flex flex-col items-center mb-2 max-w-full">
								<input
									className="m-3 p-2 w-full bg-gold placeholder-primary"
									type="text"
									placeholder="Nazwisko"
								/>
							</div>
							<div className="flex flex-col items-center mb-2 max-w-full">
								<input
									className="m-3 p-2 w-full bg-gold placeholder-primary"
									type="email"
									placeholder="E-mail (wymagane)"
									required
								/>
							</div>
							<div className="flex flex-col items-center mb-2 max-w-full">
								<input
									className="m-3 p-2 w-full bg-gold placeholder-primary"
									type="number"
									placeholder="Telefon"
								/>
							</div>
							<div className="flex flex-col items-center mb-2 max-w-full">
								<label className="h4">Wiadomość</label>
								<textarea
									className="m-3 p-2 w-full min-h-36 bg-gold placeholder-primary"
									placeholder="Co chcesz nam przekazać?"
									required
								/>
							</div>
							<button
								className="flex flex-col items-center mx-auto bg-primary text-white px-16 py-4 mt-8"
								type="submit"
							>
								<p>Wyślij</p>
							</button>
						</form>
					</section>
				</article>
				<button
					className="flex flex-col items-center font-semibold mx-auto my-12"
					onClick={() => router.back()}
				>
					&larr; Powrót
				</button>
			</main>
		</Layout>
	)
}

export default Contact

