import React, { Component } from 'react'
import {
  ListGroupItem,
  Row,
  Col,
  Button,
  Glyphicon,
  Badge
} from 'react-bootstrap'

class CouponCodesFormListItem extends Component {
  render() {
    let { couponCode, total } = this.props

    return (
      <ListGroupItem>
        <Row className="show-grid">
          <Col xs={8} md={8}>
            <code className="lead">{ couponCode }</code> <Badge>{ total }</Badge>
          </Col>
          <Col xs={4} md={4} className="text-right">
            <Button
                bsSize="xsmall"
                onClick={ this.onClickIncrease }>
              <Glyphicon glyph="plus" />
            </Button>
            <Button
                bsSize="xsmall"
                onClick={ this.onClickDecrease }>
              <Glyphicon glyph="minus" />
            </Button>
            <Button
                bsSize="xsmall"
                onClick={ this.onClickRemove }>
              <Glyphicon glyph="remove" />
            </Button>
          </Col>
        </Row>
      </ListGroupItem>
    )
  }

  onClickRemove = () => {
    let { couponCode, onRemoveCouponCode } = this.props
    onRemoveCouponCode(couponCode)
  }

  onClickIncrease = () => {
    let { couponCode, onIncreaseCouponCode } = this.props
    onIncreaseCouponCode(couponCode)
  }

  onClickDecrease = () => {
    let { couponCode, onDecreaseCouponCode } = this.props
    onDecreaseCouponCode(couponCode)
  }
}

export default CouponCodesFormListItem