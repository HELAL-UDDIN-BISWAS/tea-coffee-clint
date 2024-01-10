import { useQuery } from "@tanstack/react-query";

const Prodects = () => {
    const { data } = useQuery({
        queryKey: ['data'],
        queryFn: () =>
          fetch('/data.json').then((res) =>
            res.json(),

          ),
      })
      console.log(data)
    
    return (
        <div>
            p
        </div>
    );
};

export default Prodects;