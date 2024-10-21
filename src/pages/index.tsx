import ConsentBanner from "@/components/consentBanner/ConsentBanner"
import Main from "@/components/home/Main"

const Home = () => {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between">
			<Main />
			<ConsentBanner />
		</main>
	)
}

export default Home
