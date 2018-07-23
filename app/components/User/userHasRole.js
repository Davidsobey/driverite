const userHasRole = (rolesToCheck, testRoles) => {
  const roles = [].concat(rolesToCheck || []);

  try {
    const user = JSON.parse(localStorage.getItem('user'));
    const userRoles = testRoles || user.roles;

    return roles.reduce(
      (value, role) => value || userRoles.includes(role),
      false,
    );
  } catch (error) {
    return false;
  }
};

export default userHasRole;
