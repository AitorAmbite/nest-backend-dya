class PaginationDTO {
  pageSize: number;
  page: number;
}

class PaginationTypeDTO extends PaginationDTO {
  type:string
}

class PaginatedResponse<T> {
  totalRecords:number;
  page:number;
  data:T;
  constructor(totalRecords:number, page:number, data:T) {}
}
export { PaginationDTO, PaginationTypeDTO }