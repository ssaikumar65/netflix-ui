import { ArrowBackIosNewOutlined, ArrowForwardIos } from '@mui/icons-material';
import { useRef, useState } from 'react';
import ListItem from '../ListItem/ListItem';
import './List.css';

const List = () => {
    const listRef=useRef();
    const [isMoved, setIsMoved] = useState(false);
    const [slideNumber, setSlideNumber] = useState(0);
    const handleClick = (direction) =>{
        setIsMoved(true);
        if(direction==="left" && slideNumber >0){
            let dis = listRef.current.getBoundingClientRect().x-50;
            listRef.current.style.transform = `translateX(${dis+265}px)`;
            setSlideNumber(slideNumber - 1);
        }
        if(direction==="right" && slideNumber < 5){
            let dis = listRef.current.getBoundingClientRect().x-50;
            listRef.current.style.transform = `translateX(${dis-265}px)`;
            setSlideNumber(slideNumber + 1);
        }
    

    }
  return (
    <div className='list'>
        <span className="listTitle">Continue To Watch</span>
        <div className='wrapper'>
            <ArrowBackIosNewOutlined 
            style={{ display: !isMoved && "none" }}
            onClick={()=>handleClick("left")} 
            className='sliderArrow left'/>
            <div className="container" ref={listRef}>
            <ListItem/>
            <ListItem/>
            <ListItem/>
            <ListItem/>
            <ListItem/>
            <ListItem/>
            <ListItem/>
            <ListItem/>
            <ListItem/>
            <ListItem/>
            </div>
            <ArrowForwardIos onClick={()=>handleClick("right")} className='sliderArrow right'/>
        </div>
    </div>
  )
}

export default List