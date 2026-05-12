import type { Metadata } from 'next'
import { SolutionEditorialPage } from '../_components/SolutionEditorialPage'
import { solutionPages } from '../_data/solutionPages'

const content = solutionPages.services

export const metadata: Metadata = content.metadata

export default function ServicesSolutionsPage() {
  return <SolutionEditorialPage content={content} />
}
