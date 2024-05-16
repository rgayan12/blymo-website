import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto flex justify-between items-center p-6">
        <div className="text-2xl font-bold">BLYMO</div>
        <nav className="space-x-6">
          <Link href="/">Home</Link>
          <Link href="/about">About Us</Link>
          <Link href="/services">Services</Link>
          <Link href="/community">Community</Link>
          <Link href="/contact">Contact Us</Link>
        </nav>
      </div>
    </header>
  );
}
