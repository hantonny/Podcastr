export default function Home(props) {
  return (
    <div>
      <h1>index</h1>
      <p>{JSON.stringify(props.episodes)}</p>
    </div>
  )
}

export async function getStaticProps() {
  const response = await fetch('http://localhost:3333/episodes');
  const date = await response.json();

  return {
    props: {
      episodes: date
    },
    revalidate: 60 * 60 * 8,
  }
}
