import React from "react";

export const Spinner = () => {
	return (
		<div className="grid place-content-center w-full min-h-screen items-center">
			<div
				className="inline-block h-10 w-10 animate-spin rounded-full border-[2px] border-current border-t-transparent text-black"
				role="status"
				aria-label="loading">
				<span className="sr-only">Loading...</span>
			</div>
		</div>
	);
};
