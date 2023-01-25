import * as React from 'react';
import Title from '../../Title';
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
    <div className='component-container af-wrap' style={{backgroundColor: '#2940535c'}}>
      <Title
        title='Animated Form'
        color='white'
        font='Poppins'
        shadow='0px 0px 4px gray'
      />
      <div className='container-af'>
        <h2>Login</h2>
        <form>
          <div className='form-control'>
            <input
              id='username'
              type='text'
              required
              autoComplete='new-password'
            />
            <label htmlFor='username' className='label'>
              Email
            </label>
          </div>
          <div className='form-control'>
            <input
              id='password'
              type='password'
              required
              autoComplete='new-password'
            />
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
