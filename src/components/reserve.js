import classes from './reserve.module.css';
import React from 'react';
import { useMutation } from '@tanstack/react-query';
import { schedule } from '../util/http';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const Reserve = () => {

    const navigate = useNavigate();
    const date = useRef();
    const time = useRef();
    const message = useRef();
    const cname = useRef();
    const cnum = useRef();
    const cemail = useRef();


    const {mutate, } = useMutation({
        mutationFn:schedule,
        onSuccess: () => {
          alert('schedule success');
          navigate('/');
        },
        onError: () => {
          alert('schedule failed');
        },
      });
      
      function handlesubmit(e){
        e.preventDefault();
      
      mutate({
        date:date.current.value,
        time:time.current.value,
        message:message.current.value,
        cname:cname.current.value,
        cnum:cnum.current.value,
        email:cemail.current.value
      });
    //   localStorage.setItem('token',data?.token);
    //   navigate('/');
      
      }

    return(
        <div class={classes.container}>
    <div class={classes.card}>
        <div class="form__name">
            Scheduling Form
        </div>
        <div class={classes.time__container}>
            <div class={classes.section}>
                <div class={classes.box}>
                    1
                </div><span>Date &amp; Time</span>
            </div>
            <form  class={classes['form__time']}>
                <div class={classes.date}>
                    <label for="date">Date</label> <input id={classes.date}  type="date" ref={date} />
                </div>
                <div class={classes.time}>
                    <label for="time">Time</label> <input id={classes.time}  type="time" ref={time} />
                </div>

            </form>
        </div>
        <div class={classes['message__container']}>
            <div class={classes.section}>
                <div class={classes.box}>
                    2
                </div><span>Your Message</span>
            </div>
            <textarea placeholder="e.g. Please do .. Also, .." cols="50" rows="5" ref={message}></textarea>
        </div>
        <div class={classes['contact__container']}>
            <div class={classes.section}>
                <div class={classes.box}>
                    3
                </div><span>Contact Information</span>
            </div>
            <form action="" class={classes.form__contact}>
                <div class={classes.cname}>
                    <label for="cname">Name</label> <input placeholder="e.g. Richard Bovell" id={classes.cname} ref={cname} type="text"/>
                </div>
                <div class={classes.cname}>
                    <label for="cnum">Phone Number</label> <input placeholder='(country code) your number' id={classes.cnum} ref={cnum} type="text"/>
                </div>
                <div class={classes.email}>
                    <label for="cemail">Email</label> <input placeholder="e.g. rb@email.com" id={classes.cemail} ref={cemail} type="email"/>
                </div>
            </form>
        </div>
        <div class={classes['form__confirmation']}>
            <button className={classes.schbutton} onClick={handlesubmit}>Confirm Information</button>
        </div>
    </div>
</div>
    )
}

export default Reserve;