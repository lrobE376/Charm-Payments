// src/components/atelier/magazine/_renderTitle.tsx
import React from 'react'

/**
 * Magazine micro-syntax: text wrapped in {curly braces} renders as italic + forest accent.
 * "Three things that change {on day one.}" â†’ "Three things that change " + <em>on day one.</em>
 */
export function renderTitle(
  title: string,
  italicClass = 'italic text-atelier-forest',
): React.ReactNode {
  if (!title.includes('{')) return title
  const parts: React.ReactNode[] = []
  const regex = /\{([^}]+)\}/g
  let lastIndex = 0
  let match: RegExpExecArray | null
  let key = 0
  while ((match = regex.exec(title)) !== null) {
    if (match.index > lastIndex) parts.push(title.slice(lastIndex, match.index))
    parts.push(
      <em key={key++} className={italicClass}>
        {match[1]}
      </em>,
    )
    lastIndex = regex.lastIndex
  }
  if (lastIndex < title.length) parts.push(title.slice(lastIndex))
  return parts
}



