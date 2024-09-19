function AppFooter() {
	return (
		<footer className="bg-neutral-50 border-t border-neutral-100 py-4">
			<div className="container">
				<div className="text-center">
					<p className="text-xs text-neutral-400">
						Telif hakları © {new Date().getFullYear()} Ce-Tek Spray Nozzle. Her hakkı
						saklıdır.
					</p>
				</div>
			</div>
		</footer>
	);
}

export default AppFooter;
