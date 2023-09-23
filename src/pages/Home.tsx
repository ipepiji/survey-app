import { useState, useEffect } from "react";

import surveyService from "services/surveyService";

const FormSection = () => {
  const [form, setForm] = useState({
    survey: [],
  });

  useEffect(() => {
    fetchApi();
  }, []);

  const fetchApi = () => {
    surveyService
      .getAllQuestion()
      .then((res) => {
        setForm((prev) => ({
          ...prev,
          survey: res.map((obj: any) => ({
            id: obj.id,
            question: obj.question,
            answer: "",
            submitTime: new Date().toISOString(),
          })),
        }));
      })
      .catch((error) => {
        console.error(error.response?.data.message || error.message);
      });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    surveyService
      .submitAnswer(form)
      .then((result) => {
        alert("Submitted!");
        setForm((prev: any) => ({
          ...prev,
          survey: prev.survey.map((obj: any) => ({
            ...obj,
            answer: "",
          })),
        }));
      })
      .catch((error) => {
        alert(error.response?.data.message || error.message);
      });
  };

  const handleOnChange = (e: any) => {
    setForm((prev: any) => ({
      ...prev,
      survey: prev.survey.map((obj: any) => {
        return obj.id === Number(e.target.name)
          ? {
              ...obj,
              answer: e.target.value,
              submitTime: new Date().toISOString(),
            }
          : obj;
      }),
    }));
  };

  const isSurveyFormAvailable = form.survey.length > 0;
  const isAllQuestionAnswered = form.survey.every(
    (obj: any) => obj.answer.trim() !== ""
  );

  return isSurveyFormAvailable ? (
    <form onSubmit={handleSubmit}>
      {form.survey.map((obj: any) => (
        <div key={obj.id}>
          <div className="mb-3">
            <label className="form-label">*{obj.question}</label>
            <input
              type="text"
              className="form-control"
              name={obj.id}
              value={obj.answer}
              onChange={handleOnChange}
              required
            />
          </div>
        </div>
      ))}
      <div className=" text-center">
        <button
          type="submit"
          className="btn btn-primary"
          disabled={!isAllQuestionAnswered}
        >
          Save Survery
        </button>
      </div>
    </form>
  ) : (
    <p className="text-center">Survey not available</p>
  );
};

const Home = () => {
  return (
    <div className="border border-dark rounded-5 p-5">
      <FormSection />
    </div>
  );
};

export default Home;
