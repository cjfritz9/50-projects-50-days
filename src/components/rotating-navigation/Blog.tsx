import * as React from 'react';
import './RotatingNavigation.css';

import atlas from './images/atlas.jpg';

const Blog: React.FC = () => {
  return (
    <main className='content'>
      <h1>Rotating Navigation</h1>
      <small>Cumque maxime</small>
      <h3>Atlas</h3>
      <img className='img atlas' src={atlas} alt='atlas' />
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet totam
        dolore sapiente sed ab blanditiis repudiandae, recusandae sequi expedita
        nobis quisquam magni dolorem debitis, accusamus voluptatum. Rerum, aut
        exercitationem accusantium tenetur reprehenderit inventore mollitia,
        quod animi sunt nesciunt quae temporibus doloribus vitae quisquam rem
        assumenda repudiandae? Nostrum tempora, omnis unde et sint dolores nulla
        ad doloremque rem. Voluptates, maiores repellat nam perferendis
        voluptatibus sequi at nulla. Deserunt nihil nam enim, omnis officia
        sequi commodi voluptatibus magnam? Totam saepe, beatae quo fugit
        voluptas, quae, vel sequi aspernatur officiis sapiente obcaecati alias!
        Culpa animi deleniti rerum mollitia saepe at, ipsam vitae modi.
      </p>
    </main>
  );
};

export default Blog;
