import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Privacy Policy' }

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-gray-900">Privacy Policy</h1>
      <p className="text-gray-600 mt-4 leading-relaxed">
        Replace this placeholder with your attorney-approved privacy policy describing data collection, cookies, subprocessors, and consumer rights. Reference
        PCI and GLBA obligations where applicable.
      </p>
    </div>
  )
}
