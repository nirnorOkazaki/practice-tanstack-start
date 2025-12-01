import React, { createContext, useCallback , useContext, useEffect, useRef } from "react";


type CallbackFunction = (timestamp: number) => void;

interface RequestAFContextType {
	subscribe: (callback: CallbackFunction) => () => void;
}

const RequestAFContext = createContext<RequestAFContextType | null>(null);

export const RequestAFProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const callbackRef = useRef<Set<CallbackFunction>>(new Set());
	const requestID = useRef<number | null>(null);

	const loop = useCallback((timestamp: number) => {
		callbackRef.current.forEach((callback) => {
			callback(timestamp);
		});
        //
        if(callbackRef.current.size > 0) {
            requestID.current = requestAnimationFrame(loop);
        } else {
            requestID.current = null;
        }
	},[]);

    const subscribe = useCallback((callback: CallbackFunction) => {
        callbackRef.current.add(callback);

        if(requestID.current === null) {
            requestID.current = requestAnimationFrame(loop);
        }

        return () => {
            callbackRef.current.delete(callback);
            if(callbackRef.current.size === 0 && requestID.current !== null) {
                cancelAnimationFrame(requestID.current);
                requestID.current = null;
            }
        }
    },[loop]);

    useEffect(() => {
        return () => {
            if (requestID.current !== null) {
                cancelAnimationFrame(requestID.current);
                requestID.current = null;
            }
            callbackRef.current.clear();
        };
    }, [])

    return (
        <RequestAFContext.Provider value={{ subscribe }}>
            {children}
        </RequestAFContext.Provider>
     );
};

export const useRequestAF = ()=> {
    const context = useContext(RequestAFContext);
    if (!context) {
        throw new Error("useRequestAF must be used within a RequestAFProvider");
    }
    return context;
}