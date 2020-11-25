//Link é o Tipo que eu criei, ja o linkModel é a tabela do BD
export type Link = {
    id?: number,
    url: string,
    code?: string,
    hits?: number
}