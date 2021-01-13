import React from "react"

import { Card } from "../Card"

interface IPlaceProps {
  readonly place: GatsbyTypes.allPlacesQuery["places"]["edges"][number]["node"]
}


export function Place({ place }: IPlaceProps) {
  const { name, slug, images } = place

  if (!images) {
    return null;
  }

  const [mainImage] = images

  if (!mainImage || !mainImage?.fluid) {
    return null;
  }

  return (
    <Card>
      <Card.Image
        image={mainImage.fluid}
        slug={`/places/${slug}`}
        title="Details"
      />
      <Card.Footer>
        <h4>{name}</h4>
      </Card.Footer>
    </Card>
  )
}