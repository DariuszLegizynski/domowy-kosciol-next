import Link from "next/link"
import Image from 'next/image'

const Logo = () => {
  return (
    <Link href="/" className="w-full ml-4">
      <Image className="size-8" src="/logo/foska.png" alt="foska logo" width={20} height={20} />
    </Link>
  )
}

export default Logo