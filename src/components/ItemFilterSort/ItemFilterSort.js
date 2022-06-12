import React from "react";
import "./ItemFilterSort.css";

export default function ItemFilterSort({sortItems}) {
    return (
        <div className="radio-sorting">
            <label>
                <input
                    type="radio"
                    value="A-Z"
                    name="sort"
                    checked={null}
                    onChange={(event) => sortItems(event.target.value)}
                />
                name (A-Z)
            </label>
            <label>
                <input
                    type="radio"
                    value="Agency"
                    name="sort"
                    checked={null}
                    onChange={(event) => sortItems(event.target.value)}
                />
                Agency
            </label>
        </div>
    );
}
