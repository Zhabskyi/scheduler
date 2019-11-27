const getAppointmentsForDay = (state, day) => {
  const filteredDays = state.days.filter(item => item.name === day, []);
  let result = [];
  if (filteredDays.length > 0) {
    for (const key in state.appointments) {
      filteredDays[0].appointments.forEach(el => {
        if (el === Number(key)) {
          result.push(state.appointments[key]);
        }
      });
    }
  }
  return result;
};

const getInterview = (state, interview) => {
  if (interview) {
    let result = { student: interview.student };
    for (const key in state.interviewers) {
      if (interview.interviewer === Number(key)) {
        result = { ...result, interviewer: state.interviewers[key] };
      }
    }
    console.log(result)
    return result;
  }

  return null;
};

export { getAppointmentsForDay, getInterview };