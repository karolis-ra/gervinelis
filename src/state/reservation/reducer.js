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

export const reservationInfo = createAsyncThunk(
  "data/reservationInfo",
  async () => {
    return await fetch("http://176.223.135.73/api/booking-time/get-all")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response error");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        return data;
      })
      .catch((error) => {
        console.error("There was a problem fetching the data:", error);
      });
  }
);

export const getProduct = createAsyncThunk(
  "data/getProduct",
  async (productId) => {
    return await fetch(`http://176.223.135.73/api/products/${productId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response error");
        }
        return response.json();
      })
      .then((data) => {
        console.log("this is fetch data", data);
        return data;
      })
      .catch((error) => {
        console.error("There was a problem fetching the data:", error);
      });
  }
);

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
  reservedDates: [],
  orderProducts: [],
  singleProducts: [],
  fetching: true,
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
    cancelProduct: (state, { payload }) => {
      const index = state.orderProducts.indexOf(payload);
      state.orderProducts.splice(index, 1);
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
  },
  extraReducers: (builder) => {
    builder.addCase(fetchData.fulfilled, (state, { payload }) => {
      state.products = payload.data;
      state.fetching = false;
    });
    builder.addCase(reservationInfo.fulfilled, (state, { payload }) => {
      console.log("this is payload", payload);
      state.reservedDates = payload;
    });
    builder.addCase(orderData.fulfilled, (state, { payload }) => {
      console.log("order sent", payload);
    });
    builder.addCase(getProduct.fulfilled, (state, { payload }) => {
      state.singleProducts.push(payload.data);
    });
  },
});

export const {
  sectionControl,
  addProducts,
  addDate,
  clearSingleProducts,
  cancelProduct,
} = reservationSlice.actions;

export default reservationSlice.reducer;
