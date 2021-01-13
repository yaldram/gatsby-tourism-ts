import React from "react"

import { Card } from "../Card";

interface IPhotoCard {
  readonly photo: GatsbyTypes.allPhotosQuery["photos"]["edges"][number]["node"]
}

export const PhotoCard = ({ photo }: IPhotoCard) => {
  const { name, slug, images } = photo

  if (!images) {
    return null;
  }

  const [mainImage] = images;

  if (!mainImage || !mainImage?.fluid) {
    return null;
  }

  return (
     <Card >
     <Card.Image
       image={mainImage.fluid}
       slug={`/photos/${slug}`}
       title="Open"
     />
     <Card.Footer>
       <h4>{name}</h4>
     </Card.Footer>
   </Card>
  )
}