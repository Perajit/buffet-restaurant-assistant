import React, { Component } from 'react'
import {
  ListGroupItem,
  Row,
  Col,
  Button,
  Glyphicon
} from 'react-bootstrap'

class CouponPromotionListItem extends Component {
  render() {
    const {
      id,
      couponCode,
      onDelete,
      onEdit
    } = this.props

    return (
      <ListGroupItem>
        <Row className="show-grid">
          <Col xs={8} md={8}>{ couponCode }</Col>
          <Col xs={4} md={4} className="text-right">
            <Button
                bsSize="xsmall"
                onClick={ e => onDelete(id) }>
              <Glyphicon glyph="trash" />
            </Button>
            <Button
                bsSize="xsmall"
                onClick={ e => onEdit(id) }>
              <Glyphicon glyph="edit" />
            </Button>
          </Col>
        </Row>
      </ListGroupItem>
    )
  }
}

export default CouponPromotionListItem