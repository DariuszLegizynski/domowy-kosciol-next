import Header from "@/components/Header"
import ConsentBanner from "./consentBanner/ConsentBanner"

interface LayoutProps {
	children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
	<div>
		<Header />
		{children}
		<ConsentBanner />
	</div>
)

export default Layout
