function AppFooter() {
	return (
		<footer className="bg-neutral-50 border-t border-neutral-100 py-4 mt-auto">
			<div className="container">
				<div className="text-center">
					<p className="text-xs text-neutral-400">
						Telif hakları © {new Date().getFullYear()} Manas. Her hakkı saklıdır.
					</p>
				</div>
			</div>
		</footer>
	);
}

export default AppFooter;
