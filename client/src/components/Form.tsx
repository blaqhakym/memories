import axios from "axios";
import { useState } from "react";
import useProducts from "../Store";
import { url } from "../constants/constants"

const Form = () => {
  const [formData, setFormData] = useState({
    order: 0,
    date: "",
    customer: "",
    total: 0,
    paymentStatus: "pending",
    fufillmentStatus: "pending",
  });

  const { addProduct } = useProducts();

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e: any) => {
    e.preventDefault();
    console.log(formData);
    addProduct(formData);

    await axios
      .post(url, formData)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err.message));
  };

  return (
    <div className="form-div">
      <form className="form" onSubmit={handleFormSubmit}>
        <label htmlFor="order">Amount: </label>
        <input
          type="number"
          name="order"
          max={10}
          min={1}
          id="order"
          value={formData.order}
          onChange={handleChange}
        />
        <label htmlFor="date">Date: </label>
        <input type="date" name="date" id="date" onChange={handleChange} />
        <label htmlFor="customer">Customer's full name: </label>
        <input
          type="text"
          name="customer"
          id="customer"
          value={formData.customer}
          onChange={handleChange}
        />
        <label htmlFor="total">Total: </label>
        <input
          type="number"
          name="total"
          id="total"
          value={formData.total}
          onChange={handleChange}
        />
        <label htmlFor="payment">Payment status: </label>
        <select
          name="paymentStatus"
          id="payment"
          value={formData.paymentStatus}
          onChange={handleChange}>
          <option value="Pending">Pending</option>
          <option value="Paid">Paid</option>
          <option value="Refunded">Refunded</option>
        </select>
        <label htmlFor="fufillment">Fufilment status: </label>
        <select
          name="fufillmentStatus"
          id="fufillment"
          value={formData.fufillmentStatus}
          onChange={handleChange}>
          <option value="Pending">Pending</option>
          <option value="Shipped">Shipped</option>
          <option value="Delivered">Delivered</option>
        </select>
        <button type="submit">Post product</button>
      </form>
    </div>
  );
};

export default Form;
