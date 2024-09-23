import React from "react";

const AppLayout = ({ children }) => {
	return <main className="max-w-screen-md bg-slate-500 h-[800px] mx-auto">{children}</main>;
};

export default AppLayout;
