import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RoutesList } from "../utils/master-menu";
import { setActiveRouterPage } from "../store/slices/ui-controls";
import { useDispatch } from "react-redux";

const useNavigation = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [previousPath, setPreviousPath] = useState("");

  const handleNavigation = (path?: string) => {
    if (previousPath !== path) {
      setPreviousPath(path ?? RoutesList.NOT_FOUND);
      navigate(path ?? RoutesList.NOT_FOUND);
      dispatch(setActiveRouterPage(path ?? RoutesList.NOT_FOUND));
    }
  };

  return {
    handleNavigation,
  };
};

export default useNavigation;
