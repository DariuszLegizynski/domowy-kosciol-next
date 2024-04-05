import { useRouter } from "next/router"
import IconItems from "@/components/IconItems"

// Layout
import Layout from "@/components/layout"

const Contact = () => {
	const router = useRouter()

	return (
		<Layout>
			<main className="min-h-screen grid grid-rows-[1fr_auto]">
				<section className="mt-16 flex flex-col items-center lg:my-20">
					<IconItems
						type="family"
						width="16rem"
						height="8rem"
					/>
				</section>
				<article className="grid grid-cols-1 justify-between lg:grid-cols-2">
					<section className="grid grid-cols-1 pt-8 px-8 lg:order-2 lg:mx-auto">
						<div className="h3">Skontaktuj się z nami:</div>
						<div>
							<strong className="p">Joanna i Michał Kucharkowie</strong>
							<div className="flex py-2 pl-1.5 items-center">
								<IconItems
									type="phone"
									width="1.5rem"
									height="1.5rem"
								/>
								<p className="pl-2">+43 699 11100283</p>
							</div>
							<div className="flex items-center">
								<IconItems
									type="email"
									width="1.8rem"
									height="1.8rem"
								/>
								<p className="pl-2">jmkucharko@gmail.com</p>
							</div>
						</div>
						<div>
							<div className="h3">Gdzie można nas znaleźć?</div>
							<div className="my-8">
								<div className="flex items-baseline justify-start">
									<IconItems
										type="curch"
										width="2rem"
										height="2rem"
									/>
									<div className="p pl-2">Polska Misja Katolicka</div>
								</div>
								<p>Rennweg 5a</p>
								<p>1030 Wien</p>
								<p>ks Szczepan Matuła</p>
								<p>01/7123158</p>
								<a
									className="p flex flex-col items-center justify-center pt-8"
									href="https://maps.app.goo.gl/MdC4i2TpQr2CWDsi6"
									target="_blank"
								>
									<IconItems
										type="map"
										width="3rem"
										height="3rem"
									/>
									Zobacz na mapie
								</a>
							</div>
						</div>
					</section>
					<section className="grid grid-cols-1 py-8 justify-items-center bg-primary lg:order-1">
						<p className="h3 text-gold pb-4">Napisz do nas:</p>
						<form className="p-2">
							<div className="mb-2 grid grid-rows-[auto_auto] max-w-full">
								<label className="p text-gold">Imię (wymagane)</label>
								<input
									className="p-1 w-full rounded"
									type="text"
									required
								/>
							</div>
							<div className="mb-2 max-w-full">
								<label className="p text-gold">Nazwisko</label>
								<input
									className="p-1 w-full rounded"
									type="text"
								/>
							</div>
							<div className="mb-2 max-w-full">
								<label className="p text-gold">E-mail (wymagane)</label>
								<input
									className="p-1 w-full rounded"
									type="email"
									required
								/>
							</div>
							<div className="mb-2 max-w-full">
								<label className="p text-gold">Telefon</label>
								<input
									className="p-1 w-full rounded"
									type="number"
								/>
							</div>
							<div className="mb-2 max-w-full">
								<label className="p text-gold">Wiadomość</label>
								<textarea
									className="p-1 w-full min-h-36 rounded"
									required
								/>
							</div>
							<button
								className="flex flex-col items-center mx-auto bg-gold text-primary px-12 py-3 mt-8 round"
								type="submit"
							>
								<strong className="p">Wyślij</strong>
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

