import React from 'react';
import PropTypes from 'prop-types';


function NewCiderForm(props) {
  let _name = null;
  let _brewer = null;
  let _description = null;
  let _abv = null;
  let _price = null;
  let _remaining = null;
  let _image = null;

  function handleCiderSubmission(event) {
    event.preventDefault();
    props.onAddNewCider({name: _name.value, brewer: _brewer.value, description: _description.value, abv: _abv.value, price: _price.value, remaining: _remaining.value, image: _image.value});
    alert(_name.value +' has been added to the Taproom!');
    _name.value = '';
    _brewer.value = '';
    _description.value = '';
    _abv.value = '';
    _price.value = '';
    _remaining.value = '';
    _image.value = '';
  }

  return (
    <div>
      <style jsx>{`
        .formSyles {
          display: flex;
          justify-content: center;
          margin: 40px 0;
        }
        h3 {
          padding: 30px 0 25px 0;
          color: white;
        }
        input {
          height: 30px;
          width: 230px;
          border: 1px solid #221800;
          border-radius: 5px;
          margin: 5px 0 15px 0;
        }
        button {
          cursor: pointer;
          padding: 10px 30px;
          font-size: 1em;
          border-radius: 5px;
          margin: 30px 0;
          color: white;
          background-color: #221800;
          border: 1px solid white;
          transition: background-color .5s;
        }
        button:hover {
          background-color: #E4BC5E;
        }
      `}</style>
      <div className='formSyles'>
        <form onSubmit={handleCiderSubmission}>
          <label htmlFor='name'>Name of Cider:</label><br/>
          <input type='text' id='name' placeholder='--' ref={(input)=>{_name = input;}}/><br/>

          <label htmlFor='brewer'>Brewer:</label><br/>
          <input type='text' id='brewer' placeholder='--' ref={(input)=>{_brewer = input;}}/><br/>

          <label htmlFor='description'>Description:</label><br/>
          <input type='text' id='description' placeholder='--'ref={(input)=>{_description = input;}}/><br/>

          <label htmlFor='abv'>Alcohol by Volume:</label><br/>
          <input type='text' id='abv' placeholder='--%'ref={(input)=>{_abv = input;}}/><br/>

          <label htmlFor='price'>Price per Pint:</label><br/>
          <input type='text' id='price' placeholder='--' ref={(input)=>{_price = input;}}/><br/>

          <label htmlFor='remaining'>Amount of Pints in Keg:</label><br/>
          <input type='text' id='remaining' placeholder='--' ref={(input)=>{_remaining = input;}}/><br/>

          <label htmlFor='image'>Image of Logo:</label><br/>
          <input type='text' id='image' placeholder='--IMAGE URL' ref={(input)=>{_image = input;}}/><br/>
          <button type='submit'>add keg</button>
        </form>
      </div>
    </div>
  );
}

NewCiderForm.propTypes = {
  onAddNewCider: PropTypes.func
};

export default NewCiderForm;
