import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<link
					href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<body>
				<script>0</script>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
// import Document, { Html, Head, Main, NextScript } from 'next/document';
//
// export default class MyDocument extends Document {
// 	render() {
// 		return (
// 			<Html lang="en">
// 				<Head>
// 					<link
// 						href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
// 						rel="stylesheet"
// 					/>
// 				</Head>
// 				<body>
// 					<Main />
// 					<NextScript />
// 					{/* Empty script tag as chrome bug fix, see https://stackoverflow.com/a/42969608/943337 */}
// 					<script> </script>
// 				</body>
// 			</Html>
// 		);
// 	}
// }
