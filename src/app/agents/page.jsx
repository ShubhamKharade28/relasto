"use client";
import agents from "@/assets/agents";
import NavBar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";

import { useEffect, useState } from "react";
import SearchAgentSection from "@/app/components/agents/SearchAgentSection";
import AgentsContainer from "@/app/components/agents/AgentsContainer";

// stimulate availabilty of many pages using same no. of pages in different orders

const AgentListPage = () => {
    const [address, setAddress] = useState('');
    const [review, setReview] = useState('');

    function onSearchAgent(e){
        e.preventDefault();
        console.log('Searching for agent \n\t with address :', address, "\n\t and review : ", review);
    }

    const [agentPages, setAgentPages] = useState([]);
    useEffect(() => {
        const pages = [];
        let n = 5;
        for(let i=0; i<n; i++){
            let page = [...agents];
            for (let i = page.length - 1; i> 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [page[i], page[j]] = [page[j], page[i]];
            }
            pages.push(page);
        }
        setAgentPages(pages);
        console.log(pages);
    }, []); 

    return (
        <main className="flex flex-col w-screen min-h-screen">
            <NavBar />
            <div className="orange-bg-0 flex flex-col gap-10 py-10 px-24">
                <SearchAgentSection 
                    address={address} setAddress={setAddress}
                    review={review}  setReview={setReview}
                    onSearchHandler={onSearchAgent}
                />
                <AgentsContainer agentPages={agentPages}/>
            </div>
            <Footer />
        </main>
    )
}

export default AgentListPage;