import Link from 'next/link';
import Image from 'next/image';
import Nav from '@/constants/nav';

const Header = () => {
  return (
    <header className="mb-14 p-4 bg-header sticky top-0 z-10">
      <div className="flex justify-between items-center mx-auto max-w-5xl">
        <Link href="/" className="flex items-center">
          <Image style={{fill: '#80C60C'}} src="/images/logo.svg" alt="Rick and Morty logo" width={40} height={40} priority={true} />
          <div className="text-sm text-white ml-2"><span className="hidden sm:block">Rick and Morty Potral</span></div>
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