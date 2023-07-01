import Link from 'next/link';
import Image from 'next/image';
import Nav from '@/constants/nav';

const Header = () => {
  return (
    <header className="mb-14 p-4 bg-header sticky top-0">
      <div className="flex justify-between items-center mx-auto max-w-5xl">
        <Link href="/">
          <Image src="/images/logo.svg" alt="Rick and Morty logo" width={180} height={55} priority={true} />
        </Link>
        <nav className="text-sm">
          <ul className="flex gap-8">
            {Nav.map((item)=>(
              <li key={item.name}><Link href={item.url} className="hover:text-white transition">{item.name}</Link></li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header;