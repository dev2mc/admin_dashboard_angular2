export interface Task {
  _id?: {
    $oid: string
  },
  name: string,
  tag: string,
  description: string,
  favorite: boolean
}
