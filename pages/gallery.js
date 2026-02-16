import Image from "next/image";
import Head from "next/head";

const Gallery = () => {
  return (
    <div>
      <Head>
        <meta
          name="description"
          content="Explore our portfolio of premium tile installations for residential and commercial clients."
        />
        <meta
          name="keywords"
          content="tiles, home renovation, project gallery, premium tiles"
        />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon_package/apple-touch-icon.ico"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon_package/favicon-32x32.ico"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon_package/favicon-16x16.ico"
        />
        <link rel="manifest" href="/favicon_package/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon_package/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <title>Gallery - Our Projects Portfolio</title>
      </Head>

      <section id="gallery">
        <div className="gallery__container">
          <h1 className="gallery__title">Project Gallery</h1>

          <p className="gallery__p">
            Browse our showcase of completed projects featuring premium tile installations.
            Each project reflects our commitment to quality, transparency, and client satisfaction
            across residential and commercial spaces.
          </p>

          <div className="gallery-grid">
            {/* Gallery Box 1 */}
            <div className="gallery-grid__box-1 gallery-grid--box">
              <Image
                className="img"
                src="/img/project-image-1.jpg"
                alt="Premium tile installation"
                priority={true}
                layout="fill"
                quality={100}
              />

              <div className="gallery-grid__info">Tiles</div>
            </div>

            {/* Gallery Box 2 */}
            <div className="gallery-grid__box-2 gallery-grid--box">
              <Image
                className="img"
                src="/img/project-image-2.jpg"
                alt="Premium tile installation"
                priority={true}
                layout="fill"
                quality={100}
              />

              <div className="gallery-grid__info">Tiles</div>
            </div>

            {/* Gallery Box 3 */}
            <div className="gallery-grid__box-3 gallery-grid--box">
              <Image
                className="img"
                src="/img/project-image-3.jpg"
                alt="Premium tile installation"
                priority={true}
                layout="fill"
                quality={100}
              />
              <div className="gallery-grid__info">Tiles</div>
            </div>

            {/* Gallery Box 4 */}
            <div className="gallery-grid__box-4 gallery-grid--box">
              <Image
                className="img"
                src="/img/project-image-4.jpg"
                alt="Premium tile installation"
                priority={true}
                layout="fill"
                quality={100}
              />
              <div className="gallery-grid__info">Tiles</div>
            </div>

            {/* Gallery Box 5 */}
            <div className="gallery-grid__box-5 gallery-grid--box">
              <Image
                className="img"
                src="/img/project-image-5.jpg"
                alt="Premium tile installation"
                priority={true}
                layout="fill"
                quality={100}
              />
              <div className="gallery-grid__info">Tiles</div>
            </div>

            {/* Gallery Box 6 */}
            <div className="gallery-grid__box-6 gallery-grid--box">
              <Image
                className="img"
                src="/img/project-image-6.jpg"
                alt="Premium tile installation"
                layout="fill"
                quality={100}
              />

              <div className="gallery-grid__info">Tiles</div>
            </div>

            {/* Gallery Box 7 */}
            <div className="gallery-grid__box-7 gallery-grid--box">
              <Image
                className="img"
                src="/img/project-image-7.jpg"
                alt="Premium tile installation"
                layout="fill"
                quality={100}
              />

              <div className="gallery-grid__info">Tiles</div>
            </div>

            {/* Gallery Box 8 */}
            <div className="gallery-grid__box-8 gallery-grid--box">
              <Image
                className="img"
                src="/img/project-image-8.jpg"
                alt="Premium tile installation"
                layout="fill"
                quality={100}
              />

              <div className="gallery-grid__info">Tiles</div>
            </div>

            {/* Gallery Box 9 */}
            <div className="gallery-grid__box-9 gallery-grid--box">
              <Image
                className="img"
                src="/img/project-image-9.jpg"
                alt="Premium tile installation"
                layout="fill"
                quality={100}
              />

              <div className="gallery-grid__info">Tiles</div>
            </div>

            {/* Gallery Box 10 */}
            <div className="gallery-grid__box-10 gallery-grid--box">
              <Image
                className="img"
                src="/img/project-image-10.jpg"
                alt="Premium tile installation"
                layout="fill"
                quality={100}
              />

              <div className="gallery-grid__info">Tiles</div>
            </div>

            {/* Gallery Box 11 */}
            <div className="gallery-grid__box-11 gallery-grid--box">
              <Image
                className="img"
                src="/img/project-image-11.jpg"
                alt="Premium tile installation"
                layout="fill"
                quality={100}
              />

              <div className="gallery-grid__info">Tiles</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;