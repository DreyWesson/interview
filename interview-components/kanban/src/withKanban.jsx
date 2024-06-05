import React, { useEffect, useRef, useState } from "react";
import { useDebounce } from "./useDebounce";

export const withKanban = (WrappedComponent) => () => {
    const phases = ["Test", "Development", "Production", "Completion"];
    const color = [
        "252, 7, 3,.5",
        "3, 252, 119,0.5",
        "3, 128, 252,0.5",
        "252, 231, 3,0.5",
    ];

    const [formData, setFormData] = useState("");
    const [boardData, setBoardData] = useState(
        phases.reduce((prev, curr) => ({ ...prev, [curr]: [] }), {})
    );
    console.log(boardData);
    const dragZone = {
        columnDest: null,
        destIndex: null,
        initColumn: null,
        initIndex: null,
    };

    const kanban = {
        handleForm(e) {
            setFormData(e.target.value);
        },
        handleAddBtn() {
            if (formData === "") return;

            const copy = { ...boardData };
            copy[phases[0]].push(formData);
            setFormData("");
            setBoardData(() => copy);
        },

        handleMove(e, currentStage, stageIndex, moveType = "next") {
            if (e.type === "contextmenu") moveType = "prev";
            const copy = { ...boardData };
            let val = copy[phases[currentStage]].splice(stageIndex, 1)[0];
            moveType === "next"
                ? currentStage < phases.length - 1 &&
                  copy[phases[currentStage + 1]].unshift(val)
                : currentStage > 0 && copy[phases[currentStage - 1]].push(val);
            setBoardData(() => copy);
        },
        handleDrag() {
            const copy = { ...boardData };
            const { initColumn, initIndex, columnDest, destIndex } = dragZone;
            let val = copy[phases[initColumn]].splice(initIndex, 1)[0];
            copy[phases[columnDest]].splice(destIndex, 0, val);
            setBoardData(() => copy);
        },
        handleDragStart(stage, index) {
            dragZone.initColumn = stage;
            dragZone.initIndex = index;
        },
    };

    const inputRef = useRef(null);
    useEffect(() => inputRef.current.focus(), []);
    return (
        <WrappedComponent
            kanban={kanban}
            dragZone={dragZone}
            formData={formData}
            boardData={boardData}
            color={color}
            inputRef={inputRef}
        />
    );
};
