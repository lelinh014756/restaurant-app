import React, { useState } from "react";
import Image from "next/image";
import GetLayout from "../../helpers/getLayout";
import axios from "axios";
import ControlButton from "../../app/app-controls/app-control-button/ControlButton";
import AppAdminAddProduct from "../../app/app-admin/AppAdminAddProduct";

const status = ["preparing", "on the way", "delivered"];

const Admin = ({ products, orders }) => {
  const [listProduct, setListProduct] = useState(products);
  const [listOrder, setListOrder] = useState(orders);
  const [showModal, setShowModal] = useState(false);

  const HandleDeleteProduct = (id) => {
    axios
      .delete("http://localhost:3000/api/products/" + id)
      .then((res) => {
        setListProduct((prev) => {
          return prev.filter((item) => item._id !== id);
        });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const HandleStatus = (id) => {
    const item = listOrder.filter((order) => order._id === id)[0];
    const currentStatus = item.status;
    axios
      .put("http://localhost:3000/api/orders/" + id, {
        status: currentStatus + 1,
      })
      .then((res) => {
        setListOrder([
          res.data,
          ...listOrder.filter((order) => order._id !== id),
        ]);
      })
      .catch((err) => {
        console.error(err);
      });
    console.log(item);
  };
  return (
    <div className="admin">
      <div className="admin-item">
        <h1 className="admin-title">Products</h1>
        <div className="admin-btn">
          <ControlButton
            className={"btn-primary"}
            width={100}
            onClick={() => setShowModal(true)}
          >
            Add
          </ControlButton>
        </div>
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Id</th>
              <th>Title</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          {listProduct.length !== 0 ? (
            <tbody>
              {listProduct.map((product) => (
                <tr key={product._id}>
                  <td>
                    <Image
                      src={product.img}
                      width={50}
                      height={50}
                      objectFit="cover"
                      alt=""
                    />
                  </td>
                  <td>{product._id.slice(0, 5)}...</td>
                  <td>{product.title}</td>
                  <td>${product.prices[0]}</td>
                  <td className="admin-action">
                    <button className="admin-action-edit">Edit</button>
                    <button
                      className="admin-action-delete"
                      onClick={() => HandleDeleteProduct(product._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          ) : (
            ""
          )}
        </table>
      </div>
      <div className="admin-item">
        <h1 className="admin-title">Orders</h1>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Customer</th>
              <th>Total</th>
              <th>Payment</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          {listOrder.length !== 0 ? (
            <tbody>
              {listOrder.map((order) => (
                <tr key={order._id}>
                  <td>{order._id.slice(0, 5)}...</td>
                  <td>{order.customer}</td>
                  <td>${order.total}</td>
                  <td>{order.method === 0 ? "cash" : "paid"}</td>
                  <td>{status[order.status]}</td>
                  <td>
                    <button
                      className="admin-action-nextStage"
                      onClick={() => HandleStatus(order._id)}
                    >
                      Next Stage
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          ) : (
            ""
          )}
        </table>
      </div>
      {showModal && <AppAdminAddProduct setShowModal={setShowModal} />}
    </div>
  );
};

export default Admin;

GetLayout(Admin);

export const getServerSideProps = async (ctx) => {
  const myCookie = ctx.req?.cookies || "";

  if (myCookie.token !== process.env.TOKEN) {
    return {
      redirect: {
        destination: "/admin/login",
        permanent: false,
      },
    };
  }

  const productRes = await axios.get("http://localhost:3000/api/products");
  const orderRes = await axios.get("http://localhost:3000/api/orders");
  return {
    props: {
      products: productRes.data,
      orders: orderRes.data,
    },
  };
};
