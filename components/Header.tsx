import Link from "next/link";
import Image from 'next/image';

const Header = () => {
  return (
    <header className="flex justify-between mb-14 p-6">
      <Link href="/"><Image src="/images/logo.svg" alt="Rick and Morty logo" width={180} height={55} /></Link>
      <nav>
        <ul>
          <li><Link href="/episode">Episodes</Link></li>
          <li><Link href="/character">Characters</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;