"use client"
import store from "../store/store";
import { Provider as ReduxProvider } from 'react-redux';
import {Props} from "next/script";

export default function RootTemplate({ children }: Props) {
  return (
    <ReduxProvider store={store}>
          {children}
    </ReduxProvider>
  );
}