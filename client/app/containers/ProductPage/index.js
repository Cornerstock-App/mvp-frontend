/**
 *
 * ProductPage
 *
 */

import React from 'react';
import { connect } from 'react-redux';

import actions from '../../actions';

import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

import Input from '../../components/Input';
import Button from '../../components/Button';
import { BagIcon } from '../../components/Icon';
import NotFound from '../../components/NotFound';
import LoadingIndicator from '../../components/LoadingIndicator';

class ProductPage extends React.PureComponent {
  componentDidMount() {
    const slug = this.props.match.params.slug;
    this.props.fetchProduct(slug);
    document.body.classList.add('product-page');
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.slug !== prevProps.match.params.slug) {
      const slug = this.props.match.params.slug;
      this.props.fetchProduct(slug);
    }
  }

  componentWillUnmount() {
    document.body.classList.remove('product-page');
  }

  render() {
    const {
      isLoading,
      product,
      productShopData,
      shopFormErrors,
      itemsInCart,
      productShopChange,
      handleAddToCart,
      handleRemoveFromCart
    } = this.props;

    return (
      <div className='product-shop'>
        {isLoading ? (
          <LoadingIndicator />

        ) : Object.keys(product).length > 0 ? (
          <Row>
            <Col xs='12' md='5' lg='5' className='mb-3'>
              <div className='item-image'>
                {/* <img src = {product.image} /> */}
                <img src = '../images/sunglasses.jpeg' />
                {product.quantity < 0 && !shopFormErrors['quantity'] ? (
                  <p className='stock out-of-stock'>Out of stock</p>
                ) : (
                    <p className='stock in-stock'>In stock</p>
                  )}
              </div>
            </Col>
            <Col xs='12' md='7' lg='7' className='mb-3'>
              <div className='product-container'>
                <div className='item-box'>
                  <div className='item-details'>
                    <h1 className='item-name'>{product.name}</h1>
                    <p className='sku'>{product.sku}</p>
                    <hr />
                    {product.brand && (
                      <p className='by'>
                        see more products from{' '}
                        <Link
                          to={`/shop/brand/${product.brand.merchant}`}
                          className='brand-link'
                        >
                          {product.brand.name}
                        </Link>
                      </p>
                    )}
                    {product.whatsapp && (
                      <p className='by'>
                        Contact shop on{' '}
                        <Link
                          to={`/shop/whatsapp/${product.whatsapp}`}
                          className='whatsapp-link'
                        >
                          {product.whatsapp}
                        </Link>
                      </p>
                    )}
                    
                    <p className='item-desc'>{product.description}</p>
                    <p className='price'>GH₵{product.price}</p>
                  </div>
                  <div className='item-customize'>
                    <Input
                      type={'number'}
                      error={shopFormErrors['quantity']}
                      label={'Quantity'}
                      name={'quantity'}
                      min={1}
                      placeholder={'Product Quantity'}
                      disabled={
                        product.quantity <= 0 && !shopFormErrors['quantity']
                      }
                      value={productShopData.quantity}
                      onInputChange={(name, value) => {
                        productShopChange(name, value);
                      }}
                    />
                  </div>
                  <div className='item-actions'>
                    {itemsInCart.includes(product._id) ? (
                      <Button
                        disabled={
                          product.quantity <= 0 && !shopFormErrors['quantity']
                        }
                        text='Remove From Bag'
                        className='bag-btn'
                        icon={<BagIcon />}
                        onClick={() => handleRemoveFromCart(product)}
                      />
                    ) : (
                        <Button
                          disabled={
                            product.quantity <= 0 && !shopFormErrors['quantity']
                          }
                          text='Add To Cart'
                          className='bag-btn' 
                          icon={<BagIcon />}
                          onClick={() => handleAddToCart(product)}
                        />
                      )}
                      
                      <div>
                        <Link to="../../components/map/index.js" className="btn btn-primary">Search For Shops On Map</Link>
                      </div>

                      {/* 
                      <a href="https://api.whatsapp.com/send?phone=+26774266051" onClick={handleClick}>      
                       Click me
                      </a> */}
                  </div>
                  
                  <div>
                 
                  </div>
                  
                </div>
              </div>
            </Col>
          </Row>
        ) : (
              <NotFound message='no product found.' />
            )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    product: state.product.product,
    productShopData: state.product.productShopData,
    shopFormErrors: state.product.shopFormErrors,
    itemsInCart: state.cart.itemsInCart,
    isLoading: state.product.isLoading
  };
};

export default connect(mapStateToProps, actions)(ProductPage);
