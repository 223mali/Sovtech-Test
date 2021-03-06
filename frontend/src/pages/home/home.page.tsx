import React, { Suspense, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetSample } from "../../actions/SampleAction";
// import CategoriesDirectory from "../../components/categories-directory/CategoriesDirectory.component";
import { RootStore } from "../../Store";
import { ReactComponent as Spinner } from '../../assets/spinner.svg';

const CategoriesDirectory = React.lazy(() => import('../../components/categories-directory/CategoriesDirectory.component'));

const HomePage = () => {
  
  return (
    <div style={style.pageRoot}>
      <Suspense fallback={<Spinner/>}>
      <CategoriesDirectory />
      </Suspense>
      
    </div>
  );
};

const style={
  pageRoot:{
    paddingBottom: '2em',
    paddingTop: '1em'
  }
}

export default HomePage;
