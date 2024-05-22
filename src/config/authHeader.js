const authHeader = () => {
  const token = localStorage.getItem("adminToken");
  if (token) {
    return { Authorization: `Bearer ${token}` };
  } else {
    return {};
  }
};

export default authHeader;
