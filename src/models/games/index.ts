export class Game {
  id: number
  backgroundImage: string
  nomeDoJogo: string
  descricao: string
  infos: string[]

  constructor(
    id: number,
    backgroundImage: string,
    nomeDoJogo: string,
    descricao: string,
    infos: string[]
  ) {
    this.id = id
    this.backgroundImage = backgroundImage
    this.nomeDoJogo = nomeDoJogo
    this.descricao = descricao
    this.infos = infos
  }
}
