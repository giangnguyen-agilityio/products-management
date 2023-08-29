export interface HeroProps {
  imageUrl: string
  imageExtraSmallUrl: string
  imageSmallUrl: string
  imageMediumUrl: string
  imageLargeUrl: string
  buttonHref: string
  title: string
  description: string
}

export interface HeroImageProps
  extends Pick<
    HeroProps,
    | 'imageUrl'
    | 'imageExtraSmallUrl'
    | 'imageSmallUrl'
    | 'imageMediumUrl'
    | 'imageLargeUrl'
  > {}

export interface HeroDetailProps
  extends Pick<HeroProps, 'buttonHref' | 'title' | 'description'> {}
