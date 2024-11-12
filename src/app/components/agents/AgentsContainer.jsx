"use client";
import { useEffect, useState } from "react";
import AgentCard from "./AgentCard";

const AgentsContainer = ({agentPages}) => {
    const [currentPageIdx, setCurrentPageIdx] = useState(0);
    const [currentPage, setCurrentPage] = useState(agentPages?.[0] || []);

    useEffect(() => {
        if(agentPages && agentPages[currentPageIdx]) {
            setCurrentPage(agentPages[currentPageIdx]);
        }
    }, [currentPageIdx, agentPages]);
    
    return (
        <div className="flex flex-col gap-10">
            <div className="grid grid-cols-4 w-full gap-10">
                {currentPage.map((agent) => (
                    <AgentCard agent={agent}/>
                ))}
            </div>
            <div className="flex justify-between">
                <div className="flex gap-2">
                    {agentPages.map((page, idx) => (
                        <button 
                            onClick={(e) => setCurrentPageIdx(idx)}
                            className={`py-2 px-4 border-2 rounded-lg ${idx==currentPageIdx ? 'border-black' : ''}` }
                        >
                            {idx+1}
                        </button>
                    ))}
                </div>
                <button
                    className="py-2 px-4 border-2 rounded-lg"
                    onClick={(e) => setCurrentPageIdx((currentPageIdx+1)% agentPages.length)}
                >Next Page</button>
            </div>
        </div>
    )
}

export default AgentsContainer;