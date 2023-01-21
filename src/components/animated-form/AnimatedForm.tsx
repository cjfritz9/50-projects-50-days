import * as React from 'react';
import './AnimatedForm.css';

const AnimatedForm: React.FC = () => {
  React.useEffect(() => {
    const labels = Array.from(
      document.getElementsByClassName('label')
    )! as Array<HTMLLabelElement>;

    labels.forEach((label) => {
      label.innerHTML = label.innerText
        .split('')
        .map(
          (letter, idx) =>
            `<span key={${idx}} style='transition-delay: ${
              idx * 20
            }ms'>${letter}</span>`
        )
        .join('');
    });
  }, []);

  return (
    <div className='component-container'>
      <h1 id='project-title'>Animated Form</h1>
      <div className='container-af'>
        <h2>Login</h2>
        <form>
          <div className='form-control'>
            <input id='username' type='text' required />
            <label htmlFor='username' className='label'>
              Email
            </label>
          </div>
          <div className='form-control'>
            <input id='password' type='password' required />
            <label htmlFor='password' className='label'>
              Password
            </label>
          </div>
          <button className='btn-af'>Login</button>
          <p className='text-af'>
            No Account? <a href='#'>Register</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default AnimatedForm;
