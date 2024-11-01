// pages/index.js
export async function getStaticProps() {
    const items = ["Item1", "Item2", "Item3"];
    return { props: { items } };
}

export default function Home({ items }) {
    return (
        <ul>
            {items.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    );
}
