export default function Page({
  searchParams,
}: {
  searchParams: { q?: string };
}) {
  const q = searchParams.q;
  return <div>Search : {q}</div>;
}
