"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginationSolver = paginationSolver;
exports.paginationGenerator = paginationGenerator;
function paginationSolver(page = 1, limit = 10) {
    if (!page || page <= 1) {
        page = 0;
    }
    else {
        page = page - 1;
    }
    if (!limit || limit <= 0)
        limit = 10;
    const skip = page * limit;
    return {
        page,
        limit,
        skip,
    };
}
function paginationGenerator(count = 0, page = 0, limit = 0) {
    return {
        totalCount: count,
        page: page + 1,
        countPerPage: limit,
        pageCount: Math.ceil(count / limit),
    };
}
//# sourceMappingURL=pagination.util.js.map