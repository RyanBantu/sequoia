import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<Html lang='en'>
				<Head>
					<style>{`
						body {
							margin: 0;
							padding: 0;
							background: black !important;
						}
						#bg-wrapper {
							position: fixed;
							top: 0;
							left: 0;
							width: 100%;
							height: 100%;
							z-index: -10;
							background-image: url('/img/bg.jpg');
							background-size: cover;
							background-position: center center;
							background-repeat: no-repeat;
							background-attachment: fixed;
							opacity: 1;
						}
						
						/* Content container styles */
						#__next {
							position: relative;
							z-index: 1;
							min-height: 100vh;
							// padding: 10px;
						}
						
						/* Additional default content background - will be overridden by specific container styles */
						.home_cont, .services_main_container, .services, #gallery, .contact {
							position: relative;
							z-index: 2;
						}
					`}</style>
				</Head>
				<body>
					<div id="bg-wrapper"></div>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
