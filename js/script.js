


class CountdownTimer {

  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
    
    this.countTime = 0
    this.timeInterval = null;


    this.timerId = document.querySelector(this.selector);


    this.refs = {
     days: this.timerId.querySelector('[data-value="days"]'),
     hours: this.timerId.querySelector('[data-value="hours"]'),
     minutes: this.timerId.querySelector('[data-value="mins"]'),
     seconds: this.timerId.querySelector('[data-value="secs"]'),
  }
  }

  start() {
    const targetDate = this.targetDate.getTime();

    this.timeInterval = setInterval(() => {
      const currentTime = Date.now();
      this.countTime = targetDate - currentTime;
      const { days, hours, mins, secs } = this.getTimeComponents(this.countTime);
      this.createTextContentForTimer({ days, hours, mins, secs })
    }, 1000);
  }

  stop() {
    if (this.countTime <= 0) {
      clearInterval(this.timeInterval)
    }
  }

  getTimeComponents(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));

    const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));

    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));

    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    return { days, hours, mins, secs }
  }
  pad(value) {
  return String(value).padStart(2, '0');
  }
  
  createTextContentForTimer({ days, hours, mins, secs }) {
    this.refs.days.textContent = days;
    this.refs.hours.textContent = hours;
    this.refs.minutes.textContent = mins;
    this.refs.seconds.textContent = secs;
  }

}



const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('April 23, 2021'),
  
});

timer.start()


