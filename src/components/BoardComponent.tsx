import React, {FC, useEffect, useState} from 'react';
import {Board} from "../models/Board";
import CellComponent from "./CellComponent";
import {Cell} from "../models/Cell";
interface BoardProps {
    board :Board;
    setBoard : (board:Board) => void
}
const BoardComponent: FC<BoardProps> = ({board, setBoard}) => {
    const [selectedCell, setSelectedCell] = useState<Cell | null>(null)
    function onCellClick(cell:Cell){
        if(selectedCell && selectedCell !== cell && cell.figure?.canMove(cell)){
            selectedCell.moveFigure(cell)
            setSelectedCell(null)
        }
        if(cell.figure){
            setSelectedCell(cell)
        }

    }
    useEffect(()=>{
        highlightCells()
    }, [selectedCell])

    function highlightCells(){
        board.highlightCells(selectedCell)
        updateBoard()
    }
    function updateBoard(){
        const newBoard = board.getCopyBoard()
        setBoard(newBoard)
    }
    return (
        <div className='board'>
            {board.cells.map((row, index ) =>
            <React.Fragment key={index}>
                {row.map(cell =>
                <CellComponent
                    setSelectedCell = {onCellClick}
                    selected={cell.x === selectedCell?.x && cell.y === selectedCell?.y}
                    cell={cell}
                    key = {cell.id}
                />)}
            </React.Fragment>)}

        </div>
    );
};

export default BoardComponent;