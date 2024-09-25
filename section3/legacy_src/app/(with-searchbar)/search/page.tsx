import ClientComponent from '../../../components/client-component';

export default function Page({
  searchParams,
}: {
  searchParams: { q?: string };
}) {
  const q = searchParams.q;

  return (
    <div>
      Search 페이지 {q}
      <ClientComponent>
        <></>
      </ClientComponent>
    </div>
  );
}
