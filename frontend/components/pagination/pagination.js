import { useSearchParams, useRouter } from 'next/navigation';

export default function Pagination({ currentPage, totalPages, pathname }) {
	const searchParams = useSearchParams();
	const router = useRouter();
	const actualPage = currentPage + 1 || 1;

	const handlePageClick = (page) => {
		if (page < 1 || page > totalPages) {
			return;
		}
		const updatedSearchParams = new URLSearchParams(searchParams.toString());
		updatedSearchParams.set('page', page - 1);
		router.push(`${pathname}?${updatedSearchParams.toString()}`);
	};

	return (
		<ol className="flex justify-center items-center gap-1 text-xs font-medium">
			<li>
				<button
					onClick={() => handlePageClick(actualPage - 1)}
					className="disabled hover:bg-orange-primary hover:cursor-pointer hover:transition-colors hover:text-white-primary hover:delay-100 inline-flex h-8 w-8 items-center justify-center rounded border border-gray-200 bg-white text-gray-900 rtl:rotate-180"
				>
					<span className="sr-only">Prev Page</span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-3 w-3"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path
							fillRule="evenodd"
							d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
							clipRule="evenodd"
						/>
					</svg>
				</button>
			</li>

			<li className="block h-8 w-8 rounded border-orange-primary bg-orange-primary text-center leading-8 text-white">
				{actualPage}
			</li>

			<li> ... </li>

			<li>
				<span
					onClick={() => handlePageClick(totalPages + 1)}
					className="hover:cursor-pointer block h-8 w-8 rounded border border-gray-200 hover:bg-orange-primary hover:transition-colors hover:text-white-primary hover:delay-100 bg-white text-center leading-8 text-gray-900"
				>
					{totalPages}
				</span>
			</li>

			<li>
				<span
					onClick={() => handlePageClick(actualPage + 1)}
					className="inline-flex hover:cursor-pointer h-8 w-8 items-center justify-center rounded border hover:bg-orange-primary hover:transition-colors hover:text-white-primary hover:delay-100 border-gray-200 bg-white text-gray-900 rtl:rotate-180"
				>
					<span className="sr-only">Next Page</span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-3 w-3"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path
							fillRule="evenodd"
							d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
							clipRule="evenodd"
						/>
					</svg>
				</span>
			</li>
		</ol>
	);
}