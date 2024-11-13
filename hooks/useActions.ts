import { bindActionCreators } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import {SidebarActions} from "@/store/sidebarSlice";
import {ChatActions} from "@/store/chatSlice";

const allActions = {
  ...SidebarActions,
  ...ChatActions,

}

export const useActions = () => {
  const dispatch = useDispatch()
  return bindActionCreators(allActions, dispatch)
}