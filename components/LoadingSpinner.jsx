export const LoadingSpinner = () => {
	return (
		<div className="grid place-content-center w-full">
			<div
				className="inline-block h-8 w-8 animate-spin rounded-full border-[2px] border-current border-t-transparent text-black"
				role="status"
				aria-label="loading">
				<span className="sr-only">Loading...</span>
			</div>
		</div>
	);
};
