import React, { useState, useEffect } from "react";
import axios from "axios";

import "./Application.scss";

import DayList from "components/DayList/DayList";
import Appointment from "components/Appointment";

const appointments = [
  {
    id: 1,
    time: "12pm"
  },
  {
    id: 2,
    time: "1pm",
    interview: {
      student: "Lydia Miller-Jones",
      interviewer: {
        id: 1,
        name: "Sylvia Palmer",
        avatar: "https://i.imgur.com/LpaY82x.png"
      }
    }
  },
  {
    id: 3,
    time: "2pm",
    interview: {
      student: "Jonh Doe",
      interviewer: {
        id: 4,
        name: "Cohana Roy",
        avatar: "https://i.imgur.com/FK8V841.jpg"
      }
    }
  },
  {
    id: 4,
    time: "3pm"
  },
  {
    id: 6,
    time: "5pm",
    interview: {
      student: "Marry Doe",
      interviewer: {
        id: 5,
        name: "Sven Jones",
        avatar: "https://i.imgur.com/twYrpay.jpg"
      }
    }
  },
  {
    id: 9,
    time: "6pm"
  }
];

export default function Application(props) {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {}
  });

  const setDay = day => setState({ ...state, day });
  const setDays = days => setState(prev => ({ ...prev, days }));

  useEffect(() => {
    axios(`http://localhost:8001/api/days`)
      .then(res => {
        console.log(res);
        setDays(res.data);
      })
      .catch(error => console.log(error));
  }, []);

  const appointmentList = appointments.map(appointment => (
    <Appointment key={appointment.id} {...appointment} />
  ));

  return (
    <main className='layout'>
      <section className='sidebar'>
        <img
          className='sidebar--centered'
          src='images/logo.png'
          alt='Interview Scheduler'
        />
        <hr className='sidebar__separator sidebar--centered' />
        <nav className='sidebar__menu'>
          <DayList days={state.days} day={state.day} setDay={setDay} />
        </nav>
        <img
          className='sidebar__lhl sidebar--centered'
          src='images/lhl.png'
          alt='Lighthouse Labs'
        />
      </section>
      <section className='schedule'>{appointmentList}</section>
    </main>
  );
}
