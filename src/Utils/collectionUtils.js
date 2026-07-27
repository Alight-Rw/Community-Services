export const normalizeCollectionResponse = (payload) => {
  const responseData = payload?.data ?? payload;

  if (Array.isArray(responseData)) {
    return {
      items: responseData,
      pagination: payload?.pagination ?? null,
    };
  }

  if (Array.isArray(responseData?.items)) {
    return {
      items: responseData.items,
      pagination: responseData.pagination ?? payload?.pagination ?? null,
    };
  }

  if (Array.isArray(responseData?.data)) {
    return {
      items: responseData.data,
      pagination: responseData.pagination ?? payload?.pagination ?? null,
    };
  }

  return {
    items: [],
    pagination: responseData?.pagination ?? payload?.pagination ?? null,
  };
};

export const getPaginationSummary = (pagination) => {
  if (!pagination) {
    return {
      totalRecords: 0,
      totalPages: 1,
      currentPage: 1,
      pageSize: 0,
      hasNextPage: false,
      hasPrevPage: false,
      nextPage: null,
      prevPage: null,
    };
  }

  return {
    totalRecords: pagination.totalRecords ?? 0,
    totalPages: pagination.totalPages ?? 1,
    currentPage: pagination.currentPage ?? 1,
    pageSize: pagination.pageSize ?? 0,
    hasNextPage: Boolean(pagination.hasNextPage),
    hasPrevPage: Boolean(pagination.hasPrevPage),
    nextPage: pagination.nextPage ?? null,
    prevPage: pagination.prevPage ?? null,
  };
};
