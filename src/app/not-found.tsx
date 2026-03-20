import Link from 'next/link'
import Button from '@/components/ui/Button'

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-6 bg-brand-light">
      <p className="text-8xl font-black text-brand-dark/20">404</p>
      <h1 className="text-2xl font-bold text-gray-900 mt-4">Page Not Found</h1>
      <p className="text-gray-600 mt-2 text-center max-w-md">The page you requested does not exist or has moved.</p>
      <Button className="mt-8" asChild>
        <Link href="/">Back to home</Link>
      </Button>
    </div>
  )
}
