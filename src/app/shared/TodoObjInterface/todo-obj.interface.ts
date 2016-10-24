export interface Todo {
  _id? :{
    $oid: string
  },
  description: string,
  completed: boolean
}
