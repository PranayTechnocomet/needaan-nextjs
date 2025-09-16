import { useChatStartMutation, useCreateSecurityDataMutation } from '@/redux/api/needanSessionStart';
import React from 'react'
import { useDispatch } from 'react-redux';

export default function useSessionStart() {
    const dispatch = useDispatch();
    // inside your component
    const [createSecurityData] = useCreateSecurityDataMutation();
    const [startChatdata] = useChatStartMutation();

    const createSecurity = async (payload) => {
        try {
            console.log("payload", payload);

            // 👇 unwrap returns exactly the body your API sent back
            const res = await createSecurityData(payload).unwrap();
            console.log("API body:", res);

            return res; // always return the body
        } catch (err) {
            const errorMsg = err?.data?.message || err?.error || 'Something went wrong';
            console.error("API Error:", errorMsg);
            throw err; // rethrow so .catch in handleSubmit works
        }
    };
    const startChats = async (payload) => {
        try {
            console.log("payload", payload);

           
            const res = await startChatdata(payload).unwrap();
            console.log("API body:", res);

            return res; 
        } catch (err) {
            const errorMsg = err?.data?.message || err?.error || 'Something went wrong';
            console.error("API Error StartChat:", errorMsg);
            throw err; 
        }
    };


    return {
        createSecurity,
        startChats,
    };
}
