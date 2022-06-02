export const checkDuplicateCPF = async (CPF: string) => {
  let allEmployees = [];
  const { enterprises } = await import("../data/employees.json");

  enterprises.map((enterprise) => allEmployees.push(...enterprise.employees));

  const filteredEmployees = allEmployees.filter(
    (employee) => employee.CPF === CPF
  );

  if (filteredEmployees.length === 0) {
    return true;
  }

  return false;
};
