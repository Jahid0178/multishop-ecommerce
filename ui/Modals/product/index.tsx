import { ProductType } from "@/libs/types/types";
import { addItem } from "@/redux/shoppingCartSlice";
import { closeProductModal, openProductModal } from "@/redux/showModal";
import { RootState } from "@/redux/store";
import { Box, Image } from "@mantine/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const ProductModal = () => {
  const { isModalOpen, product } = useSelector(
    (state: RootState) => state.modal
  );
  const dispatch = useDispatch();

  return (
    <Box>
      <div
        className={
          isModalOpen ? " quic_veiw_content open" : " quic_veiw_content"
        }
      >
        <div className="quic_veiw_close">
          <p onClick={() => dispatch(closeProductModal())}>X</p>
        </div>

        <div className="quick_veiw_container">
          <div className="quic_veiw_content_content">
            <Image
              src={
                "https://www.istorebangladesh.com/images/thumbs/0000286_macbook-pro-m1_550.png"
              }
              alt=""
            />
          </div>

          <div className="quick_veiw_info">
            <p>{product.title}</p>
            {/* <p
              style={{
                display: "flex",
                alignItems: "center",
                fontSize: "12px",
                marginTop: "12px",
                lineHeight: "12px",
                color: "#919191",
              }}
            >
              <StarBorderIcon style={{ fontSize: "15px", color: "#9ac93c" }} />
              <StarBorderIcon style={{ fontSize: "15px", color: "#9ac93c" }} />
              <StarBorderIcon style={{ fontSize: "15px", color: "#9ac93c" }} />
              <StarBorderIcon style={{ fontSize: "15px", color: "#9ac93c" }} />
              <StarBorderIcon style={{ fontSize: "15px", color: "#9ac93c" }} />
              <span style={{ marginLeft: "5px" }}>
                {product?.reviews.length} reviews
              </span>
            </p> */}
            <p style={{ marginTop: "12px", fontSize: "14px" }}>
              Regular Price: ${product.price}
            </p>
            <button
              onClick={() => dispatch(addItem(product))}
              style={{
                border: "none",
                marginTop: "33px",
                backgroundColor: "#9AC93C",
                color: "white",
                cursor: "pointer",
                padding: "5px 40px",
                fontSize: "17px",
                borderRadius: "3px",
              }}
            >
              Add to Cart
            </button>
            <p
              style={{
                color: "#212529",
                fontSize: "18px",
                margin: "12px 0px",
                lineHeight: "18px",
                fontWeight: "700",
              }}
            >
              Quick Overveiw
            </p>
            <p
              style={{
                fontFamily: "monospace",
                fontWeight: "600",
                fontSize: "16px",
                color: "#212529",
              }}
            >
              {product.title}
            </p>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default ProductModal;
