export declare function paginationSolver(page?: number, limit?: number): {
    page: number;
    limit: number;
    skip: number;
};
export declare function paginationGenerator(count?: number, page?: number, limit?: number): {
    totalCount: number;
    page: number;
    countPerPage: number;
    pageCount: number;
};
