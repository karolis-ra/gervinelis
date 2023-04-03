import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk("data/fetchData", async () => {
  return await fetch("http://176.223.135.73/api/products")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response error");
      }
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error("There was a problem fetching the data:", error);
    });
});

export const orderData = createAsyncThunk("data/orderData", async (order) => {
  console.log("this is order going to server", JSON.stringify(order));
  const response = await fetch("http://176.223.135.73/api/order/create", {
    method: "POST",
    cors: "no-cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(order),
  });
  if (!response.ok) {
    const error = await response.text();
    throw new Error(error);
  }
  return response.json();
});

const initialState = {
  activeServiceBlocks: [],
  products: [],
  fetching: true,
  orderProducts: [],
  book_from: "",
  book_to: "",
  order: {},
};

export const reservationSlice = createSlice({
  name: "reservation",
  initialState,
  reducers: {
    sectionControl: (state, { payload }) => {
      const index = state.activeServiceBlocks.indexOf(payload);

      state.activeServiceBlocks.includes(payload)
        ? state.activeServiceBlocks.splice(index, 1)
        : state.activeServiceBlocks.push(payload);
    },
    addProducts: (state, { payload }) => {
      state.orderProducts.push(payload);
    },
    addDate: (state, { payload }) => {
      const inputDate1 = new Date(payload[0]);
      const outputDateStr1 =
        inputDate1.toISOString().slice(0, 10) + "T00:00:00+00:00";

      const inputDate2 = new Date(payload[1]);
      const outputDateStr2 =
        inputDate2.toISOString().slice(0, 10) + "T00:00:00+00:00";

      state.book_from = outputDateStr1;
      state.book_to = outputDateStr2;
    },
    addPersonalData: (state, { payload }) => {
      state.order = payload;
      state.order.products = state.orderProducts;
      state.order.book_from = state.book_from;
      state.order.book_to = state.book_to;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchData.fulfilled, (state, { payload }) => {
      console.log("data fetched");
      state.products = payload.data;
      state.fetching = false;
    });
    builder.addCase(orderData.fulfilled, (state, { payload }) => {
      console.log("order sent", payload);
    });
  },
});

export const { sectionControl, addProducts, addPersonalData, addDate } =
  reservationSlice.actions;

export default reservationSlice.reducer;
