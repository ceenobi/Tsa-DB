const authHeader = () => {
  const token = localStorage.getItem("adminToken");
  if (token) {
    try {
      const parsedToken = JSON.parse(token);
      return { Authorization: `Bearer ${parsedToken}` };
    } catch (error) {
      console.error("Error parsing token:", error);
      return {};
    }
  } else {
    return {};
  }
};

export default authHeader;
