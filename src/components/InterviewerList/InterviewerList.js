import React from "react";
import PropTypes from "prop-types";
import "./InterviewerList.scss";

import InterviewerListItem from "../InterviewerListItem/InterviewerListItem";

export default function InterviewerList(props) {
  const interviewers = props.interviewers.map(interviewer => (
    <InterviewerListItem
      key={interviewer.id}
      interviewer={props.interviewer}
      name={interviewer.name}
      avatar={interviewer.avatar}
      selected={interviewer.id === props.value}
      setInterviewer={e => props.onChange(interviewer.id)}
    />
  ));

  return (
    <section className='interviewers'>
      <h4 className='interviewers__header text--light'>Interviewer</h4>
      <ul className='interviewers__list'>{interviewers}</ul>
    </section>
  );
}

InterviewerList.propTypes = {
  value: PropTypes.number,
  onChange: PropTypes.func.isRequired
};
