import React, {
  useReducer,
  createContext,
  useCallback,
  useState,
  useContext,
  useMemo,
} from "react";

export const initialState = () => {
  return {};
};

export const AppContext = createContext();

export const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return initialState;
  }
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [showUser, setShowUser] = useState(true);
  const [showLoader, setShowLoader] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [showMoreInfo, setShowMoreInfo] = useState(false);
  const [infoData, setInfoData] = useState({});
  const [showExplore, setShowExplore] = useState(false);
  const [exploreData, setExploreData] = useState([]);
  const [contactMe, setContactMe] = useState(false);
  const [category, setCategory] = useState("");
  const [showSpinner, setShowSpinner] = useState(false);
  const [sentMsg, setSentMsg] = useState(false);

  const data = useMemo(() => {
    return {
      state,
      showUser,
      setShowUser,
      showLoader,
      setShowLoader,
      showDetails,
      setShowDetails,
      showPreview,
      setShowPreview,
      showMoreInfo,
      setShowMoreInfo,
      infoData,
      setInfoData,
      showExplore,
      setShowExplore,
      exploreData,
      setExploreData,
      contactMe,
      setContactMe,
      category,
      setCategory,
      showSpinner,
      setShowSpinner,
      sentMsg,
      setSentMsg,
    };
  }, [
    state,
    showUser,
    setShowUser,
    showLoader,
    setShowLoader,
    showDetails,
    setShowDetails,
    showPreview,
    setShowPreview,
    showMoreInfo,
    setShowMoreInfo,
    infoData,
    setInfoData,
    showExplore,
    setShowExplore,
    exploreData,
    setExploreData,
    contactMe,
    setContactMe,
    category,
    setCategory,
    showSpinner,
    setShowSpinner,
    sentMsg,
    setSentMsg,
  ]);
  return <AppContext.Provider value={data}>{children}</AppContext.Provider>;
};

export const useAppContextData = () => {
  const data = useContext(AppContext);
  return data;
};
