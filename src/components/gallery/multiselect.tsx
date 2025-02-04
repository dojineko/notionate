import React from 'react'
import type {
  MultiSelectPropertyItemObjectResponse,
  Link,
} from '../../server/types'

export type GalleryMultiSelectProps = {
  payload: MultiSelectPropertyItemObjectResponse
  path: string
  link?: Link
}

export const GalleryMultiSelectField: React.FC<GalleryMultiSelectProps> = ({ payload, path, link }) => {
  const LinkedTag = (name: string) => {
    const href = `${path}tags/${encodeURIComponent(name)}`
    if (link) {
      const Link = link
      return (
        <>
          <Link className="notionate-gallery-multiselect-a" href={href}>
            {name}
          </Link>
        </>
      )
    }
    return (
      <a className="notionate-gallery-multiselect-a" href={href} title={name}>
        {name}
      </a>
    )
  }

  return (
    <ul className="notionate-gallery-multiselect-ul">
      {payload.multi_select.map(f => (
        <li key={f.id} className={`notionate-gallery-multiselect-li notionate-select-${f.color}`}>
          {LinkedTag(f.name)}
        </li>
      ))}
    </ul>
  )
}

export default GalleryMultiSelectField
