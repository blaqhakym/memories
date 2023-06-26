import useFetch from '../hooks/useFetch'


const ListItems = () => {
  const [isLoading, isError, data, error] = useFetch()

  if (isLoading) return <p>Loading data...</p>;
  if (isError) return <span>Error: {error.message}</span>;

  return (
    <div>
      <ul>
        {data?.map((p: any) => (
          <ul key={p.customer}>{p.customer}</ul>
        ))}
      </ul>
    </div>
  );
};

export default ListItems;
