import React, { Suspense, lazy } from "react";
import Chats from "./Chats";
const Cat = lazy(() => import("../../components/Cat"));

const GeneralApp = () => {
    return (
        <>
            {/* <Suspense direction="row" sx={{ width: "100%" }} fallback="Loading..."> */}
            <Chats />
            {/* </Suspense> */}
        </>
    );
};

export default GeneralApp;
