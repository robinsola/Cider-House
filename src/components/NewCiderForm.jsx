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
      <form onSubmit={handleCiderSubmission}>
        <input type='text' id='name' placeholder='name of cider' ref={(input)=>{_name = input;}}/><br/>
        <input type='text' id='brewer' placeholder='brewer' ref={(input)=>{_brewer = input;}}/><br/>
        <input type='text' id='description' placeholder='description'ref={(input)=>{_description = input;}}/><br/>
        <input type='text' id='abv' placeholder='abv'ref={(input)=>{_abv = input;}}/><br/>
        <input type='text' id='price' placeholder='price' ref={(input)=>{_price = input;}}/><br/>
        <input type='text' id='remaining' placeholder='how many pints in keg' ref={(input)=>{_remaining = input;}}/><br/>
        <input type='text' id='image' placeholder='img url' ref={(input)=>{_image = input;}}/><br/>
        <button type='submit'>add keg</button>
      </form>
    </div>
  );
}

NewCiderForm.propTypes = {
  onAddNewCider: PropTypes.func
};

export default NewCiderForm;
