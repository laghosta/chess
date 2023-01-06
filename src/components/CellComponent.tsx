import React, {FC} from 'react';
import {Cell} from "../models/Cell";
interface CellProps{
    cell:Cell;
    selected: boolean;
    setSelectedCell:(cell:Cell) => void
}
const CellComponent: FC<CellProps> = ({cell, selected, setSelectedCell}) => {
    return (
        <div className={['cell', cell.color, selected ? "selected" : ''].join(' ')}
        onClick={()=>setSelectedCell(cell)}
         style={{backgroundColor :cell.available && cell.figure ? "green" : ''}}
        >
            {cell.available && !cell.figure ? <div className="available"></div>:null}
            {cell.figure?.logo && <img width="64px" height="64px" src={cell.figure.logo} alt="figure"/>}
        </div>
    );
};

export default CellComponent;