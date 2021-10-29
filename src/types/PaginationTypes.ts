class PaginationDTO {
  pageSize: number;
  page: number;
}

class PaginationTypeDTO extends PaginationDTO {
  type:string
}
export { PaginationDTO, PaginationTypeDTO }