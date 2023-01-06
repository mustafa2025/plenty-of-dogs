import { demos } from '@/lib/demos';
import Link from 'next/link';

export default function Page() {
  const image = 'https://picsum.photos/id/1025/600/400/';
  return (
    <>
      <div className="col-start-3 space-y-6">
        <div
          className="p-12 text-center"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <h1 className="mb-4 text-4xl font-bold text-white">Pupster</h1>
          <p className="mb-8 text-white">They're the good boys and girls</p>
        </div>

        {/* <AddressBar /> */}
      </div>
      <div>
        <h1 className="p-6 text-4xl font-bold">Welcome to Pupster</h1>
        <p className="pl-6">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque maxime
          a dolorem ullam. Inventore reiciendis nisi repellat, accusantium
          ducimus nulla delectus dolores laborum repudiandae, deserunt neque
          explicabo voluptate libero fuga? Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Labore quasi et vitae tenetur similique,
          iusto assumenda sapiente repellat nulla rem quisquam magni eaque
          blanditiis vel harum tempore, itaque autem inventore?
        </p>
      </div>
    </>
  );
}
