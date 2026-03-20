export const countRequestByStatus = (services = []) => {
  const statusCount = {
    all: services.length, 
    waitting: 0,
    approved: 0,
    completed: 0,
    rejected: 0,
  };

  services.forEach((service) => {
    const status = service.status?.toLowerCase();
    if (status && statusCount.hasOwnProperty(status)) {
      statusCount[status] += 1;
    }
  });

  return statusCount;
};

export const countAvailableService = (services = []) => {
  let count = 0;

  services.forEach((service) => {
    if (service.isActive === true) {
      count++;
    }
  });

  return count;
};
