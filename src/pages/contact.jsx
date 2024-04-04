import { useRouter } from "next/router"
import IconItems from "@/components/IconItems"

// Layout
import Layout from "@/components/layout"

const Contact = () => {
	const router = useRouter()

	return (
		<Layout>
			<main className="min-h-screen grid grid-rows-[1fr_auto]">
				<section className="mt-16">
					<IconItems
						type="family"
						width="16rem"
						height="8rem"
					/>
				</section>

				<article className="grid justify-between sm:grid-cols-2">
					<section className="grid grid-cols-1 pt-8 px-8 sm:order-2">
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
					<section className="grid grid-cols-1 py-8 justify-items-center bg-primary sm:order-1">
						<p className="h2 text-gold">Napisz do nas:</p>
						<form className="p-2">
							<div className="mb-2 grid grid-rows-[auto_auto] max-w-full">
								<label className="h3 text-gold">Imię (wymagane)</label>
								<input
									className="p-1 w-full rounded"
									type="text"
									required
								/>
							</div>
							<div className="mb-2 max-w-full">
								<label className="h3 text-gold">Nazwisko</label>
								<input
									className="p-1 w-full rounded"
									type="text"
								/>
							</div>
							<div className="mb-2 max-w-full">
								<label className="h3 text-gold">E-mail (wymagane)</label>
								<input
									className="p-1 w-full rounded"
									type="email"
									required
								/>
							</div>
							<div className="mb-2 max-w-full">
								<label className="h3 text-gold">Telefon</label>
								<input
									className="p-1 w-full rounded"
									type="number"
								/>
							</div>
							<div className="mb-2 max-w-full">
								<label className="h3 text-gold">Wiadomość</label>
								<textarea
									className="p-1 w-full min-h-36"
									required
								/>
							</div>
							<button
								className="flex flex-col items-center mx-auto bg-gold text-primary px-12 py-3 mt-8"
								type="submit"
							>
								<p className="h3">Wyślij</p>
							</button>
						</form>
						<button
							className="flex flex-col items-center font-semibold mx-auto mt-20 text-white"
							onClick={() => router.back()}
						>
							&larr; Powrót
						</button>
					</section>
				</article>
			</main>
		</Layout>
	)
}

export default Contact

