import Link from 'next/link'
import Image from 'next/image'

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-brand-light flex flex-col">
      <header className="bg-white border-b border-gray-100 px-6 py-4">
        <Link href="/">
          <Image src="/images/logo.png" alt="Charm Payments" width={220} height={66} />
        </Link>
      </header>
      <main className="flex-1 flex items-center justify-center p-6">{children}</main>
      <footer className="text-center py-4 text-xs text-gray-400 px-4">
        <p>© Charm Payments — A Charm Holdings LLC Company</p>
        <p className="mt-1">
          Charm Payments is a payment facilitator, not a bank. Merchant funds are subject to the terms of the Merchant Agreement.
        </p>
      </footer>
    </div>
  )
}
