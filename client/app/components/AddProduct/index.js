/**
 *
 * AddProduct
 *
 */

import React from 'react';

import { Row, Col } from 'reactstrap';

import Input from '../Input';
import Button from '../../components/Button';
import SelectOption from '../SelectOption';

const AddProduct = props => {
  const {
    productFormData,
    formErrors,
    productChange,
    addProduct,
    handleBrandSelect,
    selectedBrands,
    brands,
    taxableSelect
  } = props;

  const handleSubmit = event => {
    event.preventDefault();
    addProduct();
  };

  return (
    <div className='add-product'>
      <h1 />
      <form onSubmit={handleSubmit} noValidate>
        <Row>
          <Col xs='12' lg='6'>
            <Input
              type={'text'}
              error={formErrors['name']}
              label={'Name'}
              name={'name'}
              placeholder={'Product Name'}
              value={productFormData.name}
              onInputChange={(name, value) => {
                productChange(name, value);
              }}
            />
          </Col>
          <Col xs='12' lg='6'>
          <input 
          type="file" 
          name="photos" 
            
          />
          </Col>


          <Col xs='12' lg='6'>
            <Input
              type={'text'}
              error={formErrors['whatsapp']}
              label={'shop/vendor whatsapp number'}
              name={'whatsapp'}
              placeholder={'Shop whatsapp number'}
              value={productFormData.whatsapp}
              onInputChange={(name, value) => {
                productChange(name, value);
              }}
            />
          </Col>

          <Col xs='12' md='12'>
            <Input
              type={'textarea'}
              error={formErrors['description']}
              label={'Description'}
              name={'description'}
              placeholder={'Product Description'}
              value={productFormData.description}
              onInputChange={(name, value) => {
                productChange(name, value);
              }}
            />
          </Col>
          <Col xs='12' lg='6'>
            <Input
              type={'number'}
              error={formErrors['quantity']}
              label={'Quantity'}
              name={'quantity'}
              placeholder={'Product Quantity'}
              value={productFormData.quantity}
              onInputChange={(name, value) => {
                productChange(name, value);
              }}
            />
          </Col>
          <Col xs='12' lg='6'>
            <Input
              type={'number'}
              error={formErrors['price']}
              label={'Price'}
              name={'price'}
              min={1}
              placeholder={'Product Price'}
              value={productFormData.price}
              onInputChange={(name, value) => {
                productChange(name, value);
              }}
            />
          </Col>
          <Col xs='12' md='12'>
            <SelectOption
              error={formErrors['taxable']}
              label={'Taxable'}
              multi={false}
              name={'taxable'}
              options={taxableSelect}
              handleSelectChange={value => {
                productChange('taxable', value.value);
              }}
            />
          </Col>
          <Col xs='12' md='12'>
            <SelectOption
              error={formErrors['brand']}
              label={'Select Brand'}
              multi={false}
              options={brands}
              value={selectedBrands}
              handleSelectChange={value => {
                handleBrandSelect(value);
              }}
            />
          </Col>
        </Row>
        <hr />
        <div className='add-product-actions'>
          <Button type='submit' text='Add Product' />
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
