import SearchForm from "@/components/SearchForm";
import StartUpCard from "@/components/StartUpCard";
export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;
  const posts = [
    {
      _createdAt: 'Yesterday',
      views: 55,
      author: {
        _id: 1,
        name: 'Jasmeet',
        src: 'https://yc-directory.vercel.app/_next/image?url=https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F24898559%3Fv%3D4&w=128&q=75'
      },
      _id: 1,
      description: "This is the description",
      image: "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2069",
      category: "We Robots",
      title: "We Robots"
    },
  ];

  return (
    <>

      <section className="pink_container">
        <h1 className="heading">
          Pitch Your Startup, <br /> Connect with Entrepreneurs
        </h1>

        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions.
        </p>

        <SearchForm query={query} />

      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search Result for "${query}"` : "All StartUps"}
        </p>

        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupTypeCard) =>
              <StartUpCard key={post?._id} post={post} />
            ))
            : (
              <p className="no-results"> No StartUps Found </p>
            )}

        </ul>

      </section>




    </>
  );
}
