export type Domain = 'oracle' | 'robotics' | 'ai' | 'hardware'

export interface Project {
  id: string
  title: string
  domain: Domain
  description: string
  techs: string[]
  videoUrl?: string
  thumbnailUrl?: string
  githubUrl?: string
  youtubeUrl?: string
}

//Slides typing

type Slide = {
  id: string,
  type: 'image'|'video',
  src: string,
  title: string,
  subtitle: string
}