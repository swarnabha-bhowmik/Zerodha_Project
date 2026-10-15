import {useState} from "react"
import {Tooltip, Grow} from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import BarChartIcon from '@mui/icons-material/BarChart';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Dialog from "./Dialog.jsx";

const StockItems = ({stock, index}) => {
    const [showStockItemActions, setShowStockItemActions] = useState(false);
    const [dialogMode, setDialogMode] = useState(null); // "BUY" | "SELL" | null

    const handleMouseEnter = () => {
        setShowStockItemActions(true);
    };

    const handleMouseExit = () => {
        setShowStockItemActions(false);
    };

    return (
        <li 
            className = "watchlist-item" 
            onMouseEnter = {handleMouseEnter} 
            onMouseLeave = {handleMouseExit}
            onClick = {() => setShowStockItemActions((prev) => !prev)}
        >
            <div className = "item">
                <p className = {`stock-name ${stock.isDown ? "loss": "profit"}`}>{stock.name}</p>
                <div className = "item-info">
                    <span className = "percent">{stock.percent}</span>
                    {stock.isDown ? (
                        <KeyboardArrowDownIcon className = "arrow-icon loss" />
                    ) : (
                        <KeyboardArrowUpIcon className = "arrow-icon profit" />
                    )}
                    <span className = "price">{stock.price}</span>
                </div>
            </div>
            {showStockItemActions && (
                <StockItemActions 
                    uid = {index} 
                    onBuyClick = {() => setDialogMode("BUY")} 
                    onSellClick = {() => setDialogMode("SELL")} 
                />
            )}
            {dialogMode && (
                <Dialog 
                    mode = {dialogMode}
                    stock = {stock} 
                    onClose = {() => setDialogMode(null)} 
                />
            )}
        </li>
    )
}

const StockItemActions = ({uid, onBuyClick, onSellClick}) => {
    return (
        <span className = "actions" data-uid = {uid}>
            <Tooltip
                title = "Buy (B)"
                placement = "top"
                arrow
                TransitionComponent = {Grow}
            >
                <button className = "buy" onClick = {onBuyClick}>Buy</button>
            </Tooltip>
            <Tooltip
                title = "Sell (S)"
                placement = "top"
                arrow
                TransitionComponent = {Grow}
            >
                <button className = "sell" onClick = {onSellClick}>Sell</button>
            </Tooltip>
            <Tooltip
                title = "Analytics (A)"
                placement = "top"
                arrow
                TransitionComponent = {Grow}
            >
                <button className = "action">
                    <BarChartIcon className = "icon"/>
                </button>
            </Tooltip>
            <Tooltip
                title = "More"
                placement = "top"
                arrow
                TransitionComponent = {Grow}
            >
                <button className = "action">
                    <MoreHorizIcon className = "icon"/>
                </button>
            </Tooltip>
        </span>
    )
}

export default StockItems