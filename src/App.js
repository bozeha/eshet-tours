
import { useRef, useState, useEffect } from "react";
import axios from "axios";
import loaderGif from './assets/loader.gif';

import { useDispatch, useSelector } from "react-redux";

/* components */
import Tour from './comps/Tour';


/* actions */
import { UpdateListOfDataAction, UpdateListSearchOfDataAction } from './actions/listOfDataAction';

import styled from "styled-components";







function App() {


  const dispatch = useDispatch();
  const [loader, setLoader] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const { data, searchData } = useSelector(state => state.dataList);




  const GetTours = async () => {
    const dataReceived = await axios.get("https://api.eshet.com/LandingPage/GetPromotions?pathname=/organized");
    dispatch(UpdateListOfDataAction(dataReceived.data[0].Promotions));
    setLoader(false);
  }

  const UpdateResultsBySearch = () => {
    let tempArray = [];
    data.map((current, index) => {
      if (current.Title.includes(searchValue)) {
        tempArray.push(current);
      }
    })
    dispatch(UpdateListSearchOfDataAction(tempArray));
    setLoader(false);
  }

  useEffect(() => {
    setLoader(true);
    GetTours();

  }, [])

  useEffect(() => {
    if (searchValue != "") {
      setLoader(true);
      UpdateResultsBySearch();
    }

  }, [searchValue])
  return (
    <div className="App">
      {loader && <LoaderImage src={loaderGif} />}
      <MainTitle>טיולים מאורגנים</MainTitle>
      <InputSearch>
        <span>סינון ע"פ:  </span>
        <input type="text" onChange={((e) => { setSearchValue(e.target.value) })} value={searchValue} />
      </InputSearch>
      {searchValue == "" &&
        <ListOfPromo>
          {data &&
            data.map((current, index) => (
              <Tour props={{ currentItem: current, currentIndex: index }} />

            ))
          }
        </ListOfPromo>
      }
      {searchValue != "" &&
        <ListOfPromo>
          {data &&
            searchData.map((current, index) => (
              <Tour props={{ currentItem: current, currentIndex: index }} />

            ))
          }
        </ListOfPromo>
      }
    </div>
  );
}




const LoaderImage = styled.img`
      position:absolute;
      top:50%;
      left:50%;
      transform:translate(-50%,-50%);
      `;
const ListOfPromo = styled.div`
      margin-top:15px;
      display:flex;
      flex-direction:row;
      justify-content: space-around;
      flex-wrap: wrap;
      @media only screen and (max-width: 768px) {
        flex-direction:column;
        padding:5px;
        margin:5px;
        border:1px solid darkblue;
        border-radius:3px;
      }
      `;
const InputSearch = styled.div`
  padding-right:10px;
`;
const MainTitle = styled.div`
  padding-right:10px;
  font-weight: normal;
    font-family: inherit;
    font-size: 2em;
`;
export default App;
