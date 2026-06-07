import Section from "@/components/Section";
import BookCard from "@/components/BookCard";

export default function ReadsPage() {
  const books = [
    {
      title: "Greenlights",
      author: "Matthew McConaughey",
      image: "/book12.jpg",
      rotation: 4,
      scale: 0.98,
      showTitle: true
    },
    {
      title: "Steve Jobs",
      author: "Walter Isaacson",
      image: "/book10.jpg",
      rotation: 1,
      scale: 0.96,
      showTitle: true
    },
    {
      title: "When Breath Becomes Air",
      author: "Paul Kalanithi",
      image: "/book1.jpg",
      rotation: -3,
      scale: 0.98,
      showTitle: true
    },
    {
      title: "Permanent Record",
      author: "Edward Snowden",
      image: "/book2.jpg",
      rotation: 2,
      scale: 1,
      showTitle: true
    },
    {
      title: "Elon Musk",
      author: "Walter Isaacson",
      image: "/book9.jpg",
      rotation: -3,
      scale: 1,
      showTitle: true
    },
  ];

  return (
    <Section>
      <div className="mb-10 md:mb-12">
        <h1 className="text-3xl md:text-5xl font-serif mb-4">Reads</h1>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 md:gap-10 lg:gap-12 overflow-visible">
        {books.map((book, index) => (
          <div
            key={index}
            className="relative overflow-visible"
            style={{
              padding: '2rem 0',
              marginTop:
                index % 5 === 1
                  ? '3rem'
                  : index % 5 === 2
                  ? '1.5rem'
                  : index % 5 === 3
                  ? '2.5rem'
                  : index % 5 === 4
                  ? '0.5rem'
                  : '0',
            }}
          >
            <BookCard
              title={book.title}
              author={book.author}
              image={book.image}
              rotation={book.rotation}
              scale={book.scale}
              showTitle={book.showTitle}
            />
          </div>
        ))}
      </div>
    </Section>
  );
}