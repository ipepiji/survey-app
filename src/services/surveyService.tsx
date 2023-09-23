import axios from "axios";

const apiUrl = `${process.env.REACT_APP_API_URL}/survey`;

const getAllQuestion = async () => {
  const response = await axios.get(`${apiUrl}/question`);
  return response.data;
};

const submitAnswer = async (formData: any) => {
  const response = await axios.post(`${apiUrl}`, formData);
  return response.data;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { getAllQuestion, submitAnswer };
