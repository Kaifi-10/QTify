import React, { useEffect, useState } from "react";
import styles from "./Section.module.css";
import { CircularProgress } from "@mui/material";
// import Card from "./../Card/Card";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";
import Filters from "../Filters/Filters";


const Section = ({ data, title, type, filterSource }) => {
  const [carouselToggle, setCarouselToggle] = useState(true);
  const [filters, setFilters] = useState([{key:"all", label:"All"}])
  const [selectedFilterIndex, setSelectedFilterIndex] = useState(0)

  useEffect(() =>{
    // console.log("genres",filterSource)
    // console.log("data:", data)
    if (filterSource) {
        filterSource().then((response) => {
          const { data } = response;
          setFilters([...filters, ...data]);
        });
      }

      console.log("filters",filters)
  },[])

  const showFilters=filters.length>1;
  const cardsToRender = data?.filter((card) =>
  showFilters && selectedFilterIndex !== 0
    ? card.genre.key === filters[selectedFilterIndex].key
    : card
);


  const handleToggle = () => {
    setCarouselToggle((prevState) => !prevState);
  };

  return (
    <div>
      <div className={styles.header}>
        <h3>{title}</h3>
        {showFilters? (
            <></>
        ):(
            <h4 className={styles.toggleText} onClick={handleToggle}>
            {!carouselToggle ? "Collapse All" : "Show All"}
          </h4>
        )}
        
      </div>
      {showFilters && (
        <div className={styles.filterWrapper}>
          <Filters 
              filters={filters}
              selectedFilterIndex={selectedFilterIndex}
              setSelectedFilterIndex={setSelectedFilterIndex}/>
        </div>
      )}
      {data.length === 0 ? (
        <CircularProgress />
      ) : (
        <div className={styles.cardWrapper}>
          {!carouselToggle ? (
            <div className={styles.wrapper}>
              {cardsToRender.map((ele, index) => (
                <Card key={index} data={ele} type={type} />
              ))}
            </div>
          ) : (
            <Carousel
              data={cardsToRender}
              renderComponent={(data) => <Card data={data} type={type} />}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Section;
