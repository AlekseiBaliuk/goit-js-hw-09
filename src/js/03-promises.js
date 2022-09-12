import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  formEl: document.querySelector('.form'),
  btnEl: document.querySelector('button[type="submit"]'),
};

const {
  elements: { delay, step, amount },
} = refs.formEl;

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

refs.formEl.addEventListener('submit', handleSubmitForm);

function handleSubmitForm(e) {
  e.preventDefault();

  refs.btnEl.disabled = true;

  let delayVal = Number(delay.value);
  const stepVal = Number(step.value);
  const amountVal = Number(amount.value);

  for (let i = 1; i <= amountVal; i += 1) {
    createPromise(i, delayVal)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      })
      .finally(() => {
        if (i === amountVal) {
          refs.btnEl.disabled = false;
        }
      });
    delayVal += stepVal;
  }
  e.currentTarget.reset();
}

// ---------------------------- v1 ---------------------------------
// const refs = {
//   form: document.querySelector('.form'),
// };

// let inpDelay = null;
// let inpStep = null;
// let inpAmount = null;

// function createPromise(position, delay) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const shouldResolve = Math.random() > 0.3;
//       if (shouldResolve) {
//         resolve({ position, delay });
//       } else {
//         reject({ position, delay });
//       }
//     }, delay);
//   });
// }

// function onFormSubmit(e) {
//   e.preventDefault();

//   const {
//     elements: { delay, step, amount },
//   } = e.currentTarget;

//   inpDelay = Number(delay.value);
//   inpStep = Number(step.value);
//   inpAmount = Number(amount.value);

//   for (let i = 1; i <= inpAmount; i += 1) {
//     createPromise(i, inpDelay)
//       .then(({ position, delay }) => {
//         Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
//       })
//       .catch(({ position, delay }) => {
//         Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
//       });

//     inpDelay += inpStep;
//   }

//   e.currentTarget.reset();
// }

// refs.form.addEventListener('submit', onFormSubmit);
