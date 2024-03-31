const authHeader = () => {
  const token = JSON.parse(localStorage.getItem("adminToken"));
  if (token) {
    return { Authorization: `Bearer ${token}` };
  } else {
    return {};
  }
};

export default authHeader;
