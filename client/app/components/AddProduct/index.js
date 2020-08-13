/**
 *
 * AddProduct
 *
 */

import React from "react";

import { Row, Col } from "reactstrap";

import Input from "../Input";
import Button from "../../components/Button";
import SelectOption from "../SelectOption";

const AddProduct = (props) => {
  const {
    productFormData,
    formErrors,
    productChange,
    addProduct,
    handleBrandSelect,
    selectedBrands,
    brands,
  } = props;

  const handleSubmit = (event) => {
    event.preventDefault();
    addProduct();
  };

  return (
    <div className="add-product">
      <h1 />
      <form onSubmit={handleSubmit} noValidate encType={"multipart/form-data"}>
        <Row>
          <Col xs="12" lg="6">
            <Input
              type={"text"}
              error={formErrors["whatsapp"]}
              label={"Whatsapp"}
              name={"whatsapp"}
              placeholder={"Shop Whatsapp Number"}
              value={productFormData.whatsapp}
              onInputChange={(name, value) => {
                productChange(name, value);
              }}
            />
          </Col>
          <Col xs="12" lg="6">
            <Input
              type={"text"}
              error={formErrors["name"]}
              label={"Name"}
              name={"name"}
              placeholder={"Product Name"}
              value={productFormData.name}
              onInputChange={(name, value) => {
                productChange(name, value);
              }}
            />
          </Col>

          <Col xs='12' lg='6'>
            <Input
              type={'text'}
              error={formErrors['address']}
              label={'Address'}
              name={'address'}
              placeholder={'Shop Address'}
              value={productFormData.address}
              onInputChange={(name, value) => {
                productChange(name, value);
              }}
            />
          </Col>

          <Col xs="12" lg="6">
            <Input
              type={"file"}
              error={formErrors["image"]}
              label={"Image"}
              name={"image"}
              placeholder={"Product Image"}
              onInputChange={(file, v, event) => {
                productChange(file, event.target.files[0]);
              }}
            />
          </Col>
          <Col xs="12" md="12">
            <Input
              type={"textarea"}
              error={formErrors["description"]}
              label={"Description"}
              name={"description"}
              placeholder={"Product Description"}
              value={productFormData.description}
              onInputChange={(name, value) => {
                productChange(name, value);
              }}
            />
          </Col>
          <Col xs="12" lg="6">
            <Input
              type={"number"}
              error={formErrors["quantity"]}
              label={"Quantity"}
              name={"quantity"}
              placeholder={"Product Quantity"}
              value={productFormData.quantity}
              onInputChange={(name, value) => {
                productChange(name, value);
              }}
            />
          </Col>
          <Col xs="12" lg="6">
            <Input
              type={"number"}
              error={formErrors["price"]}
              label={"Price"}
              name={"price"}
              min={1}
              placeholder={"Product Price"}
              value={productFormData.price}
              onInputChange={(name, value) => {
                productChange(name, value);
              }}
            />
          </Col>
   
          <Col xs="12" md="12">
            <SelectOption
              error={formErrors["brand"]}
              label={"Select Brand"}
              multi={false}
              options={brands}
              value={selectedBrands}
              handleSelectChange={(value) => {
                handleBrandSelect(value);
              }}
            />
          </Col>
        </Row>
        <hr />
        <div className="add-product-actions">
          <Button type="submit" text="Add Product" />
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
