import ClientComponent from '../../../components/client-component';

export default function Page({
  params,
}: {
  params: { id: string | string[] };
}) {
  return (
    <div>
      book/{params.id} 페이지
      <ClientComponent>
        <></>
      </ClientComponent>
    </div>
  );
}
