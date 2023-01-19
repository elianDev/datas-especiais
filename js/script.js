const timers = [
  { id: "timer1", endTime: "2023-10-21" },
  { id: "timer2", endTime: "2023-08-17" },
  { id: "timer3", endTime: "2023-10-01" },
  { id: "timer4", endTime: "2023-06-12" },
  { id: "timer5", endTime: "2023-09-25" },
  { id: "timer6", endTime: "2023-02-05" },
];
const containers = document.querySelectorAll(".data-header");

function startTimers() {
  timers.forEach((timer) => {
    const countDownDate = new Date(timer.endTime);

    const x = setInterval(() => {
      const now = new Date();
      const distance = countDownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      document.getElementById(
        timer.id
      ).innerHTML = `<p class="timer"> ${days} <span>dias,</span> ${hours} <span>horas,</span> ${minutes} <span>minutos,</span> ${seconds} <span>segundos</span>`;

      if (distance < 0) {
        clearInterval(x);
        document.getElementById(timer.id).innerHTML = "Chegou";
      }
    }, 1000);
  });
}

startTimers();
