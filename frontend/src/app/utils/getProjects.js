export const getProjects = async () => {
  try {
    const response = await fetch("https://personal-portofolio-backend-production.up.railway.app/projects/all");
    if (!response.ok) throw new Error(`HTTP error! status ${response.status}`);
    const data = await response.json();
    return data;
  } catch (error) {
    return {
      success: false,
      data: [],
      message: error.message,
    };
  }
};

export const getProject = async (projectId) => {
  try {
    const response = await fetch(`https://personal-portofolio-backend-production.up.railway.app/projects/${projectId}`);
    if (!response.ok) throw new Error(`HTTP error! status ${response.status}`);
    const data = await response.json();
    return data;
  } catch (error) {
    return {
      success: false,
      data: null,
      message: error.message,
    };
  }
};
