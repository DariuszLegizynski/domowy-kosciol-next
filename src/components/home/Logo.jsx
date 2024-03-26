import Link from "next/link"

const Logo = () => {
  return (
    <Link href="/" className="w-full ml-4">
      <img className="size-8" src="/logo/foska.png" alt="foska logo"/>
    </Link>
  )
}

export default Logo