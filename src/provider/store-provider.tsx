"use client";
import { store } from "@/store/store";
import { Provider } from "react-redux";
export const StoreProvider = (props: { children: React.ReactNode }) => {
  return <Provider store={store}>{props.children}</Provider>;
};
