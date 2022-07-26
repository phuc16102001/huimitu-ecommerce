import React from "react";
import "./style.css";
import formatter from "utils/formatter";
import { Button, Col, Row } from "antd";
import config from "config/config";

const buttonStyle = {
  width: "192px",
  borderRadius: "5px",
};

const OrderFooter = (props) => {
  const { order, handleCancel, handleSuccess, handleReview } = props;

  return (
    <div className="order-footer">
      <p className="pt-3 order-shipping-price text-right">
        <Row>
          <Col>
            <div>Phí vận chuyển:</div>
            <div>Giảm giá: </div>
          </Col>
          <Col className="ml-2">
            <div className="color-key">
              {formatter.formatPrice(order.shippingPrice)}
            </div>
            <div className="color-key">
              -{formatter.formatPrice(order.discountPrice)}
            </div>
          </Col>
        </Row>
      </p>
      <p className="order-total">
        Tổng tiền:{" "}
        <span className="order-total-number color-key">
          {formatter.formatPrice(order.finalPrice)}
        </span>
      </p>
      {order.state === config.orderState.PENDING && (
        <Button
          size="large"
          style={{
            backgroundColor: "red",
            color: "white",
            ...buttonStyle,
          }}
          onClick={() => handleCancel(order.id)}
        >
          Hủy
        </Button>
      )}
      {order.state === config.orderState.SHIPPING && (
        <Button
          size="large"
          style={{
            ...buttonStyle,
          }}
          type="primary"
          onClick={() => handleSuccess(order.id)}
        >
          Đã nhận được hàng
        </Button>
      )}
      {order.state === config.orderState.SUCCESS && (
        <Button
          size="large"
          type="primary"
          style={{ ...buttonStyle }}
          onClick={() => handleReview(order.id)}
        >
          Đánh giá
        </Button>
      )}
    </div>
  );
};

export default OrderFooter;
