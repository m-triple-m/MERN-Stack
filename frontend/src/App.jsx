import React from 'react';
import './App.css';
import Card from './components/Card';

const App = () => {
  return (
    <div>
      <h1 className='name'>Mohammad Mubassir</h1>
      <label htmlFor="">Email</label>

      <p style={{
        fontSize: '2rem',
        fontWeight: 'bold'
      }}>Using Inline CSS</p>

      <input type="text" />


      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        margin: 20,
        gap: 30
      }}>
        <Card
          imgUrl={'https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/q/x/j/11-mrj2308-11-aadi-grey-original-imah27ueth9hdftj.jpeg?q=70'}
          cardTitle={'Lightweight EVA'}
          cardDesc={'Walking & Gym Casual Sports Shoes'}
          // cardBtn='my custom button text'
        />
        <Card
          imgUrl={'https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/o/y/p/7-sandoz-black-7-hotstyle-black-original-imahfw7xthejncty.jpeg?q=70'}
          cardTitle={'HotStyle'}
          cardDesc={'Trendy & Stylish Running Shoes For Men'}
          // cardBtn='my custom button text'
        />
        <Card
          imgUrl={'https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/q/x/j/11-mrj2308-11-aadi-grey-original-imah27ueth9hdftj.jpeg?q=70'}
          cardTitle={'Lightweight EVA'}
          cardDesc={'Walking & Gym Casual Sports Shoes'}
          // cardBtn='my custom button text'
        />
        <Card
          imgUrl={'https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/q/x/j/11-mrj2308-11-aadi-grey-original-imah27ueth9hdftj.jpeg?q=70'}
          cardTitle={'Lightweight EVA'}
          cardDesc={'Walking & Gym Casual Sports Shoes'}
          // cardBtn='my custom button text'
        />
        <Card
          imgUrl={'https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/q/x/j/11-mrj2308-11-aadi-grey-original-imah27ueth9hdftj.jpeg?q=70'}
          cardTitle={'Lightweight EVA'}
          cardDesc={'Walking & Gym Casual Sports Shoes'}
          // cardBtn='my custom button text'
        />
        
      </div>

    </div>
  )
}

export default App;

// camelCase
// snake_case
// kebab-case
// PascalCase