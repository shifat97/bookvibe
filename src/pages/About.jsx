import StoreImage from "../assets/store.jpg";

export default function About() {
  return (
    <div className="mt-10">
      <h1 className="text-3xl text-center font-bold bg-gray-100 p-10">
        About Us
      </h1>
      <div className="mt-10">
        <img
          className="rounded-xl"
          width="100%"
          src={StoreImage}
          alt="Book Vibe"
        />
      </div>
      <div className="mt-6">
        <p>
          Step into the sprawling expanse of our literary haven, a grandiose
          sanctuary where the magic of storytelling knows no bounds. Our
          illustrious book emporium stands as a testament to the enduring power
          of the written word, beckoning you to embark on an unforgettable
          voyage through the vast seas of human imagination. Each corner of our
          labyrinthine shelves is adorned with literary treasures, from timeless
          classics that have stood the test of time to contemporary masterpieces
          that captivate hearts and minds alike. Here, amidst the hallowed halls
          of literature, every book whispers secrets, promises adventure, and
          invites you to lose yourself in its pages. <br /> <br />
          Beyond the mere act of browsing, our bookstore is a vibrant community
          hub, a meeting ground for fellow book lovers to converge, converse,
          and share in the joy of discovery. Our shelves brim with diversity,
          offering an eclectic array of genres, perspectives, and voices that
          reflect the rich tapestry of human experience. Whether you&apos;re a
          seasoned bibliophile or a curious newcomer, our passionate team of
          literary connoisseurs is dedicated to curating personalized
          recommendations tailored to your unique tastes and interests.
          Together, we&apos;ll unlock the door to new worlds, expand your
          horizons, and ignite the spark of curiosity that fuels a lifelong love
          affair with reading. <br /> <br />
          But our bookstore is more than just a purveyor of books; it&apos;s a
          sanctuary for the soul, a refuge from the hustle and bustle of
          everyday life. Here, amidst the scent of well-worn pages and the
          gentle rustle of turning leaves, you&apos;ll find respite,
          inspiration, and the solace of kindred spirits who share your love for
          the written word. Whether you seek enlightenment, entertainment, or
          simply a moment of quiet reflection, our doors are open, and our
          shelves await your exploration. Welcome to our literary paradise,
          where every visit is an adventure, and every book is a cherished
          companion on the journey of a lifetime.
        </p>
      </div>
    </div>
  );
}
