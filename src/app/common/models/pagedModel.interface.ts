export interface PagedModel<T> {
  items   : T[],
  _links  : {
    self : {
      href : String
    }
  },
  _meta   : {
    totalCount: Number,
    pageCount: Number,
    currentPage: Number,
    perPage: Number
  }
}
